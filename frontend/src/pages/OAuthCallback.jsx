import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

const OAuthCallback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { login } = useAuth();
    const [status, setStatus] = useState('processing');
    const [error, setError] = useState('');

    useEffect(() => {
        const handleCallback = async () => {
            try {
                const code = searchParams.get('code');
                const provider = searchParams.get('state') || 'google';
                const error = searchParams.get('error');

                if (error) {
                    setStatus('error');
                    setError('Authentication was cancelled or failed');
                    setTimeout(() => navigate('/'), 3000);
                    return;
                }

                if (!code) {
                    setStatus('error');
                    setError('No authorization code received');
                    setTimeout(() => navigate('/'), 3000);
                    return;
                }

                // Send code to backend for processing
                const { data } = await api.post('/auth/oauth/callback', {
                    provider,
                    code
                });

                if (data.success) {
                    setStatus('success');
                    // Store token and user data
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));

                    setTimeout(() => navigate('/explore'), 1500);
                } else {
                    setStatus('error');
                    setError(data.message || 'Authentication failed');
                    setTimeout(() => navigate('/'), 3000);
                }
            } catch (err) {
                setStatus('error');
                setError(err.response?.data?.message || 'An error occurred during authentication');
                setTimeout(() => navigate('/'), 3000);
            }
        };

        handleCallback();
    }, [searchParams, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-12 max-w-md w-full text-center"
            >
                {status === 'processing' && (
                    <>
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Completing Sign In
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Please wait while we verify your account...
                        </p>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Success!
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Redirecting you to explore destinations...
                        </p>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Authentication Failed
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            {error}
                        </p>
                        <p className="text-sm text-slate-500">
                            Redirecting to home page...
                        </p>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default OAuthCallback;
