import Booking from '../models/Booking.js';
import Destination from '../models/Destination.js';
import mongoose from 'mongoose';

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
export const createBooking = async (req, res, next) => {
    try {
        const {
            source,
            destinationCity,
            destinationId,
            transportMode,
            startDate,
            travelers,
            totalPrice,
            specialRequests,
            selectedTransport,
            selectedHotel
        } = req.body;

        console.log('Booking request received:', req.body);

        // Sanitize destinationId - ensure it's a valid ObjectId or null
        const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
        const finalDestinationId = (destinationId && isValidObjectId(destinationId)) ? destinationId : null;

        // Create booking
        const booking = await Booking.create({
            user: req.user.id,
            source,
            destination: finalDestinationId,
            destinationCity,
            transportMode,
            startDate,
            endDate: startDate,
            travelers,
            totalPrice,
            specialRequests,
            selectedTransport,
            selectedHotel,
            status: 'confirmed',
            paymentInfo: {
                status: 'completed',
                transactionId: `TXN${Date.now()}`
            }
        });

        // Try to populate if finalDestinationId exists
        if (finalDestinationId) {
            await booking.populate('destination');
        }
        await booking.populate('user', 'name email');

        res.status(201).json({
            success: true,
            data: booking
        });
    } catch (error) {
        console.error('SERVER BOOKING ERROR:', error);
        next(error);
    }
};

// @desc    Get user bookings
// @route   GET /api/bookings
// @access  Private
export const getUserBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find({ user: req.user.id })
            .populate('destination')
            .sort('-createdAt');

        res.status(200).json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get single booking
// @route   GET /api/bookings/:id
// @access  Private
export const getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id)
            .populate('destination')
            .populate('user', 'name email');

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found'
            });
        }

        // Make sure user is booking owner
        if (booking.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to access this booking'
            });
        }

        res.status(200).json({
            success: true,
            data: booking
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Cancel booking
// @route   PUT /api/bookings/:id/cancel
// @access  Private
export const cancelBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found'
            });
        }

        // Make sure user is booking owner
        if (booking.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to cancel this booking'
            });
        }

        booking.status = 'cancelled';
        await booking.save();

        res.status(200).json({
            success: true,
            data: booking
        });
    } catch (error) {
        next(error);
    }
};
