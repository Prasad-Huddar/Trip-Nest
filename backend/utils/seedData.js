import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Destination from '../models/Destination.js';
import User from '../models/User.js';
import Review from '../models/Review.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });
// Fallback
if (!process.env.MONGODB_URI) {
    dotenv.config({ path: path.join(__dirname, '../../.env') });
}

import {
    allDestinations
} from './massiveData.js';

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);

        await Destination.deleteMany({});
        await User.deleteMany({});
        await Review.deleteMany({});
        console.log('Data Cleared');

        // Prepare destinations (ensuring consistency)
        const destinationsToSeed = allDestinations.map(d => ({
            ...d,
            // Calculate a base price if not present (though our new data has prices in hotels)
            price: d.price || (d.hotels && d.hotels.length > 0 ? d.hotels[0].price : 5000),
            currency: d.currency || 'INR',
            rating: d.rating || (4 + Math.random()),
            reviewCount: d.reviewCount || Math.floor(Math.random() * 500) + 50,
            featured: d.featured || false,
            bestTimeVisit: d.bestTimeVisit || 'October to March'
        }));

        await Destination.insertMany(destinationsToSeed);
        console.log(`Seeded ${destinationsToSeed.length} destinations`);

        // Create Default User
        await User.create({
            name: 'Demo User',
            email: 'user@example.com',
            password: 'password123',
            role: 'user'
        });
        console.log('Default user created');

        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedDB();
