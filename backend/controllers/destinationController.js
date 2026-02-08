import Destination from '../models/Destination.js';
import mongoose from 'mongoose';

// @desc    Get all destinations
// @route   GET /api/destinations
// @access  Public
export const getDestinations = async (req, res, next) => {
    try {
        const { search, category, state, country, minPrice, maxPrice, minRating, featured, sort, page = 1, limit = 100 } = req.query;

        // Build query
        let query = {};

        // Search by name or description
        if (search) {
            query.$text = { $search: search };
        }

        // Filter by category
        if (category) {
            query.category = category;
        }

        // Filter by state
        if (state) {
            query['location.state'] = state;
        }

        // Filter by country
        if (country) {
            query['location.country'] = country;
        }

        // Filter by price range
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        // Filter by rating
        if (minRating) {
            query.rating = { $gte: Number(minRating) };
        }

        // Filter by featured
        if (featured === 'true') {
            query.featured = true;
        }

        // Build sort
        let sortOption = {};
        if (sort === 'price-low') {
            sortOption = { price: 1 };
        } else if (sort === 'price-high') {
            sortOption = { price: -1 };
        } else if (sort === 'rating') {
            sortOption = { rating: -1 };
        } else {
            sortOption = { createdAt: -1 };
        }

        // Pagination
        const skip = (page - 1) * limit;

        // Execute query
        const destinations = await Destination.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(Number(limit));

        // Get total count
        const total = await Destination.countDocuments(query);

        res.status(200).json({
            success: true,
            count: destinations.length,
            total,
            page: Number(page),
            pages: Math.ceil(total / limit),
            data: destinations
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get single destination
// @route   GET /api/destinations/:id
// @access  Public
export const getDestination = async (req, res, next) => {
    try {
        let destination;
        const id = req.params.id;

        // Check if id is a valid ObjectId
        if (mongoose.Types.ObjectId.isValid(id)) {
            destination = await Destination.findById(id);
        } else {
            // Fallback: try to find by name (case-insensitive)
            destination = await Destination.findOne({
                name: { $regex: new RegExp(`^${id}$`, 'i') }
            });
        }

        if (!destination) {
            return res.status(404).json({
                success: false,
                message: 'Destination not found'
            });
        }

        res.status(200).json({
            success: true,
            data: destination
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Create destination
// @route   POST /api/destinations
// @access  Private/Admin
export const createDestination = async (req, res, next) => {
    try {
        const destination = await Destination.create(req.body);

        res.status(201).json({
            success: true,
            data: destination
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update destination
// @route   PUT /api/destinations/:id
// @access  Private/Admin
export const updateDestination = async (req, res, next) => {
    try {
        const destination = await Destination.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!destination) {
            return res.status(404).json({
                success: false,
                message: 'Destination not found'
            });
        }

        res.status(200).json({
            success: true,
            data: destination
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete destination
// @route   DELETE /api/destinations/:id
// @access  Private/Admin
export const deleteDestination = async (req, res, next) => {
    try {
        const destination = await Destination.findByIdAndDelete(req.params.id);

        if (!destination) {
            return res.status(404).json({
                success: false,
                message: 'Destination not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Destination deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};
