import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiCheckCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const footerLinks = {
        Company: [
            { name: 'About TripNest', path: '/about' },
            { name: 'Why Choose Us', path: '/about' },
            { name: 'Contact Us', path: '/contact' },
        ],
        Support: [
            { name: 'Customer Help', path: '/contact' },
            { name: 'Safety Guide', path: '/safety-guide' },
            { name: 'Booking Policy', path: '/booking-policy' },
        ],
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 15000);
        }
    };

    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-12 md:mb-20">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-3 sm:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 tracking-tighter">
                            TripNest<span className="text-indigo-500">.</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg mb-6 md:mb-8 max-w-md leading-relaxed">
                            Your premier gateway to the world's most breathtaking wonders.
                            We curate seamless, inspiring journeys designed to turn every
                            exploration into an unforgettable story.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-indigo-400 mb-1">Join our newsletter</h4>
                                <p className="text-slate-500 text-xs font-medium">Get exclusive <span className="text-indigo-400 font-bold">Discounts & Secret Offers</span> weekly!</p>
                            </div>
                            <div className="relative max-w-sm">
                                <AnimatePresence mode="wait">
                                    {isSubscribed ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-4"
                                        >
                                            <div className="flex items-center gap-2 text-green-400 font-bold bg-green-400/10 p-3 rounded-xl border border-green-500/20">
                                                <FiCheckCircle size={20} />
                                                <span className="text-sm">Welcome aboard! Your exclusive offers:</span>
                                            </div>

                                            <div className="grid grid-cols-1 gap-3">
                                                <div className="bg-gradient-to-r from-indigo-600/20 to-blue-600/20 border border-indigo-500/30 p-4 rounded-2xl flex justify-between items-center group relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mr-8 -mt-8" />
                                                    <div>
                                                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-400 mb-1">First Booking Special</p>
                                                        <p className="font-black text-xl tracking-wider">NEST20</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="block text-2xl font-black text-indigo-400">20%</span>
                                                        <span className="text-[10px] uppercase font-bold text-slate-500">Discount</span>
                                                    </div>
                                                </div>

                                                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 p-4 rounded-2xl flex justify-between items-center group relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mr-8 -mt-8" />
                                                    <div>
                                                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-purple-400 mb-1">Summer Getaway</p>
                                                        <p className="font-black text-xl tracking-wider">NESTOFF500</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="block text-2xl font-black text-purple-400">₹500</span>
                                                        <span className="text-[10px] uppercase font-bold text-slate-500">Off</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-[10px] text-slate-500 text-center italic">Codes valid for limited time only!</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubscribe}
                                            className="flex gap-2"
                                        >
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email"
                                                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                                            />
                                            <button
                                                type="submit"
                                                className="px-4 md:px-6 py-3 bg-white text-slate-950 rounded-xl font-black text-sm md:text-base hover:bg-slate-200 transition-all active:scale-95"
                                            >
                                                Join
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="lg:col-span-1 sm:col-span-1">
                            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-6 md:mb-8">{title}</h3>
                            <ul className="space-y-3 md:space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-slate-400 hover:text-white transition-all duration-300 font-medium text-sm md:text-base"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="text-slate-500 text-xs md:text-sm font-medium text-center md:text-left">
                        <p>&copy; {2024} TripNest Premium. Developed with ❤️ for global explorers.</p>
                        <p className="mt-1 text-indigo-400/60">Designed By Prasad Huddar</p>
                    </div>

                    <div className="flex gap-4 md:gap-6">
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            aria-label="Facebook - Coming Soon"
                            title="Connect with us on Facebook (Coming Soon)"
                        >
                            <FiFacebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-sky-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            aria-label="Twitter - Coming Soon"
                            title="Follow us on Twitter (Coming Soon)"
                        >
                            <FiTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            aria-label="Instagram - Coming Soon"
                            title="Follow us on Instagram (Coming Soon)"
                        >
                            <FiInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                            href="mailto:contact@tripnest.com"
                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:-translate-y-1 transition-all duration-300 group"
                            aria-label="Email Us"
                            title="Send us an email"
                        >
                            <FiMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
