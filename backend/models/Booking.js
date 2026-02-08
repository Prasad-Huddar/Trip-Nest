import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    source: {
        type: String,
        required: [true, 'Please provide a source city']
    },
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination',
        required: false
    },
    destinationCity: {
        type: String,
        required: true
    },
    transportMode: {
        type: String,
        enum: ['flight', 'bus', 'train'],
        required: true
    },
    startDate: {
        type: Date,
        required: [true, 'Please provide a start date']
    },
    endDate: {
        type: Date,
        required: [true, 'Please provide an end date']
    },
    travelers: {
        type: Number,
        required: [true, 'Please provide number of travelers'],
        min: [1, 'At least 1 traveler is required']
    },
    totalPrice: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'INR'
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending'
    },
    specialRequests: {
        type: String,
        maxlength: [500, 'Special requests cannot exceed 500 characters']
    },
    selectedTransport: {
        name: String,
        price: Number,
        departure: String,
        arrival: String,
        duration: String,
        mode: String
    },
    selectedHotel: {
        name: String,
        price: Number,
        rating: Number,
        image: String,
        amenities: [String]
    },
    paymentInfo: {
        method: {
            type: String,
            enum: ['credit_card', 'debit_card', 'paypal', 'stripe'],
            default: 'credit_card'
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'failed'],
            default: 'pending'
        },
        transactionId: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
