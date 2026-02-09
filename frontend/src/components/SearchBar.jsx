import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiMapPin, FiCalendar, FiUsers, FiCompass } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SearchBar = ({ onSearch, className = '', hideTravelers = false }) => {
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState({
        location: '',
        travelers: 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (searchData.location) {
            // Only add search parameter, let backend handle the logic
            params.append('search', searchData.location);
        }
        if (onSearch) {
            onSearch(searchData);
        } else {
            navigate(`/explore?${params.toString()}`);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className={`glass-strong rounded-2xl p-4 shadow-2xl ${className}`}
        >
            <div className={`grid grid-cols-1 ${hideTravelers ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4`}>
                {/* Location */}
                <div className="flex items-center space-x-3 px-6 py-4 bg-white/70 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-white/30 transition-all focus-within:ring-2 focus-within:ring-blue-500/30">
                    <FiCompass className="w-5 h-5 text-blue-600" />
                    <input
                        type="text"
                        placeholder="Search destinations, cities, states..."
                        value={searchData.location}
                        onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                        className="flex-1 bg-transparent outline-none placeholder-gray-500 dark:placeholder-gray-400 font-medium"
                    />
                </div>

                {/* Travelers */}
                {!hideTravelers && (
                    <div className="flex items-center space-x-3 px-6 py-4 bg-white/70 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-white/30 transition-all focus-within:ring-2 focus-within:ring-blue-500/30">
                        <FiUsers className="w-5 h-5 text-blue-600" />
                        <select
                            value={searchData.travelers}
                            onChange={(e) => setSearchData({ ...searchData, travelers: e.target.value })}
                            className="flex-1 bg-transparent outline-none font-medium text-gray-700 dark:text-gray-200"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num}>
                                    {num} {num === 1 ? 'Traveler' : 'Travelers'}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Search Button */}
                <motion.button
                    whileHover={{ scale: 1.05, translateY: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-xl transition-all h-full min-h-[56px]"
                >
                    <FiSearch className="w-5 h-5" />
                    <span className="text-lg">Search</span>
                </motion.button>
            </div>
        </motion.form>
    );
};

export default SearchBar;
