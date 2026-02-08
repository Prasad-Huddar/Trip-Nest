const mockTransport = {
    flight: [
        { id: 'f1', name: 'IndiGo', logo: '✈️', price: 4200, duration: '2h 15m', departure: '10:30 AM', arrival: '12:45 PM', cities: ['Bengaluru', 'Mumbai', 'Delhi', 'Chennai', 'Goa'] },
        { id: 'f2', name: 'Air India', logo: '✈️', price: 5800, duration: '2h 00m', departure: '02:00 PM', arrival: '04:00 PM', cities: ['Delhi', 'Mumbai', 'Bengaluru'] },
        { id: 'f3', name: 'Vistara', logo: '✈️', price: 6500, duration: '2h 10m', departure: '06:15 PM', arrival: '08:25 PM', cities: ['Bengaluru', 'Delhi', 'Mumbai'] },
        { id: 'f4', name: 'Akasa Air', logo: '✈️', price: 3900, duration: '2h 30m', departure: '08:00 AM', arrival: '10:30 AM', cities: ['Pune', 'Bengaluru', 'Mumbai'] },
    ],
    train: [
        { id: 't1', name: 'Shatabdi Express', price: 1200, duration: '6h 30m', departure: '06:00 AM', arrival: '12:30 PM', cities: ['Bengaluru', 'Mysuru', 'Chennai'] },
        { id: 't2', name: 'Rajdhani Express', price: 2800, duration: '5h 45m', departure: '08:00 PM', arrival: '01:45 AM', cities: ['Delhi', 'Mumbai', 'Bengaluru'] },
        { id: 't3', name: 'Vande Bharat Exp', price: 1550, duration: '4h 30m', departure: '07:30 AM', arrival: '12:00 PM', cities: ['Mysuru', 'Bengaluru', 'Hubballi'] },
        { id: 't4', name: 'Duronto Express', price: 1800, duration: '6h 00m', departure: '11:30 PM', arrival: '05:30 AM', cities: ['Mumbai', 'Pune', 'Nagpur'] },
    ],
    bus: [
        { id: 'b1', name: 'KSRTC Ambaari Dream Class', price: 1250, duration: '8h 00m', departure: '10:00 PM', arrival: '06:00 AM', cities: ['Bengaluru', 'Mysuru', 'Hubballi', 'Belgaum'] },
        { id: 'b2', name: 'SRS Travels Scania', price: 950, duration: '7h 30m', departure: '11:15 PM', arrival: '06:45 AM', cities: ['Bengaluru', 'Mumbai', 'Pune'] },
        { id: 'b3', name: 'Orange Travels Sleeper', price: 1100, duration: '7h 45m', departure: '09:30 PM', arrival: '05:15 AM', cities: ['Hyderabad', 'Bengaluru', 'Chennai'] },
        { id: 'b4', name: 'VRL Travels', price: 880, duration: '9h 00m', departure: '08:45 PM', arrival: '05:45 AM', cities: ['Hubballi', 'Bengaluru', 'Mumbai'] },
    ]
};

const mockHotels = {
    'Bengaluru': [
        { id: 'h_blr_1', name: 'The Leela Palace Bengaluru', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800', price: 15500, rating: 4.9, amenities: ['Royal Spa', 'Fine Dining', 'Pool'] },
        { id: 'h_blr_2', name: 'ITC Gardenia', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', price: 12540, rating: 4.8, amenities: ['Garden Cafe', 'Spa', 'Eco-friendly'] },
    ],
    'Mumbai': [
        { id: 'h_mum_1', name: 'The Taj Mahal Palace', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', price: 25000, rating: 5.0, amenities: ['Sea View', 'Butler Service', 'Heritage'] },
        { id: 'h_mum_2', name: 'Trident Nariman Point', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800', price: 18000, rating: 4.7, amenities: ['Infinity Pool', 'Gym', 'Bar'] },
    ],
    'Delhi': [
        { id: 'h_del_1', name: 'The Lodhi', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800', price: 22000, rating: 4.9, amenities: ['Private Pool', 'Art Gallery', 'Spa'] },
        { id: 'h_del_2', name: 'The Leela Ambience', image: 'https://images.unsplash.com/photo-1551882547-ff43c69e5cfd?w=800', price: 14000, rating: 4.6, amenities: ['Rooftop Pool', 'Luxury Spa', 'Lounge'] },
    ],
    'Mysuru': [
        { id: 'h_mys_1', name: 'Radisson Blu Plaza', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', price: 7500, rating: 4.7, amenities: ['Palace View', 'Pool', 'Garden'] },
        { id: 'h_mys_2', name: 'Grand Mercure Mysuru', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800', price: 6200, rating: 4.5, amenities: ['Rooftop Bar', 'Spa', 'Kids Club'] },
    ],
    'default': [
        { id: 'h_def_1', name: 'Wanderlust Premium Resort', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800', price: 8500, rating: 4.6, amenities: ['Free WiFi', 'Pool', 'Breakfast'] },
        { id: 'h_def_2', name: 'TripNest Comfort Inn', image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800', price: 4500, rating: 4.3, amenities: ['Central Location', 'WiFi', 'Laundry'] },
    ]
};

export const getTransportOptions = (mode, city = '') => {
    const all = mockTransport[mode] || [];
    if (!city) return all;
    // Filter by city if possible, otherwise return all
    const filtered = all.filter(item => item.cities?.some(c => c.toLowerCase().includes(city.toLowerCase())));
    return filtered.length > 0 ? filtered : all;
};

export const getHotelOptions = (city = '') => {
    if (!city) return mockHotels['default'];

    // Find matching city
    const matchedCity = Object.keys(mockHotels).find(key => city.toLowerCase().includes(key.toLowerCase()));
    return mockHotels[matchedCity] || mockHotels['default'];
};

export const getCoordinates = async (cityName) => {
    const cities = {
        'Bengaluru': [12.9716, 77.5946],
        'Mysuru': [12.2958, 76.6394],
        'Hampi': [15.3350, 76.4600],
        'Mumbai': [19.0760, 72.8777],
        'Delhi': [28.6139, 77.2090],
        'Goa': [15.2993, 74.1240],
        'Pune': [18.5204, 73.8567],
        'Chennai': [13.0827, 80.2707],
        'Hyderabad': [17.3850, 78.4867],
        'Hubballi': [15.3647, 75.1240],
        'Belgaum': [15.8497, 74.4977]
    };

    // Exact match search
    const exactMatch = Object.keys(cities).find(key => key.toLowerCase() === cityName.toLowerCase());
    if (exactMatch) return cities[exactMatch];

    // Substring match search
    const subMatch = Object.keys(cities).find(key => cityName.toLowerCase().includes(key.toLowerCase()));
    if (subMatch) return cities[subMatch];

    return [12.9716, 77.5946]; // Default to Bengaluru
};
