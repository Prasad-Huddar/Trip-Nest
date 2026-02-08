import express from 'express';
import {
    getProfile,
    updateProfile,
    addFavorite,
    removeFavorite,
    getFavorites
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/profile')
    .get(protect, getProfile)
    .put(protect, updateProfile);

router.route('/favorites')
    .get(protect, getFavorites);

router.route('/favorites/:destinationId')
    .post(protect, addFavorite)
    .delete(protect, removeFavorite);

export default router;
