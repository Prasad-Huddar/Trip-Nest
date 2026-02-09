import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

console.log('Testing MongoDB connection...');

const testConnection = async () => {
    try {
        console.log('Connecting to:', process.env.MONGODB_URI);
        
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        
        console.log('✅ MongoDB Connected successfully!');
        console.log('Host:', conn.connection.host);
        console.log('Database:', conn.connection.name);
        
        // Test user creation
        console.log('\n--- Testing User Creation ---');
        
        // Check existing users
        const existingUsers = await User.find({});
        console.log(`Found ${existingUsers.length} existing users:`);
        existingUsers.forEach(user => {
            console.log(`- ${user.name} (${user.email}) - Created: ${user.createdAt}`);
        });
        
        // Try creating a test user
        console.log('\nCreating test user...');
        const testUserData = {
            name: 'Test User DB',
            email: 'test-db@test.com',
            password: 'password123'
        };
        
        // Check if user already exists
        const existingUser = await User.findOne({ email: testUserData.email });
        if (existingUser) {
            console.log('Test user already exists, deleting first...');
            await User.deleteOne({ email: testUserData.email });
        }
        
        const newUser = await User.create(testUserData);
        console.log('✅ Test user created successfully!');
        console.log('User ID:', newUser._id);
        console.log('Name:', newUser.name);
        console.log('Email:', newUser.email);
        console.log('Created at:', newUser.createdAt);
        
        // Verify user can be found
        const foundUser = await User.findById(newUser._id);
        console.log('\n✅ User verification successful!');
        console.log('Found user:', foundUser.name);
        
        // Clean up test user
        await User.deleteOne({ _id: newUser._id });
        console.log('\n🧹 Cleaned up test user');
        
        // Count users after cleanup
        const finalCount = await User.countDocuments();
        console.log(`Final user count: ${finalCount}`);
        
        await mongoose.connection.close();
        console.log('\n✅ All tests passed!');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Stack:', error.stack);
        process.exit(1);
    }
};

testConnection();