import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar, FiUsers } from 'react-icons/fi';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

const BookingForm = ({ destination }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
    const [travelers, setTravelers] = useState(1);
    const [specialRequests, setSpecialRequests] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const calculateTotal = () => {
        return destination.price * travelers;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isAuthenticated) {
            alert('Please login to book a trip');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const bookingData = {
                destination: destination._id,
                startDate,
                endDate,
                travelers,
                specialRequests,
            };

            const { data } = await api.post('/bookings', bookingData);
            alert('Booking successful!');
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Booking failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card p-6">
            <h3 className="text-2xl font-bold mb-6">Book This Trip</h3>

            {error && (
                <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Start Date</label>
                        <div className="relative">
                            <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                minDate={new Date()}
                                className="input pl-10"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">End Date</label>
                        <div className="relative">
                            <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                minDate={startDate}
                                className="input pl-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Travelers */}
                <div>
                    <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                    <div className="relative">
                        <FiUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select
                            value={travelers}
                            onChange={(e) => setTravelers(Number(e.target.value))}
                            className="input pl-10"
                        >
                            {[...Array(destination.maxGroupSize || 10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1} {i === 0 ? 'Traveler' : 'Travelers'}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Special Requests */}
                <div>
                    <label className="block text-sm font-medium mb-2">Special Requests (Optional)</label>
                    <textarea
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        rows={3}
                        className="input resize-none"
                        placeholder="Any special requirements or preferences..."
                    />
                </div>

                {/* Price Summary */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600 dark:text-gray-400">
                            ${destination.price} x {travelers} travelers
                        </span>
                        <span className="font-semibold">${destination.price * travelers}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary-600 dark:text-primary-400">${calculateTotal()}</span>
                    </div>
                </div>

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Processing...' : 'Confirm Booking'}
                </motion.button>
            </form>
        </div>
    );
};

export default BookingForm;
