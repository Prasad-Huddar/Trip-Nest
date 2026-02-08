import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination',
        required: true
    },
    rating: {
        type: Number,
        required: [true, 'Please provide a rating'],
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot be more than 5']
    },
    comment: {
        type: String,
        required: [true, 'Please provide a comment'],
        maxlength: [1000, 'Comment cannot exceed 1000 characters']
    },
    helpful: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Prevent duplicate reviews from same user for same destination
reviewSchema.index({ user: 1, destination: 1 }, { unique: true });

// Static method to calculate average rating
reviewSchema.statics.calculateAverageRating = async function (destinationId) {
    const stats = await this.aggregate([
        {
            $match: { destination: destinationId }
        },
        {
            $group: {
                _id: '$destination',
                averageRating: { $avg: '$rating' },
                reviewCount: { $sum: 1 }
            }
        }
    ]);

    if (stats.length > 0) {
        await mongoose.model('Destination').findByIdAndUpdate(destinationId, {
            rating: Math.round(stats[0].averageRating * 10) / 10,
            reviewCount: stats[0].reviewCount
        });
    } else {
        await mongoose.model('Destination').findByIdAndUpdate(destinationId, {
            rating: 0,
            reviewCount: 0
        });
    }
};

// Update destination rating after save
reviewSchema.post('save', function () {
    this.constructor.calculateAverageRating(this.destination);
});

// Update destination rating after remove
reviewSchema.post('remove', function () {
    this.constructor.calculateAverageRating(this.destination);
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
