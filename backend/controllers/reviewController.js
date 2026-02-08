import Review from '../models/Review.js';

// @desc    Create review
// @route   POST /api/reviews
// @access  Private
export const createReview = async (req, res, next) => {
    try {
        const { destination, rating, comment } = req.body;

        // Check if user already reviewed this destination
        const existingReview = await Review.findOne({
            user: req.user.id,
            destination
        });

        if (existingReview) {
            return res.status(400).json({
                success: false,
                message: 'You have already reviewed this destination'
            });
        }

        const review = await Review.create({
            user: req.user.id,
            destination,
            rating,
            comment
        });

        await review.populate('user', 'name avatar');

        res.status(201).json({
            success: true,
            data: review
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get reviews for destination
// @route   GET /api/reviews/destination/:destinationId
// @access  Public
export const getDestinationReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({ destination: req.params.destinationId })
            .populate('user', 'name avatar')
            .sort('-createdAt');

        res.status(200).json({
            success: true,
            count: reviews.length,
            data: reviews
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update review
// @route   PUT /api/reviews/:id
// @access  Private
export const updateReview = async (req, res, next) => {
    try {
        let review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({
                success: false,
                message: 'Review not found'
            });
        }

        // Make sure user is review owner
        if (review.user.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to update this review'
            });
        }

        review = await Review.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: review
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete review
// @route   DELETE /api/reviews/:id
// @access  Private
export const deleteReview = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({
                success: false,
                message: 'Review not found'
            });
        }

        // Make sure user is review owner
        if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to delete this review'
            });
        }

        await review.deleteOne();

        res.status(200).json({
            success: true,
            message: 'Review deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};
