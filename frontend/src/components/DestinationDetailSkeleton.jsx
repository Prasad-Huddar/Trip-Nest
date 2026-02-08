import { motion } from 'framer-motion';

const DestinationDetailSkeleton = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Hero Skeleton */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="w-full h-full bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="container-custom">
                        <div className="space-y-4">
                            <div className="h-16 bg-slate-300 dark:bg-slate-700 rounded-2xl w-3/4 animate-pulse"></div>
                            <div className="flex gap-3">
                                <div className="h-8 bg-slate-300 dark:bg-slate-700 rounded-full w-32 animate-pulse"></div>
                                <div className="h-8 bg-slate-300 dark:bg-slate-700 rounded-full w-24 animate-pulse"></div>
                                <div className="h-8 bg-slate-300 dark:bg-slate-700 rounded-full w-36 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom mt-12 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Skeleton */}
                <div className="lg:col-span-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl"
                    >
                        {/* Tab Navigation Skeleton */}
                        <div className="flex flex-wrap gap-8 border-b border-slate-200 dark:border-slate-700 mb-8 pb-6">
                            <div className="flex gap-8">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div key={item} className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-20 animate-pulse"></div>
                                ))}
                            </div>
                            <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl w-32 animate-pulse"></div>
                        </div>

                        {/* Content Skeleton */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-xl w-full animate-pulse"></div>
                                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-xl w-5/6 animate-pulse"></div>
                                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-xl w-4/6 animate-pulse"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl h-32 animate-pulse"></div>
                                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl h-32 animate-pulse"></div>
                                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl h-32 animate-pulse md:col-span-2"></div>
                            </div>

                            <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl h-40 animate-pulse"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar Skeleton */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        {/* Booking Card Skeleton */}
                        <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl h-80 animate-pulse"></div>
                        
                        {/* Info Cards Skeleton */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl h-64 animate-pulse"></div>
                        
                        {/* Share Card Skeleton */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl h-40 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailSkeleton;