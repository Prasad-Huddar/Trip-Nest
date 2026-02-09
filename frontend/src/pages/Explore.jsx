import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiSearch, FiSliders, FiMapPin, FiX, FiChevronDown, FiGrid, FiList } from 'react-icons/fi';
import DestinationCard from '../components/DestinationCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import api from '../utils/api';

const indianStates = [
    'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal', 'Jammu & Kashmir', 'Delhi', 'Ladakh', 'Puducherry'
].sort();

const Explore = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showFilters, setShowFilters] = useState(false);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [filters, setFilters] = useState({
        search: searchParams.get('search') || '',
        category: searchParams.get('category') || '',
        state: searchParams.get('state') || '',
        country: searchParams.get('country') || '',
        minPrice: searchParams.get('minPrice') || '',
        maxPrice: searchParams.get('maxPrice') || '',
        sort: searchParams.get('sort') || 'rating',
    });

    const [states, setStates] = useState([]);
    const [countries, setCountries] = useState([]);
    const [filteredDestinations, setFilteredDestinations] = useState([]);

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        try {
            const { data } = await api.get('/destinations?limit=1000');
            const allDests = data.data || [];

            // Extract unique countries from all destinations
            const uniqueCountries = [...new Set(allDests.map(d => d.location?.country).filter(Boolean))].sort();
            setCountries(uniqueCountries);

            // Combine static Indian states with any other regions found in data
            const foundStates = [...new Set(allDests.map(d => d.location?.state).filter(Boolean))];
            const allStates = [...new Set([...indianStates, ...foundStates])].sort();
            setStates(allStates);
        } catch (error) {
            console.error('Error fetching initial filter data:', error);
        }
    };

    useEffect(() => {
        fetchDestinations();
    }, [searchParams]);

    useEffect(() => {
        applyLocalFilters();
    }, [destinations, filters]);

    const fetchDestinations = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams(searchParams);
            console.log('Fetching destinations with params:', params.toString());
            const { data } = await api.get(`/destinations?${params.toString()}`);
            console.log('Received data:', data);
            console.log('Number of destinations:', data.data?.length || 0);
            setDestinations(data.data || []);
        } catch (error) {
            console.error('Error fetching destinations:', error);
        } finally {
            setLoading(false);
        }
    };

    const applyLocalFilters = () => {
        let filtered = [...destinations];

        // Apply search filter
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            filtered = filtered.filter(d =>
                (d.name?.toLowerCase().includes(searchTerm)) ||
                (d.description?.toLowerCase().includes(searchTerm)) ||
                (d.location?.city?.toLowerCase().includes(searchTerm)) ||
                (d.location?.state?.toLowerCase().includes(searchTerm))
            );
        }

        // Apply category filter
        if (filters.category) {
            filtered = filtered.filter(d => d.category === filters.category);
        }

        // Apply country filter
        if (filters.country) {
            filtered = filtered.filter(d => d.location?.country === filters.country);
        }

        // Apply state filter
        if (filters.state) {
            filtered = filtered.filter(d => d.location?.state === filters.state);
        }

        // Apply price filter
        if (filters.minPrice) {
            filtered = filtered.filter(d => d.price >= parseInt(filters.minPrice));
        }
        if (filters.maxPrice) {
            filtered = filtered.filter(d => d.price <= parseInt(filters.maxPrice));
        }

        // Apply sorting
        if (filters.sort === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (filters.sort === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (filters.sort === 'rating') {
            filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        } else if (filters.sort === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        setFilteredDestinations(filtered);
    };

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);

        const params = new URLSearchParams();
        Object.entries(newFilters).forEach(([k, v]) => {
            if (v) params.append(k, v);
        });
        setSearchParams(params);
    };

    const clearFilters = () => {
        setFilters({
            search: '',
            category: '',
            state: '',
            country: '',
            minPrice: '',
            maxPrice: '',
            sort: 'rating'
        });
        setSearchParams({});
    };

    const categories = [
        'beach', 'mountain', 'city', 'adventure', 'cultural',
        'wildlife', 'island', 'desert', 'pilgrimage', 'hill station',
        'heritage', 'waterfall', 'nature'
    ];

    const sortOptions = [
        { value: 'rating', label: 'Top Rated' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'name', label: 'Name A-Z' }
    ];

    return (
        <div className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="container-custom">
                {/* Enhanced Header */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mb-10"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-4">
                                Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Amazing</span> Places
                            </h1>
                            <div className="space-y-2">
                                <p className="text-xl text-slate-600 dark:text-slate-400">
                                    Discover {filteredDestinations.length} incredible destinations across {states.length} states and {countries.length} countries
                                </p>
                                {/* Search Summary */}
                                {(filters.search || filters.state || filters.country || filters.category) && (
                                    <div className="flex flex-wrap gap-2 text-sm">
                                        {filters.search && (
                                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                                                Search: "{filters.search}"
                                            </span>
                                        )}
                                        {filters.state && (
                                            <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                                                State: {filters.state}
                                            </span>
                                        )}
                                        {filters.country && (
                                            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                                                Country: {filters.country}
                                            </span>
                                        )}
                                        {filters.category && (
                                            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full capitalize">
                                                Category: {filters.category.replace('-', ' ')}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center bg-white dark:bg-slate-900 rounded-xl p-2 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                >
                                    <FiGrid size={20} />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                                >
                                    <FiList size={20} />
                                </button>
                            </div>

                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                            >
                                <FiSliders /> Filters
                            </button>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {/* Enhanced Filters Sidebar */}
                    <motion.div
                        className={`lg:block ${showFilters ? 'block' : 'hidden'} z-40`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl sticky top-28 border border-slate-200/50 dark:border-slate-800/50 shadow-xl backdrop-blur-xl">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                                    <FiFilter className="text-blue-500" /> Filters
                                </h3>
                                {Object.values(filters).some(v => v) && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
                                    >
                                        <FiX size={16} /> Reset
                                    </button>
                                )}
                            </div>

                            <div className="space-y-6">
                                {/* Search */}
                                <div className="relative">
                                    <FiSearch className="absolute left-4 top-3.5 text-slate-400 z-10" />
                                    <input
                                        type="text"
                                        value={filters.search}
                                        onChange={(e) => handleFilterChange('search', e.target.value)}
                                        placeholder="Search destinations..."
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 outline-none transition-all text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                                    />
                                </div>

                                {/* Sort */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Sort By</label>
                                    <div className="relative">
                                        <select
                                            value={filters.sort}
                                            onChange={(e) => handleFilterChange('sort', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-white appearance-none cursor-pointer"
                                        >
                                            {sortOptions.map(option => (
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                        <FiChevronDown className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Country Filter */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Country</label>
                                    <div className="relative">
                                        <select
                                            value={filters.country}
                                            onChange={(e) => handleFilterChange('country', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-white appearance-none cursor-pointer"
                                        >
                                            <option value="">All Countries</option>
                                            {countries.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                        <FiChevronDown className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* State Filter */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">State / Region</label>
                                    <div className="relative">
                                        <select
                                            value={filters.state}
                                            onChange={(e) => handleFilterChange('state', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-white appearance-none cursor-pointer"
                                        >
                                            <option value="">All Regions</option>
                                            {states.map(s => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        <FiChevronDown className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Price Range</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <input
                                            type="number"
                                            placeholder="Min"
                                            value={filters.minPrice}
                                            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                                            className="px-3 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-white text-sm"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Max"
                                            value={filters.maxPrice}
                                            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                            className="px-3 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-white text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Category Filter */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Category</label>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => handleFilterChange('category', '')}
                                            className={`px-3 py-2 text-xs font-medium rounded-lg transition-all ${filters.category === ''
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                                                }`}
                                        >
                                            All
                                        </button>
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => handleFilterChange('category', cat)}
                                                className={`px-3 py-2 text-xs font-medium rounded-lg capitalize transition-all ${filters.category === cat
                                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                                                    }`}
                                            >
                                                {cat.replace('-', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content Grid/List */}
                    <div className="lg:col-span-3">
                        {loading ? (
                            <LoadingSkeleton />
                        ) : filteredDestinations.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-20"
                            >
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 max-w-md mx-auto border border-slate-200 dark:border-slate-700">
                                    <FiMapPin className="mx-auto text-6xl text-slate-300 mb-4" />
                                    <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">No destinations found</h3>
                                    <p className="text-slate-500 dark:text-slate-400">Try adjusting your filters or search terms</p>
                                    <button
                                        onClick={clearFilters}
                                        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-6`}
                                layout
                            >
                                <AnimatePresence>
                                    {filteredDestinations.map((destination, index) => (
                                        <motion.div
                                            key={destination._id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -30 }}
                                            transition={{ delay: index * 0.05, duration: 0.5 }}
                                            layout
                                        >
                                            <DestinationCard destination={destination} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
