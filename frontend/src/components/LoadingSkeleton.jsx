import { motion } from 'framer-motion';

const LoadingSkeleton = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20">
            <div className="container-custom">
                {/* Header Skeleton */}
                <div className="mb-12">
                    <div className="h-16 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-4 animate-pulse"></div>
                    <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-xl w-3/4 animate-pulse"></div>
                </div>

                {/* Filter Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 h-96 animate-pulse">
                            <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl mb-6"></div>
                            <div className="space-y-4">
                                <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                                <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                                <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                            </div>
                        </div>
                    </div>

                    {/* Cards Skeleton */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: item * 0.1 }}
                                    className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg"
                                >
                                    {/* Image skeleton */}
                                    <div className="h-64 bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                                    
                                    {/* Content skeleton */}
                                    <div className="p-6">
                                        <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-xl mb-3 animate-pulse"></div>
                                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg mb-2 animate-pulse w-3/4"></div>
                                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg mb-4 animate-pulse w-1/2"></div>
                                        
                                        <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-16 animate-pulse"></div>
                                            <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-24 animate-pulse"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSkeleton;