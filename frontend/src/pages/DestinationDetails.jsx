import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiMapPin, FiStar, FiClock, FiUsers, FiCheckCircle, FiCalendar,
    FiNavigation, FiShare2, FiHeart, FiArrowLeft, FiSun, FiHome,
    FiExternalLink, FiGlobe, FiCamera, FiInfo, FiAward, FiTag,
    FiThumbsUp, FiMessageSquare, FiUser, FiChevronLeft, FiChevronRight,
    FiX, FiZoomIn, FiArrowRight, FiShield
} from 'react-icons/fi';
import api from '../utils/api';

const DestinationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        const fetchDestination = async () => {
            setLoading(true);
            try {
                const { data } = await api.get(`/destinations/${id}`);
                if (data.success) {
                    setDestination(data.data);
                }
            } catch (error) {
                console.error('Error fetching destination:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchDestination();
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 border-4 border-indigo-600/20 border-b-indigo-600 rounded-full animate-spin-reverse" />
                    </div>
                </div>
            </div>
        );
    }

    if (!destination) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center px-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl max-w-lg border border-slate-100 dark:border-slate-800"
                    >
                        <div className="w-24 h-24 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                            <FiMapPin size={48} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-4">Destination Not Found</h2>
                        <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                            We couldn't find the destination you're looking for. It might have been moved or doesn't exist anymore.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate('/explore')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20"
                            >
                                <FiNavigation /> Explore All
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2"
                            >
                                <FiHome /> Back Home
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    const {
        name,
        description,
        location,
        category,
        price,
        rating,
        reviews,
        images,
        amenities,
        highlights,
        itinerary,
        hotels
    } = destination;

    // Fallback data for Amenities if empty
    const displayAmenities = (amenities && amenities.length > 0) ? amenities : [
        "Free High-speed Wi-Fi",
        "Expert Local Tour Guide",
        "Premium Transport Services",
        "Luxury Accommodation",
        "Breakfast & Dinner Incl.",
        "24/7 Support Services",
        "Entrance Fees Covered",
        "Safety Gear Provided"
    ];

    // Fallback data for Itinerary if empty
    const displayItinerary = (itinerary && itinerary.length > 0) ? itinerary : [
        {
            title: "Arrival & Welcome",
            description: `Welcome to ${name}! Our representative will meet you at the arrival point. After check-in at your selected hotel, enjoy a briefing session about the upcoming adventure followed by a traditional welcome dinner.`
        },
        {
            title: "Local Exploration & Culture",
            description: "Immerse yourself in the local culture. Visit significant landmarks, interact with the local community, and discover the unique traditions that make this destination special."
        },
        {
            title: "Nature & Adventure Day",
            description: "A day dedicated to the stunning natural landscapes. Whether it's a scenic hike, a coastal walk, or a mountain trail, prepare to be amazed by the breathtaking views."
        },
        {
            title: "Hidden Gems & Leisure",
            description: "Venture off the beaten path to find secluded spots known only to locals. The afternoon is yours to relax, shop for souvenirs, or revisit your favorite spot."
        },
        {
            title: "Grand Conclusion",
            description: "Capture the final sunrise of your trip. Enjoy a special farewell celebration before your departure, taking with you memories that will last a lifetime."
        }
    ];

    // Fallback data for Reviews if empty
    const displayReviews = (reviews && reviews.length > 0) ? reviews : [
        {
            user: { name: "Aditi Sharma" },
            rating: 5,
            comment: `Absolutely magical! TripNest organized everything perfectly. ${name} exceeded all my expectations.`,
            createdAt: new Date()
        },
        {
            user: { name: "Rahul Verma" },
            rating: 5,
            comment: "The local guides were incredibly knowledgeable. Highly recommend this package to anyone seeking authentic experiences.",
            createdAt: new Date()
        },
        {
            user: { name: "Priya Das" },
            rating: 4,
            comment: "Great experience overall. The transport was very comfortable and the itinerary was well-planned.",
            createdAt: new Date()
        }
    ];

    // Fallback data for Hotels if empty
    const displayHotels = (hotels && hotels.length > 0) ? hotels : [
        {
            name: "Grand Royal Plaza",
            rating: 5,
            price: (price || 2500) + 1500,
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80",
            amenities: ["Spa", "Pool", "Gym", "Restaurant"]
        },
        {
            name: "Heritage Boutique Stay",
            rating: 4,
            price: (price || 2500) + 500,
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80",
            amenities: ["Free WiFi", "Garden", "Library"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
            <div className="container-custom py-8">
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all font-bold text-slate-600 dark:text-slate-300"
                    >
                        <FiArrowLeft /> Back
                    </button>
                    <div className="flex gap-3">
                        <button className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-md transition-all text-slate-600 dark:text-slate-300">
                            <FiShare2 size={20} />
                        </button>
                        <button
                            onClick={() => setIsWishlisted(!isWishlisted)}
                            className={`p-4 rounded-2xl shadow-sm hover:shadow-md transition-all ${isWishlisted ? 'bg-red-500 text-white shadow-red-500/20' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300'}`}
                        >
                            <FiHeart size={20} className={isWishlisted ? 'fill-current' : ''} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    <div className="lg:col-span-8 space-y-4">
                        <div
                            className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden group cursor-zoom-in"
                            onClick={() => setIsZoomed(true)}
                        >
                            <img
                                src={images?.[selectedImage] || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800'}
                                alt={name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                            {images?.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border-4 transition-all ${selectedImage === idx ? 'border-blue-600 scale-105 shadow-xl' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img
                                        src={img}
                                        className="w-full h-full object-cover"
                                        alt={`${name} ${idx + 1}`}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800';
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                                        {category || 'Travel'}
                                    </span>
                                    <h2 className="text-3xl font-black">{name}</h2>
                                    <p className="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-bold mt-1">
                                        <FiMapPin className="text-blue-600" /> {location?.city || 'Unknown City'}, {location?.state || 'Unknown State'}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 px-3 py-1.5 rounded-2xl font-black">
                                        <FiStar className="fill-current" /> {rating || '4.5'}
                                    </div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{reviews?.length || 0} Reviews</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl mb-8">
                                <div className="flex items-end gap-1 mb-1">
                                    <span className="text-4xl font-black text-blue-600">
                                        {destination?.currency === 'INR' ? '₹' : (destination?.currency || '₹')}{(hotels?.[0]?.price || price || 0).toLocaleString()}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400 uppercase">/ night</span>
                                </div>
                                {destination?.discounts?.length > 0 && (
                                    <div className="mt-1">
                                        <span className="bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-black px-2 py-0.5 rounded-lg border border-green-500/20">
                                            SAVE {destination.discounts[0].percentage}%
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <Link to={`/book/${id}`} className="block w-full">
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center gap-3 active:scale-[0.98]">
                                        Book This Trip <FiArrowRight size={24} />
                                    </button>
                                </Link>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <FiShield className="text-green-500" /> Secure Checkout • No hidden fees
                            </div>
                        </div>

                        {/* Destination Perks - Replaces the Expert Card */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
                            <h3 className="text-xl font-black mb-6 flex items-center gap-2 font-display uppercase tracking-widest text-slate-400 text-xs">
                                <FiAward className="text-blue-600" /> Destination Perks
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</div>
                                    <span className="font-bold text-sm">Best Price Guarantee</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</div>
                                    <span className="font-bold text-sm">Free Cancellation</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-900/30">
                                    <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black">3</div>
                                    <span className="font-bold text-sm">24/7 Premium Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto no-scrollbar">
                            {[
                                { id: 'overview', label: 'Overview', icon: <FiInfo /> },
                                { id: 'itinerary', label: 'Itinerary', icon: <FiNavigation /> },
                                { id: 'hotels', label: 'Hotels', icon: <FiHome /> },
                                { id: 'amenities', label: 'Amenities', icon: <FiCheckCircle /> },
                                { id: 'reviews', label: 'Reviews', icon: <FiMessageSquare /> }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-8 py-4 font-black transition-all flex items-center gap-2 whitespace-nowrap border-b-4 ${activeTab === tab.id ? 'text-blue-600 border-blue-600' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
                                >
                                    {tab.icon} {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {activeTab === 'overview' && (
                                    <motion.div
                                        key="overview"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-8"
                                    >
                                        <div className="prose dark:prose-invert max-w-none">
                                            <h3 className="text-2xl font-black mb-4">About {name}</h3>
                                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                {description}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {highlights?.map((h, i) => (
                                                <div key={i} className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                                                    <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                                        <FiAward size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-black text-slate-800 dark:text-white">{h}</h4>
                                                        <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Top Highlight</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'itinerary' && (
                                    <motion.div
                                        key="itinerary"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-6"
                                    >
                                        {displayItinerary.map((day, idx) => (
                                            <div key={idx} className="relative pl-10 border-l-2 border-slate-200 dark:border-slate-800 pb-10 last:pb-0">
                                                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-slate-50 dark:border-slate-950 shadow-lg shadow-blue-500/20" />
                                                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
                                                    <h4 className="text-xl font-black mb-2">{day.title}</h4>
                                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                                        {day.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {activeTab === 'hotels' && (
                                    <motion.div
                                        key="hotels"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    >
                                        {displayHotels.map((hotel, i) => (
                                            <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group">
                                                <div className="h-48 overflow-hidden">
                                                    <img src={hotel.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={hotel.name} />
                                                </div>
                                                <div className="p-6">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className="font-black text-lg">{hotel.name}</h4>
                                                        <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                                                            <FiStar className="fill-current" /> {hotel.rating}
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {hotel.amenities?.map((amenity, idx) => (
                                                            <span key={idx} className="text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                                                {amenity}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-blue-600 font-black">₹{hotel.price?.toLocaleString()} <span className="text-[10px] text-slate-400">/ night</span></span>
                                                        <Link to={`/book/${id}`}>
                                                            <button className="text-xs font-black uppercase text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                                                Select <FiArrowRight />
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {activeTab === 'amenities' && (
                                    <motion.div
                                        key="amenities"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                                    >
                                        {displayAmenities.map((a, i) => (
                                            <div key={i} className="flex items-center gap-3 p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                                                <div className="w-8 h-8 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                                                    <FiCheckCircle />
                                                </div>
                                                <span className="font-bold text-sm">{a}</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {activeTab === 'reviews' && (
                                    <motion.div
                                        key="reviews"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-6"
                                    >
                                        {displayReviews.map((review, i) => (
                                            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                                                            <img src={`https://ui-avatars.com/api/?name=${review.user?.name || 'User'}&background=random`} />
                                                        </div>
                                                        <div>
                                                            <h5 className="font-black">{review.user?.name || 'Anonymous'}</h5>
                                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{new Date(review.createdAt).toLocaleDateString()}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-0.5 text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <FiStar key={i} className={i < (review.rating || 5) ? 'fill-current' : 'text-slate-200'} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
                                                    "{review.comment}"
                                                </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        {/* Highlights Feed */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
                            <h3 className="text-xl font-black mb-6">Local Vibe</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {images?.slice(1, 5).map((img, i) => (
                                    <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                                        <img src={img} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
                        onClick={() => setIsZoomed(false)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setIsZoomed(false)}
                        >
                            <FiX size={48} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={images?.[selectedImage]}
                            className="max-width-full max-height-full object-contain rounded-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DestinationDetails;
