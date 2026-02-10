import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiUser, FiLogOut, FiMoon, FiSun, FiHeart, FiBriefcase } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import AuthModal from './AuthModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authView, setAuthView] = useState('login');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const { user, logout } = useAuth();
    const { darkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    // Pages that have a dark background hero section at the top
    const hasDarkHero = location.pathname === '/' || location.pathname === '/about';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        setDropdownOpen(false);
        navigate('/');
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Explore', path: '/explore' },
        { name: 'About', path: '/about' },
        {
            name: 'Booking',
            isDropdown: true,
            sections: {
                Stays: [
                    { name: 'Hotels', icon: '🏨', path: '/explore?type=hotel' },
                    { name: 'Resorts', icon: '🏠', path: '/explore?type=resort' },
                ],
                Transport: [
                    { name: 'Flights', icon: '✈️', path: '/explore?transport=flight' },
                    { name: 'Trains', icon: '🚆', path: '/explore?transport=train' },
                    { name: 'Buses', icon: '🚌', path: '/explore?transport=bus' }
                ]
            }
        },
        { name: 'Contact', path: '/contact' },
    ];

    const [bookingDropdownOpen, setBookingDropdownOpen] = useState(false);

    return (
        <>
            <div className="fixed w-full z-50">
                <nav
                    className={`transition-all duration-300 ${scrolled
                        ? 'glass py-3 shadow-lg'
                        : 'bg-transparent py-5'
                        }`}
                >
                    <div className="container-custom flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                </svg>
                            </div>
                            <span className={`text-lg md:text-2xl font-display font-bold ${scrolled
                                ? 'text-slate-900 dark:text-white'
                                : (hasDarkHero ? 'text-white drop-shadow-md' : 'text-slate-900 dark:text-white')
                                }`}>
                                TripNest
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const linkActive = location.pathname === link.path;
                                const baseClass = `text-sm font-semibold transition-all duration-300 hover:text-blue-500`;
                                const colorClass = scrolled
                                    ? (linkActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200')
                                    : hasDarkHero
                                        ? 'text-white/90 hover:text-white drop-shadow-sm'
                                        : (linkActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200');

                                return link.isDropdown ? (
                                    <Link
                                        key={link.name}
                                        to="/booking"
                                        className={`${baseClass} ${colorClass}`}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`${baseClass} ${colorClass}`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full transition-colors ${scrolled || !hasDarkHero
                                    ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                                    : 'hover:bg-white/10 text-white'
                                    }`}
                            >
                                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                            </button>

                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-md transition-all min-w-[140px]"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <FiUser />
                                        </div>
                                        <span className="text-sm font-medium truncate text-slate-700 dark:text-slate-200">
                                            {user.name.split(' ')[0]}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {dropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute right-0 mt-2 w-56 glass-card rounded-xl p-2 z-50 text-slate-900 dark:text-slate-100"
                                            >
                                                <Link to="/dashboard" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" onClick={() => setDropdownOpen(false)}>
                                                    <FiBriefcase size={18} />
                                                    My Bookings
                                                </Link>
                                                <Link to="/dashboard" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" onClick={() => setDropdownOpen(false)}>
                                                    <FiHeart size={18} />
                                                    Saved Trips
                                                </Link>
                                                <div className="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition-colors text-left"
                                                >
                                                    <FiLogOut size={18} />
                                                    Logout
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <button
                                    onClick={() => { setAuthView('login'); setShowAuthModal(true); }}
                                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${scrolled
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700'
                                        : 'bg-white text-blue-900 shadow-lg hover:bg-blue-50'
                                        }`}
                                >
                                    Sign In
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`md:hidden p-2 rounded-lg ${scrolled || !hasDarkHero ? 'text-slate-900 dark:text-white' : 'text-white'
                                }`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="md:hidden glass border-t border-slate-200 dark:border-slate-800 overflow-hidden"
                            >
                                <div className="container-custom py-6 flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        link.isDropdown ? (
                                            <div key={link.name} className="flex flex-col gap-2">
                                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{link.name}</span>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {Object.values(link.sections).flat().map(item => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.path}
                                                            className="flex items-center gap-2 py-2.5 px-3 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            <span className="text-lg">{item.icon}</span>
                                                            <span className="text-sm font-bold">{item.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className="text-lg font-medium text-slate-800 dark:text-slate-100 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )
                                    ))}

                                    {/* Theme Toggle in Mobile Menu */}
                                    <button
                                        onClick={toggleTheme}
                                        className="flex items-center gap-3 py-3 px-4 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                                        <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                    </button>

                                    <div className="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
                                    {!user ? (
                                        <button
                                            onClick={() => { setAuthView('login'); setShowAuthModal(true); setIsOpen(false); }}
                                            className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                                        >
                                            Sign In
                                        </button>
                                    ) : (
                                        <>
                                            <Link to="/dashboard" className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors" onClick={() => setIsOpen(false)}>
                                                <FiUser />
                                                <span className="font-medium">Profile</span>
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center gap-3 py-3 px-4 text-red-600 bg-red-50 dark:bg-red-900/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-left font-medium"
                                            >
                                                <FiLogOut /> Logout
                                            </button>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                initialMode={authView}
            />
        </>
    );
};

export default Navbar;
