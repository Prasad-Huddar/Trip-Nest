import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiMapPin, FiCalendar, FiUsers, FiCheckCircle, FiPlus, FiX,
    FiArrowRight, FiInfo, FiStar, FiFilter
} from 'react-icons/fi';
import { FaPlane, FaTrain, FaBus, FaHotel } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { getTransportOptions, getHotelOptions, getCoordinates } from '../utils/mockBookingService';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

// Fix Leaflet icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const BookingPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [activeSection, setActiveSection] = useState('transport'); // 'transport' or 'stays'

    const [tripData, setTripData] = useState({
        source: '',
        destination: '',
        vias: [],
        date: new Date(),
        travelers: 1,
        selectedTransport: null,
        selectedHotel: null,
        transportMode: 'flight' // 'flight', 'train', 'bus'
    });

    const [options, setOptions] = useState({
        transports: [],
        hotels: []
    });

    const [mapMarkers, setMapMarkers] = useState([]);

    // Initial load if destination ID is provided
    useEffect(() => {
        if (id) {
            const fetchDest = async () => {
                try {
                    const { data } = await api.get(`/destinations/${id}`);
                    setTripData(prev => ({ ...prev, destination: data.data.location.city || data.data.name }));
                } catch (e) {
                    console.error(e);
                }
            };
            fetchDest();
        }
    }, [id]);

    const addVia = () => {
        if (tripData.vias.length < 3) {
            setTripData({ ...tripData, vias: [...tripData.vias, ''] });
        }
    };

    const updateVia = (index, value) => {
        const newVias = [...tripData.vias];
        newVias[index] = value;
        setTripData({ ...tripData, vias: newVias });
    };

    const removeVia = (index) => {
        const newVias = tripData.vias.filter((_, i) => i !== index);
        setTripData({ ...tripData, vias: newVias });
    };

    const handleSearch = async () => {
        setLoading(true);
        // Simulate API fetch delay
        setTimeout(async () => {
            const transports = getTransportOptions(tripData.transportMode, tripData.source);
            const hotels = getHotelOptions(tripData.destination);
            setOptions({ transports, hotels });

            // Map Logic
            const coords = [];
            if (tripData.source) coords.push(await getCoordinates(tripData.source));
            for (const via of tripData.vias) {
                if (via) coords.push(await getCoordinates(via));
            }
            if (tripData.destination) coords.push(await getCoordinates(tripData.destination));
            setMapMarkers(coords);

            setStep(2);
            setLoading(false);
        }, 1200);
    };

    const handleConfirm = async () => {
        setLoading(true);
        try {
            const bookingData = {
                source: tripData.source,
                destinationCity: tripData.destination,
                destinationId: id,
                transportMode: tripData.transportMode,
                startDate: tripData.date,
                travelers: tripData.travelers,
                totalPrice: ((tripData.selectedTransport?.price || 0) * tripData.travelers + (tripData.selectedHotel?.price || 0)),
                selectedTransport: tripData.selectedTransport,
                selectedHotel: tripData.selectedHotel
            };

            const { data } = await api.post('/bookings', bookingData);
            if (data.success) {
                setStep(3);
            }
        } catch (error) {
            console.error('Booking failed:', error);
            const message = error.response?.data?.message || 'Something went wrong during booking. Please try again.';
            alert(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-12">
            <div className="container-custom">
                {/* Search Bar - MakeMyTrip Style */}
                {step === 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                            <h2 className="text-4xl font-black mb-10 text-slate-800 dark:text-white flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                    <FiMapPin />
                                </div>
                                Where are you heading?
                            </h2>

                            <div className="space-y-8">
                                {/* Route Inputs */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">From</label>
                                        <div className="relative group">
                                            <FiMapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-600 group-focus-within:scale-110 transition-transform" />
                                            <input
                                                type="text"
                                                placeholder="Starting point"
                                                className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold text-lg transition-all"
                                                value={tripData.source}
                                                onChange={(e) => setTripData({ ...tripData, source: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">To</label>
                                        <div className="relative group">
                                            <FiMapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-600 group-focus-within:scale-110 transition-transform" />
                                            <input
                                                type="text"
                                                placeholder="Destination"
                                                className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold text-lg transition-all"
                                                value={tripData.destination}
                                                onChange={(e) => setTripData({ ...tripData, destination: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Travel Date</label>
                                        <div className="relative group">
                                            <FiCalendar className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-600 z-10" />
                                            <DatePicker
                                                selected={tripData.date}
                                                onChange={(date) => setTripData({ ...tripData, date })}
                                                minDate={new Date()}
                                                className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold text-lg transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Travelers</label>
                                        <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-2 rounded-3xl border-2 border-transparent">
                                            <button onClick={() => setTripData({ ...tripData, travelers: Math.max(1, tripData.travelers - 1) })} className="w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center font-bold text-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">-</button>
                                            <span className="flex-1 text-center font-black text-xl">{tripData.travelers}</span>
                                            <button onClick={() => setTripData({ ...tripData, travelers: tripData.travelers + 1 })} className="w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center font-bold text-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">+</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Vias Selection */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between px-4">
                                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Plan Stops (Via)</h3>
                                        {tripData.vias.length < 3 && (
                                            <button onClick={addVia} className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
                                                <FiPlus /> Add Stop
                                            </button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {tripData.vias.map((via, idx) => (
                                            <motion.div
                                                initial={{ scale: 0.9, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                key={idx}
                                                className="relative group"
                                            >
                                                <FiMapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    type="text"
                                                    placeholder="City name"
                                                    value={via}
                                                    onChange={(e) => updateVia(idx, e.target.value)}
                                                    className="w-full pl-12 pr-12 py-4 bg-slate-50 dark:bg-slate-800/10 rounded-2xl border-2 border-slate-100 dark:border-slate-800 outline-none font-bold transition-all focus:border-blue-400"
                                                />
                                                <button onClick={() => removeVia(idx)} className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex">
                                                    <FiX className="text-xs" />
                                                </button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Transport Mode Selector Tabs */}
                                <div className="flex flex-wrap gap-4 pt-4">
                                    {[
                                        { id: 'flight', label: 'Flight', icon: FaPlane },
                                        { id: 'train', label: 'Train', icon: FaTrain },
                                        { id: 'bus', label: 'Bus', icon: FaBus }
                                    ].map(mode => (
                                        <button
                                            key={mode.id}
                                            onClick={() => setTripData({ ...tripData, transportMode: mode.id })}
                                            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${tripData.transportMode === mode.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/25 scale-105' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'}`}
                                        >
                                            <mode.icon />
                                            {mode.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                                    <button
                                        onClick={handleSearch}
                                        disabled={loading || !tripData.source || !tripData.destination}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:scale-105 disabled:opacity-50 flex items-center gap-4"
                                    >
                                        {loading ? <div className="w-6 h-6 border-4 border-white border-t-transparent animate-spin rounded-full"></div> : <FiArrowRight size={24} />}
                                        Plan My Trip
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Search Results - Two Sections: Transport & Stays */}
                {step === 2 && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Main Interaction Area */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Section Switcher Tabs */}
                            <div className="bg-white dark:bg-slate-900 p-2 rounded-3xl inline-flex gap-2 shadow-lg border border-slate-100 dark:border-slate-800">
                                <button
                                    onClick={() => setActiveSection('transport')}
                                    className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center gap-2 ${activeSection === 'transport' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                                >
                                    {tripData.transportMode === 'flight' ? <FaPlane /> : tripData.transportMode === 'train' ? <FaTrain /> : <FaBus />} Transport
                                    {tripData.selectedTransport && <FiCheckCircle />}
                                </button>
                                <button
                                    onClick={() => setActiveSection('stays')}
                                    className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center gap-2 ${activeSection === 'stays' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                                >
                                    <FaHotel /> Stays
                                    {tripData.selectedHotel ? <FiCheckCircle /> : <span className="text-[10px] opacity-60 ml-1">(Optional)</span>}
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                {activeSection === 'transport' ? (
                                    <motion.div
                                        key="transport"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-black flex items-center gap-3">
                                                Available {tripData.transportMode}s
                                                <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase">3 Found</span>
                                            </h3>
                                            <button className="flex items-center gap-2 text-sm font-bold text-indigo-600"><FiFilter /> Filters</button>
                                        </div>

                                        {options.transports.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => setTripData({ ...tripData, selectedTransport: item })}
                                                className={`w-full bg-white dark:bg-slate-900 p-6 rounded-[2rem] border-2 transition-all group flex items-center gap-8 ${tripData.selectedTransport?.id === item.id ? 'border-blue-600 shadow-xl' : 'border-transparent hover:border-slate-100 dark:hover:border-slate-800 shadow-sm'}`}
                                            >
                                                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                                    {item.logo || (tripData.transportMode === 'flight' ? <FaPlane className="text-blue-600" /> : tripData.transportMode === 'train' ? <FaTrain className="text-blue-600" /> : <FaBus className="text-blue-600" />)}
                                                </div>
                                                <div className="flex-grow text-left">
                                                    <h4 className="font-black text-xl mb-1">{item.name}</h4>
                                                    <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
                                                        <span>{item.departure}</span>
                                                        <FiArrowRight />
                                                        <span>{item.arrival}</span>
                                                        <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] uppercase">{item.duration}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-black text-blue-600">₹{item.price.toLocaleString()}</div>
                                                    <div className="text-[10px] uppercase font-black text-slate-400">Per Traveler</div>
                                                </div>
                                            </button>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="stays"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl font-black">Hotels & Resorts in {tripData.destination}</h3>
                                            <p className="text-sm text-slate-500 font-bold">Recommended for staying</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {options.hotels.map((hotel) => (
                                                <button
                                                    key={hotel.id}
                                                    onClick={() => setTripData({ ...tripData, selectedHotel: hotel })}
                                                    className={`bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border-2 transition-all group ${tripData.selectedHotel?.id === hotel.id ? 'border-blue-600 shadow-2xl scale-105' : 'border-transparent shadow-sm'}`}
                                                >
                                                    <div className="relative h-48 overflow-hidden">
                                                        <img src={hotel.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 font-black text-sm">
                                                            <FiStar className="text-yellow-500 fill-current" />
                                                            {hotel.rating}
                                                        </div>
                                                    </div>
                                                    <div className="p-6 text-left">
                                                        <h4 className="font-black text-xl mb-2">{hotel.name}</h4>
                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {hotel.amenities.map(a => (
                                                                <span key={a} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg uppercase text-slate-500">{a}</span>
                                                            ))}
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <span className="text-2xl font-black text-blue-600">₹{hotel.price.toLocaleString()}</span>
                                                                <span className="text-xs text-slate-400 uppercase font-bold ml-1">/ night</span>
                                                            </div>
                                                            {tripData.selectedHotel?.id === hotel.id && <FiCheckCircle className="text-blue-600 text-2xl" />}
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Sidebar: Map & Summary */}
                        <div className="space-y-8">
                            {/* Map View */}
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 h-[400px]">
                                <MapContainer
                                    center={mapMarkers[0] || [12.9716, 77.5946]}
                                    zoom={mapMarkers.length > 1 ? 6 : 12}
                                    style={{ height: '100%', borderRadius: '2rem' }}
                                >
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    {mapMarkers.map((pos, i) => (
                                        <Marker key={i} position={pos}>
                                            <Popup>
                                                {i === 0 ? 'Start' : i === mapMarkers.length - 1 ? 'End' : 'Stop'}
                                            </Popup>
                                        </Marker>
                                    ))}
                                    {mapMarkers.length > 1 && <Polyline positions={mapMarkers} color="blue" />}
                                </MapContainer>
                            </div>

                            {/* Summary Card */}
                            <div className="bg-blue-600 rounded-[3rem] p-8 text-white shadow-2xl">
                                <h3 className="text-2xl font-black mb-6">Trip Summary</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                            <div className="w-0.5 h-12 bg-white/30"></div>
                                            {tripData.vias.length > 0 && <div className="w-2 h-2 bg-white/50 rounded-full mb-12"></div>}
                                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div className="flex flex-col justify-between py-0.5">
                                            <div>
                                                <div className="text-[10px] font-black uppercase text-white/50">Origin</div>
                                                <div className="font-bold text-lg">{tripData.source}</div>
                                            </div>
                                            {tripData.vias.length > 0 && (
                                                <div className="my-2">
                                                    <div className="text-[10px] font-black uppercase text-white/50">Stops</div>
                                                    <div className="text-sm font-bold">{tripData.vias.join(', ')}</div>
                                                </div>
                                            )}
                                            <div>
                                                <div className="text-[10px] font-black uppercase text-white/50">Destination</div>
                                                <div className="font-bold text-lg">{tripData.destination}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/20"></div>

                                    <div className="space-y-4">
                                        {tripData.selectedTransport && (
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-bold text-white/60 flex items-center gap-2">
                                                    {tripData.transportMode === 'flight' ? <FaPlane size={14} /> : tripData.transportMode === 'train' ? <FaTrain size={14} /> : <FaBus size={14} />}
                                                    Transport ({tripData.selectedTransport.name})
                                                </span>
                                                <span className="font-black">₹{(tripData.selectedTransport.price * tripData.travelers).toLocaleString()}</span>
                                            </div>
                                        )}
                                        {tripData.selectedHotel && (
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-bold text-white/60">Stay ({tripData.selectedHotel.name})</span>
                                                <span className="font-black">₹{tripData.selectedHotel.price.toLocaleString()}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-4 flex justify-between items-center border-t border-white/20">
                                        <span className="text-xl font-bold">Total Pay</span>
                                        <span className="text-3xl font-black">
                                            ₹{((tripData.selectedTransport?.price || 0) * tripData.travelers + (tripData.selectedHotel?.price || 0)).toLocaleString()}
                                        </span>
                                    </div>

                                    <button
                                        onClick={handleConfirm}
                                        disabled={!tripData.selectedTransport}
                                        className="w-full bg-white text-blue-600 font-black py-4 rounded-[1.5rem] shadow-xl hover:scale-105 transition-all disabled:opacity-50"
                                    >
                                        {tripData.selectedHotel ? 'Book Complete Journey' : 'Book Transport Only'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Final Success State */}
                {step === 3 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-3xl mx-auto py-20"
                    >
                        <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] text-center shadow-2xl border border-slate-100 dark:border-slate-800">
                            <div className="w-32 h-32 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10">
                                <FiCheckCircle size={64} />
                            </div>
                            <h2 className="text-5xl font-black mb-6">Bon Voyage!</h2>
                            <p className="text-xl text-slate-500 mb-12 max-w-md mx-auto leading-relaxed">
                                Your multi-city trip from <span className="text-blue-600 font-bold">{tripData.source}</span> to <span className="text-blue-600 font-bold">{tripData.destination}</span> has been planned successfully.
                            </p>
                            <div className="flex flex-col md:flex-row gap-6 justify-center">
                                <button onClick={() => navigate('/dashboard')} className="bg-blue-600 text-white px-12 py-5 rounded-[2rem] font-black text-lg shadow-xl hover:scale-105 transition-all">View My Tickets</button>
                                <button onClick={() => setStep(1)} className="bg-slate-100 dark:bg-slate-800 px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-slate-200 transition-all">Plan Another Trip</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default BookingPage;
