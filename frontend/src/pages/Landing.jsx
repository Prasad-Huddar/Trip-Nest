import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import api from '../utils/api';

const TwinklingStars = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {[...Array(40)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    initial={{
                        opacity: Math.random() * 0.5 + 0.2,
                        scale: Math.random() * 0.5 + 0.5,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 60}%`, // Only in the sky area
                    }}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 5,
                    }}
                    style={{
                        width: Math.random() * 3 + 1 + 'px',
                        height: Math.random() * 3 + 1 + 'px',
                        boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.3)',
                    }}
                />
            ))}
        </div>
    );
};

const Landing = () => {
    const [featuredDestinations, setFeaturedDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const { data } = await api.get('/destinations?featured=true&limit=9');
                setFeaturedDestinations(data.data);
            } catch (error) {
                console.error('Error fetching destinations:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchFeatured();
    }, []);

    const testimonials = [
        {
            name: 'Sarah Johnson',
            location: 'New York, USA',
            text: 'TripNest made our Bali vacation absolutely perfect! Everything was organized beautifully.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=random',
        },
        {
            name: 'Michael Chen',
            location: 'Singapore',
            text: 'Best travel experience ever! The Swiss Alps tour exceeded all expectations.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=random',
        },
        {
            name: 'Emma Wilson',
            location: 'London, UK',
            text: 'Incredible service and amazing destinations. Highly recommend TripNest!',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=random',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video/Image with Parallax */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.2, x: -20 }}
                        animate={{
                            scale: [1.2, 1.1, 1.25, 1.2],
                            x: [-20, 20, 0, -20],
                            y: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
                        alt="Hero"
                        className="w-[110%] h-[110%] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
                </div>

                {/* Twinkling Stars Effect */}
                <TwinklingStars />

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

                {/* Content */}
                <div className="relative z-10 container-custom px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8"
                        >
                            Your Premium Travel Companion
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 md:mb-8 text-white leading-[1.1] tracking-tight px-4"
                        >
                            ADVENTURE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 drop-shadow-2xl">AWAITS</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-lg sm:text-xl md:text-3xl mb-8 md:mb-12 text-blue-50 font-medium leading-relaxed drop-shadow-md px-4"
                        >
                            Discover hidden gems and luxury escapes
                            <br className="hidden md:block" /> designed for the modern explorer.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="max-w-4xl mx-auto px-4"
                        >
                            <SearchBar hideTravelers={true} />
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-white/50 hidden sm:block"
                >
                    <div className="w-6 h-12 border-2 border-white/20 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Featured Destinations */}
            <section className="section bg-gray-50 dark:bg-gray-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12 px-4"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                            Featured <span className="gradient-text">Destinations</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                            Handpicked destinations that offer the best experiences for travelers
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {featuredDestinations.map((destination, index) => (
                                <motion.div
                                    key={destination._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <DestinationCard destination={destination} />
                                </motion.div>
                            ))}
                        </div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12 md:mt-16 px-4"
                    >
                        <Link to="/explore">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    y: [0, -5, 0],
                                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="px-8 md:px-10 py-4 md:py-5 bg-blue-600 text-white rounded-[2rem] font-black text-base md:text-lg shadow-xl shadow-blue-500/25 inline-flex items-center gap-2 md:gap-3 transition-all hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/40 group rtl:flex-row-reverse"
                            >
                                <span>Explore All Destinations</span>
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12 px-4"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                            What Our <span className="gradient-text">Travelers Say</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                            Real experiences from real travelers
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-5 md:p-6"
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FiStar key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 italic text-sm md:text-base">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                                    />
                                    <div>
                                        <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                                        <div className="text-xs md:text-sm text-gray-500">{testimonial.location}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-primary text-white">
                <div className="container-custom text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-100">
                            Join thousands of happy travelers and discover your next adventure
                        </p>
                        <Link to="/booking">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-xl hover:shadow-2xl transition-all"
                            >
                                Book your Journey
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
