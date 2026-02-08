import express from 'express';
import {
    getDestinations,
    getDestination,
    createDestination,
    updateDestination,
    deleteDestination
} from '../controllers/destinationController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getDestinations)
    .post(protect, authorize('admin'), createDestination);

router.route('/:id')
    .get(getDestination)
    .put(protect, authorize('admin'), updateDestination)
    .delete(protect, authorize('admin'), deleteDestination);

export default router;
