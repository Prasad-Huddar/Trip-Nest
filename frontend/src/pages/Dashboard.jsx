import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiCalendar, FiHeart, FiArrowRight, FiX } from 'react-icons/fi';
import { FaPlane, FaHotel } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import DestinationCard from '../components/DestinationCard';
import api from '../utils/api';

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth();
    const [activeTab, setActiveTab] = useState('bookings');
    const [bookings, setBookings] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated]);

    const fetchData = async () => {
        try {
            const [bookingsRes, favoritesRes] = await Promise.all([
                api.get('/bookings'),
                api.get('/users/favorites'),
            ]);
            setBookings(bookingsRes.data.data);
            setFavorites(favoritesRes.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    const tabs = [
        { id: 'bookings', label: 'My Bookings', icon: FiCalendar },
        { id: 'favorites', label: 'Saved Trips', icon: FiHeart },
        { id: 'profile', label: 'Profile', icon: FiUser },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container-custom">
                <h1 className="text-4xl font-bold mb-8">
                    My <span className="gradient-text">Dashboard</span>
                </h1>

                {/* Tabs */}
                <div className="flex space-x-4 mb-8 border-b border-gray-200 dark:border-gray-700">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${activeTab === tab.id
                                    ? 'border-primary-600 text-primary-600'
                                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
                    </div>
                ) : (
                    <>
                        {/* Bookings Tab */}
                        {activeTab === 'bookings' && (
                            <div>
                                <div className="space-y-6">
                                    {bookings.map((booking) => (
                                        <motion.div
                                            key={booking._id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group"
                                        >
                                            {/* Status Badge */}
                                            <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-[1.5rem] font-black text-[10px] uppercase tracking-widest ${booking.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                                                booking.status === 'cancelled' ? 'bg-red-100 text-red-600' :
                                                    'bg-blue-100 text-blue-600'
                                                }`}>
                                                {booking.status}
                                            </div>

                                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                                {/* Destination Image */}
                                                <div className="w-full lg:w-48 h-48 rounded-[2rem] overflow-hidden flex-shrink-0 shadow-lg">
                                                    <img
                                                        src={booking.destination?.images?.[0] || booking.selectedHotel?.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800'}
                                                        alt={booking.destinationCity}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>

                                                <div className="flex-grow space-y-4 w-full">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                        <div>
                                                            <h3 className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-3">
                                                                {booking.source}
                                                                <FiArrowRight size={18} className="text-blue-500" />
                                                                {booking.destinationCity}
                                                            </h3>
                                                            <p className="text-slate-500 font-bold flex items-center gap-2 mt-1">
                                                                <FiCalendar className="text-blue-500" />
                                                                {new Date(booking.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                            </p>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-3xl font-black text-blue-600">₹{booking.totalPrice?.toLocaleString()}</div>
                                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{booking.travelers} Travelers</div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                                        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                                                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
                                                                <FaPlane />
                                                            </div>
                                                            <div>
                                                                <div className="text-[10px] font-black uppercase text-slate-400">Transport</div>
                                                                <div className="font-bold text-sm">{booking.selectedTransport?.name || booking.transportMode}</div>
                                                            </div>
                                                        </div>
                                                        {booking.selectedHotel && (
                                                            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                                                                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600">
                                                                    <FaHotel />
                                                                </div>
                                                                <div>
                                                                    <div className="text-[10px] font-black uppercase text-slate-400">Stay</div>
                                                                    <div className="font-bold text-sm truncate max-w-[150px]">{booking.selectedHotel.name}</div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {booking.status === 'confirmed' && (
                                                        <div className="flex justify-end pt-4">
                                                            <button
                                                                onClick={async () => {
                                                                    if (window.confirm('Are you sure you want to cancel this booking?')) {
                                                                        try {
                                                                            await api.put(`/bookings/${booking._id}/cancel`);
                                                                            fetchData();
                                                                        } catch (e) {
                                                                            alert('Cancellation failed');
                                                                        }
                                                                    }
                                                                }}
                                                                className="px-6 py-2 bg-red-50 text-red-600 rounded-xl font-bold text-sm hover:bg-red-100 transition-all flex items-center gap-2"
                                                            >
                                                                <FiX /> Cancel Ticket
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Favorites Tab */}
                        {activeTab === 'favorites' && (
                            <div>
                                {favorites.length === 0 ? (
                                    <div className="text-center py-12">
                                        <p className="text-gray-600 dark:text-gray-400">No saved destinations yet</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {favorites.map((destination) => (
                                            <DestinationCard
                                                key={destination._id}
                                                destination={destination}
                                                onFavoriteChange={fetchData}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Profile Tab */}
                        {activeTab === 'profile' && (
                            <div className="max-w-2xl">
                                <div className="card p-8">
                                    <div className="flex items-center space-x-6 mb-8">
                                        <img
                                            src={user?.avatar}
                                            alt={user?.name}
                                            className="w-24 h-24 rounded-full"
                                        />
                                        <div>
                                            <h2 className="text-2xl font-bold">{user?.name}</h2>
                                            <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Name</label>
                                            <input
                                                type="text"
                                                defaultValue={user?.name}
                                                className="input"
                                                disabled
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                defaultValue={user?.email}
                                                className="input"
                                                disabled
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Member Since</label>
                                            <input
                                                type="text"
                                                defaultValue={new Date(user?.createdAt).toLocaleDateString()}
                                                className="input"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
