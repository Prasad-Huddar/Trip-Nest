import express from 'express';
import {
    createBooking,
    getUserBookings,
    getBooking,
    cancelBooking
} from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(protect, createBooking)
    .get(protect, getUserBookings);

router.route('/:id')
    .get(protect, getBooking);

router.route('/:id/cancel')
    .put(protect, cancelBooking);

export default router;
