import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiStar, FiHeart, FiClock, FiTag, FiBookmark, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

const DestinationCard = ({ destination, onFavoriteChange }) => {
    const { isAuthenticated } = useAuth();
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFavoriteClick = async (e) => {
        e.preventDefault();
        if (!isAuthenticated) return;

        setLoading(true);
        try {
            if (isFavorite) {
                await api.delete(`/users/favorites/${destination._id}`);
                setIsFavorite(false);
            } else {
                await api.post(`/users/favorites/${destination._id}`);
                setIsFavorite(true);
            }
            if (onFavoriteChange) onFavoriteChange();
        } catch (error) {
            console.error('Error toggling favorite:', error);
        } finally {
            setLoading(false);
        }
    };

    // Get category color mapping
    const getCategoryColor = (category) => {
        const colors = {
            'beach': 'from-cyan-500 to-blue-500',
            'mountain': 'from-green-500 to-emerald-500',
            'city': 'from-purple-500 to-indigo-500',
            'heritage': 'from-amber-500 to-orange-500',
            'hill station': 'from-teal-500 to-cyan-500',
            'pilgrimage': 'from-rose-500 to-pink-500',
            'adventure': 'from-red-500 to-orange-500',
            'wildlife': 'from-lime-500 to-green-500',
            'cultural': 'from-violet-500 to-purple-500'
        };
        return colors[category] || 'from-blue-500 to-indigo-500';
    };

    return (
        <Link to={`/destination/${destination._id}`} className="block h-full">
            <motion.div
                whileHover={{ y: -12 }}
                className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden group h-full flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800"
            >
                {/* Image Container with Gradient Overlay */}
                <div className="relative h-72 overflow-hidden">
                    <motion.img
                        src={destination.images?.[0] || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800'}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-1000 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        loading="lazy"
                        onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800';
                        }}
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(destination.category)} opacity-20`}></div>

                    {/* Favorite Button */}
                    {isAuthenticated && (
                        <motion.button
                            onClick={handleFavoriteClick}
                            disabled={loading}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full hover:bg-white/30 transition-all z-20 shadow-lg"
                        >
                            <FiHeart
                                className={`w-5 h-5 transition-all duration-300 ${isFavorite
                                    ? 'fill-red-500 text-red-500 scale-110'
                                    : 'text-white hover:text-red-300'
                                    }`}
                            />
                        </motion.button>
                    )}

                    {/* Category Badge */}
                    <motion.div
                        className="absolute top-4 left-4 z-10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(destination.category)} text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg backdrop-blur-sm`}>
                            {destination.category.replace('-', ' ')}
                        </span>
                    </motion.div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-16 z-10">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/20">
                            <FiStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-bold text-sm">{destination.rating || 4.5}</span>
                        </div>
                    </div>

                    {/* Location Pin */}
                    <motion.div
                        className="absolute bottom-4 left-4 right-4 z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/20 w-full">
                                <FiMapPin className="text-blue-400 flex-shrink-0" />
                                <span className="text-white text-sm font-medium truncate">
                                    {destination.location?.city || 'Unknown'}, {destination.location?.state || 'Unknown'}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {destination.name}
                            </h3>
                            {destination.discounts && destination.discounts.length > 0 && (
                                <span className="px-2 py-1 bg-green-500 text-white text-[10px] font-bold rounded-lg animate-pulse">
                                    {destination.discounts[0].percentage}% OFF
                                </span>
                            )}
                        </div>

                        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                            {destination.description}
                        </p>

                        {/* Bottom Info */}
                        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                                <FiClock className="text-blue-500" />
                                <span>{destination.duration || '5 Days'}</span>
                            </div>

                            <div className="text-right">
                                <span className="text-xs font-black text-blue-600 uppercase tracking-tighter flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Explore More <FiArrowRight />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
        </Link>
    );
};

export default DestinationCard;
