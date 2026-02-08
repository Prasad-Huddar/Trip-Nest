import { motion } from 'framer-motion';
import { FiShield, FiHeart, FiMap, FiPhoneCall, FiLock, FiInfo } from 'react-icons/fi';

const SafetyGuide = () => {
    const safetyTips = [
        {
            icon: <FiLock className="text-blue-500" />,
            title: "Document Security",
            description: "Always keep digital copies of your passport, visa, and insurance. Store physical copies in a separate bag from the originals."
        },
        {
            icon: <FiHeart className="text-red-500" />,
            title: "Health & Wellness",
            description: "Stay hydrated, carry a basic first-aid kit, and ensure you have all necessary vaccinations for your destination."
        },
        {
            icon: <FiMap className="text-green-500" />,
            title: "Local Knowledge",
            description: "Research local customs, weather conditions, and safe areas before you arrive. Stay aware of your surroundings."
        },
        {
            icon: <FiPhoneCall className="text-purple-500" />,
            title: "Emergency Contacts",
            description: "Save local emergency numbers and your country's embassy details in your phone and written down."
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-blue-600/20">
                            <FiShield size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                                Safety <span className="text-blue-600">Guide</span>
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs mt-1">Our priority is your peace of mind</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {safetyTips.map((tip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800"
                            >
                                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                                    {tip.icon}
                                </div>
                                <h3 className="text-xl font-black mb-3">{tip.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {tip.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Detailed Content */}
                    <div className="space-y-8">
                        <section className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                                <FiInfo className="text-blue-600" /> Travel Insurance
                            </h2>
                            <div className="text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed font-medium">
                                <p>We strongly recommend that all travelers purchase comprehensive travel insurance at the time of booking. Ensure your policy covers:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Medical emergencies and hospitalization</li>
                                    <li>Trip cancellation and interruption</li>
                                    <li>Theft or loss of baggage and personal effects</li>
                                    <li>Emergency evacuation and repatriation</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-blue-600 p-10 rounded-[3rem] shadow-2xl text-white">
                            <h2 className="text-2xl font-black mb-6">Stay Connected</h2>
                            <p className="text-blue-50 font-medium leading-relaxed mb-6">
                                Share your itinerary with family or friends and check in regularly. In case of any immediate safety concerns during your trip, contact our 24/7 support line.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl font-black text-sm">
                                    Support: +1 (800) TRIP-SAFE
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl font-black text-sm">
                                    Email: safety@tripnest.com
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SafetyGuide;
