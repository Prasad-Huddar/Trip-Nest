import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a destination name'],
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
        maxlength: [2000, 'Description cannot be more than 2000 characters']
    },
    location: {
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true // Added state field
        },
        city: {
            type: String,
            required: true
        },
        coordinates: {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        }
    },
    images: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        min: [0, 'Price cannot be negative']
    },
    currency: {
        type: String,
        default: 'INR'
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, 'Rating cannot be less than 0'],
        max: [5, 'Rating cannot be more than 5']
    },
    reviewCount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true,
        enum: ['beach', 'mountain', 'city', 'adventure', 'cultural', 'wildlife', 'island', 'desert', 'pilgrimage', 'hill station', 'heritage', 'waterfall', 'nature']
    },
    bestTimeVisit: {
        type: String,
        required: true
    },
    transportModes: [{
        mode: {
            type: String,
            enum: ['flight', 'train', 'bus', 'car'],
            required: true
        },
        details: String,
        link: String
    }],
    hotels: [{
        name: { type: String, required: true },
        rating: { type: Number, default: 4 },
        price: { type: Number, required: true },
        currency: { type: String, default: 'INR' },
        image: { type: String },
        website: { type: String },
        amenities: [String]
    }],
    discounts: [{
        code: String,
        percentage: Number,
        description: String,
        expiryDate: Date
    }],
    temples: [String],
    officialWebsite: String,
    tags: [String],
    featured: {
        type: Boolean,
        default: false
    },
    nearbyPlaces: [{
        name: { type: String, required: true },
        distance: { type: String, required: true },
        category: { type: String }
    }],
    highlights: [{
        type: String
    }],
    details: {
        type: String
    },
    duration: {
        type: String,
        default: '7 days'
    },
    maxGroupSize: {
        type: Number,
        default: 10
    },
    difficulty: {
        type: String,
        enum: ['easy', 'moderate', 'challenging'],
        default: 'moderate'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create index for search
destinationSchema.index({ name: 'text', description: 'text', 'location.state': 'text', 'location.country': 'text' });

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;
