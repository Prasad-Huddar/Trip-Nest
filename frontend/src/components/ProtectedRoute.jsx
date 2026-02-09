import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiUser, FiLogIn, FiX } from 'react-icons/fi';
import AuthModal from './AuthModal';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-slate-600 dark:text-slate-400">Loading...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md w-full"
                    >
                        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-800 text-center">
                            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FiLock className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                            </div>
                            
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                Access Restricted
                            </h2>
                            
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                This feature is only available to registered users. 
                                Sign in or create an account to explore amazing destinations, 
                                book trips, and access personalized travel recommendations.
                            </p>
                            
                            <div className="space-y-4">
                                <button
                                    onClick={() => setShowAuthModal(true)}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
                                >
                                    <FiUser className="w-5 h-5" />
                                    Sign In / Register
                                </button>
                                
                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                    <p className="flex items-center justify-center gap-2">
                                        <FiLogIn className="w-4 h-4" />
                                        Unlock premium travel features
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Auth Modal */}
                <AuthModal
                    isOpen={showAuthModal}
                    onClose={() => setShowAuthModal(false)}
                    initialMode={authMode}
                />
            </>
        );
    }

    return children;
};

export default ProtectedRoute;