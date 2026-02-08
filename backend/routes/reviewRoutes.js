import express from 'express';
import {
    createReview,
    getDestinationReviews,
    updateReview,
    deleteReview
} from '../controllers/reviewController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(protect, createReview);

router.route('/destination/:destinationId')
    .get(getDestinationReviews);

router.route('/:id')
    .put(protect, updateReview)
    .delete(protect, deleteReview);

export default router;
