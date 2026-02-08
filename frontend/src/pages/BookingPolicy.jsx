import { motion } from 'framer-motion';
import { FiShield, FiCalendar, FiDollarSign, FiClock } from 'react-icons/fi';

const BookingPolicy = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white">
                        Booking <span className="text-blue-600">Policy</span>
                    </h1>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl">
                                    <FiShield size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">General Terms</h2>
                            </div>
                            <div className="text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
                                <p>By booking a trip with TripNest, you agree to our standard terms and conditions. All bookings are subject to availability and confirmation by our travel partners.</p>
                                <p>Customers must provide accurate personal information and valid identification during the booking process.</p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-50 dark:bg-green-900/30 text-green-600 rounded-2xl">
                                    <FiDollarSign size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Payments & Deposits</h2>
                            </div>
                            <div className="text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
                                <p>A minimum deposit of 25% is required to secure your booking. The remaining balance must be paid at least 15 days before the departure date.</p>
                                <p>We accept all major credit cards, UPI, and bank transfers. All transactions are processed through secure encrypted gateways.</p>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-600 rounded-2xl">
                                    <FiClock size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Cancellation & Refunds</h2>
                            </div>
                            <div className="text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>15+ days before:</strong> Full refund minus 5% processing fee.</li>
                                    <li><strong>7-14 days before:</strong> 50% refund of the total booking value.</li>
                                    <li><strong>Less than 7 days:</strong> No refund applicable.</li>
                                </ul>
                                <p>Refunds are typically processed within 7-10 working days to the original payment method.</p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 rounded-2xl">
                                    <FiCalendar size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Modifications</h2>
                            </div>
                            <div className="text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
                                <p>Plan changes are allowed up to 10 days before departure, subject to availability and price differences. A modification fee may apply depending on the service provider.</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BookingPolicy;
