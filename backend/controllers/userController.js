import User from '../models/User.js';

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).populate('favorites');

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateProfile = async (req, res, next) => {
    try {
        const fieldsToUpdate = {
            name: req.body.name,
            email: req.body.email,
            avatar: req.body.avatar
        };

        const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Add destination to favorites
// @route   POST /api/users/favorites/:destinationId
// @access  Private
export const addFavorite = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        // Check if already in favorites
        if (user.favorites.includes(req.params.destinationId)) {
            return res.status(400).json({
                success: false,
                message: 'Destination already in favorites'
            });
        }

        user.favorites.push(req.params.destinationId);
        await user.save();

        await user.populate('favorites');

        res.status(200).json({
            success: true,
            data: user.favorites
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Remove destination from favorites
// @route   DELETE /api/users/favorites/:destinationId
// @access  Private
export const removeFavorite = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        user.favorites = user.favorites.filter(
            fav => fav.toString() !== req.params.destinationId
        );

        await user.save();
        await user.populate('favorites');

        res.status(200).json({
            success: true,
            data: user.favorites
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get user favorites
// @route   GET /api/users/favorites
// @access  Private
export const getFavorites = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).populate('favorites');

        res.status(200).json({
            success: true,
            data: user.favorites
        });
    } catch (error) {
        next(error);
    }
};
