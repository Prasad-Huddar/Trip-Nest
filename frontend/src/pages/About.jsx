import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiGlobe } from 'react-icons/fi';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            {/* Hero */}
            <section className="section bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6"
                    >
                        About TripNest
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl max-w-3xl mx-auto"
                    >
                        We're passionate about creating unforgettable travel experiences that connect people
                        with the world's most amazing destinations.
                    </motion.p>
                </div>
            </section>

            {/* Mission */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FiTarget,
                                title: 'Our Mission',
                                description: 'To make travel accessible and memorable for everyone, creating experiences that last a lifetime.',
                            },
                            {
                                icon: FiHeart,
                                title: 'Our Values',
                                description: 'We believe in sustainable tourism, cultural respect, and creating positive impacts in the communities we visit.',
                            },
                            {
                                icon: FiGlobe,
                                title: 'Our Vision',
                                description: 'To be the world\'s most trusted travel platform, connecting millions of travelers with their dream destinations.',
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card p-8 text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                                        <Icon className="w-8 h-8 text-primary-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section bg-gray-50 dark:bg-gray-900">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold mb-6 text-center"
                        >
                            Our Story
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4 text-gray-600 dark:text-gray-400 text-lg"
                        >
                            <p>
                                TripNest was founded in 2020 with a simple idea: travel should be accessible,
                                affordable, and unforgettable for everyone. What started as a small team of travel
                                enthusiasts has grown into a global platform serving thousands of travelers.
                            </p>
                            <p>
                                We've carefully curated destinations from around the world, partnering with local
                                guides and communities to ensure authentic experiences. Our commitment to
                                sustainable tourism means we work to minimize environmental impact while maximizing
                                positive contributions to local economies.
                            </p>
                            <p>
                                Today, TripNest continues to grow, but our mission remains the same: to help you
                                discover the world's most incredible places and create memories that will last a
                                lifetime.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '50+', label: 'Destinations' },
                            { number: '10K+', label: 'Happy Travelers' },
                            { number: '4.9', label: 'Average Rating' },
                            { number: '24/7', label: 'Support' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
