// Comprehensive destination data for TripNest

export const karnatakaDestinations = [
    {
        name: 'Bengaluru - Silicon Valley of India',
        description: 'A vibrant metropolis blending modern technology with historical gardens. Known for its pleasant weather and tech hubs.',
        location: { country: 'India', state: 'Karnataka', city: 'Bengaluru', coordinates: { lat: 12.9716, lng: 77.5946 } },
        images: [
            'https://images.unsplash.com/photo-1596422846543-b5c64881f539?w=800',
            'https://images.unsplash.com/photo-1551025010-60724810058b?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'September to February',
        transportModes: [
            { mode: 'flight', details: 'Kempegowda Int\'l Airport', link: 'https://www.google.com/travel/flights' },
            { mode: 'train', details: 'KSR Bengaluru Station', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'KSRTC / BMTC', link: 'https://www.ksrtc.in' }
        ],
        hotels: [
            { name: 'The Leela Palace', rating: 5, price: 15000, currency: 'INR', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800' },
            { name: 'ITC Gardenia', rating: 5, price: 12000, currency: 'INR', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' }
        ],
        discounts: [{ code: 'BLR20', percentage: 20, description: '20% off for first-time visitors' }],
        temples: ['ISKCON Temple', 'Bull Temple'],
        nearbyPlaces: [
            { name: 'Nandi Hills', distance: '60 km', category: 'Nature' },
            { name: 'Bannerghatta National Park', distance: '22 km', category: 'Wildlife' },
            { name: 'Shivanasamudra Falls', distance: '135 km', category: 'Nature' }
        ],
        highlights: ['Lalbagh Botanical Garden', 'Cubbon Park', 'Bangalore Palace', 'Bannerghatta National Park']
    },
    {
        name: 'Mysuru - Heritage & Culture',
        description: 'Famous for the majestic Mysore Palace and the grand Dasara festival.',
        location: { country: 'India', state: 'Karnataka', city: 'Mysuru', coordinates: { lat: 12.2958, lng: 76.6394 } },
        images: [
            'https://images.unsplash.com/photo-1596422846543-b5c64881f539?w=800',
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'train', details: 'Mysuru Junction', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'KSRTC Airavat', link: 'https://www.ksrtc.in' }
        ],
        hotels: [
            { name: 'Radisson Blu Plaza', rating: 5, price: 8000, currency: 'INR', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800' },
            { name: 'Lalitha Mahal Palace', rating: 5, price: 12000, currency: 'INR', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' }
        ],
        temples: ['Chamundeshwari Temple'],
        nearbyPlaces: [
            { name: 'Srirangapatna', distance: '15 km', category: 'Historical' },
            { name: 'Brindavan Gardens', distance: '21 km', category: 'Nature' },
            { name: 'Bandipur National Park', distance: '80 km', category: 'Wildlife' }
        ],
        highlights: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens', 'St. Philomena’s Church']
    },
    {
        name: 'Vijayapura (Bijapur) - The Medieval Marvel',
        description: 'Home to the magnificent Gol Gumbaz, the mausoleum with the second largest dome in the world.',
        location: { country: 'India', state: 'Karnataka', city: 'Vijayapura', coordinates: { lat: 16.8271, lng: 75.7272 } },
        images: [
            'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=800',
            'https://images.unsplash.com/photo-1623153673752-6e06915031b2?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'train', details: 'Vijayapura Railway Station', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Hotel Pearl', rating: 3, price: 3500, currency: 'INR', image: 'https://images.unsplash.com/photo-1571896349842-6e53ce41be03?w=800' }],
        highlights: ['Gol Gumbaz', 'Ibrahim Rauza', 'Bara Kaman']
    },
    {
        name: 'Hampi - The Ruins of Vijayanagara',
        description: 'A UNESCO World Heritage site with stunning ruins of a once-mighty empire.',
        location: { country: 'India', state: 'Karnataka', city: 'Hampi', coordinates: { lat: 15.3350, lng: 76.4600 } },
        images: [
            'https://images.unsplash.com/photo-1580192986445-66795f72cb9a?w=800',
            'https://images.unsplash.com/photo-1599676615042-7f8ecfc243d8?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'November to February',
        transportModes: [{ mode: 'train', details: 'Hosapete Junction', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Evolve Back Hampi', rating: 5, price: 25000, currency: 'INR', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800' }],
        temples: ['Virupaksha Temple', 'Vittala Temple'],
        nearbyPlaces: [
            { name: 'Anjanadri Hill', distance: '5 km', category: 'Spiritual' },
            { name: 'Tungabhadra Dam', distance: '12 km', category: 'Nature' },
            { name: 'Daroji Bear Sanctuary', distance: '15 km', category: 'Wildlife' }
        ],
        highlights: ['Stone Chariot', 'Matanga Hill']
    },
    {
        name: 'Badami, Pattadakal & Aihole - Cradle of Architecture',
        description: 'Ancient cave temples and architectural marvels from the Chalukya dynasty.',
        location: { country: 'India', state: 'Karnataka', city: 'Badami', coordinates: { lat: 15.9189, lng: 75.6766 } },
        images: [
            'https://images.unsplash.com/photo-1623153673752-6e06915031b2?w=800',
            'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Heritage Resort Badami', rating: 4, price: 5000, currency: 'INR' }],
        highlights: ['Badami Cave Temples', 'Agastya Lake', 'UNESCO site at Pattadakal', 'Durga Temple Aihole']
    },
    {
        name: 'Coorg (Kodagu) - Scotland of India',
        description: 'Mist-covered hills, coffee plantations, and stunning waterfalls.',
        location: { country: 'India', state: 'Karnataka', city: 'Madikeri', coordinates: { lat: 12.4244, lng: 75.7389 } },
        images: [
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800',
            'https://images.unsplash.com/photo-1595123550441-d377e017de6a?w=800'
        ],
        category: 'hill station',
        bestTimeVisit: 'All year round (Monsoon for waterfalls)',
        hotels: [{ name: 'The Tamara Coorg', rating: 5, price: 18000, currency: 'INR' }],
        highlights: ['Abbey Falls', 'Raja’s Seat', 'Talacauvery', 'Iruppu Falls']
    },
    {
        name: 'Mangaluru & Udupi - Coastal Karnataka',
        description: 'Pristine beaches, ancient temples, and delicious seafood.',
        location: { country: 'India', state: 'Karnataka', city: 'Mangaluru', coordinates: { lat: 12.9141, lng: 74.8560 } },
        images: [
            'https://images.unsplash.com/photo-1516815231560-8f41ec52c533?w=800',
            'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=800'
        ],
        category: 'beach',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Vivanta Mangalore', rating: 5, price: 7000, currency: 'INR' }],
        temples: ['Udupi Krishna Temple', 'Kukke Subramanya', 'Dharmasthala'],
        highlights: ['Panambur Beach', 'St. Mary’s Island', 'Malpe Beach']
    },
    {
        name: 'Shivamogga - Gateway to Malnad',
        description: 'Home to the famous Jog Falls and lush green Western Ghats.',
        location: { country: 'India', state: 'Karnataka', city: 'Shivamogga', coordinates: { lat: 13.9299, lng: 75.5681 } },
        images: [
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'waterfall',
        bestTimeVisit: 'July to September for Jog Falls',
        hotels: [{ name: 'Royal Orchid Central', rating: 4, price: 4500, currency: 'INR' }],
        highlights: ['Jog Falls', 'Sakrebailu Elephant Camp', 'Kodachadri Hills']
    },
    {
        name: 'Hubballi-Dharwad - Twin Cities',
        description: 'Commercial hubs of North Karnataka with beautiful lakes and hills.',
        location: { country: 'India', state: 'Karnataka', city: 'Hubballi', coordinates: { lat: 15.3647, lng: 75.1240 } },
        images: ['https://images.unsplash.com/photo-1596422846543-b5c64881f539?w=800'],
        category: 'city',
        bestTimeVisit: 'October to February',
        hotels: [{ name: 'Denissons Control', rating: 5, price: 6000, currency: 'INR' }],
        highlights: ['Unkal Lake', 'Nrupatunga Betta', 'Sathodi Falls', 'Magod Falls']
    }
];

export const maharashtraDestinations = [
    {
        name: 'Mumbai - The City of Dreams',
        description: 'India\'s financial capital, Bollywood hub, and a melting pot of cultures.',
        location: { country: 'India', state: 'Maharashtra', city: 'Mumbai', coordinates: { lat: 19.0760, lng: 72.8777 } },
        images: ['https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800', 'https://images.unsplash.com/photo-1566552881560-6be032a20ca2?w=800'],
        category: 'city',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Taj Mahal Palace', rating: 5, price: 25000, currency: 'INR' }],
        highlights: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Juhu Beach']
    },
    {
        name: 'Pune - Cultural Capital',
        description: 'Known for its educational institutions and historical Shaniwar Wada.',
        location: { country: 'India', state: 'Maharashtra', city: 'Pune', coordinates: { lat: 18.5204, lng: 73.8567 } },
        images: ['https://images.unsplash.com/photo-1584813539806-2538b8d918c6?w=800'],
        category: 'city',
        hotels: [{ name: 'JW Marriott Pune', rating: 5, price: 12000, currency: 'INR' }],
        highlights: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort']
    }
];

export const keralaDestinations = [
    {
        name: 'Munnar - Tea Paradise',
        description: 'Lush green tea gardens and rolling hills of the Western Ghats.',
        location: { country: 'India', state: 'Kerala', city: 'Munnar', coordinates: { lat: 10.0889, lng: 77.0595 } },
        images: ['https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'],
        category: 'hill station',
        hotels: [{ name: 'Blanket Hotel', rating: 5, price: 10000, currency: 'INR' }],
        highlights: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam']
    },
    {
        name: 'Alappuzha - Backwaters',
        description: 'The Venice of the East, famous for its houseboat cruises.',
        location: { country: 'India', state: 'Kerala', city: 'Alappuzha', coordinates: { lat: 9.4981, lng: 76.3329 } },
        images: ['https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800'],
        category: 'nature',
        hotels: [{ name: 'Ramada by Wyndham', rating: 5, price: 9000, currency: 'INR' }],
        highlights: ['Houseboat Stay', 'Alappuzha Beach', 'Vembanad Lake']
    }
];

export const tamilnaduDestinations = [
    {
        name: 'Chennai - Cultural Gateway',
        description: 'Capital city known for Marina Beach and Dravidian architecture.',
        location: { country: 'India', state: 'Tamil Nadu', city: 'Chennai', coordinates: { lat: 13.0827, lng: 80.2707 } },
        images: ['https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800'],
        category: 'city',
        hotels: [{ name: 'Taj Coromandel', rating: 5, price: 14000, currency: 'INR' }],
        highlights: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George']
    },
    {
        name: 'Madurai - Temple City',
        description: 'Historic city centered around the Meenakshi Amman Temple.',
        location: { country: 'India', state: 'Tamil Nadu', city: 'Madurai', coordinates: { lat: 9.9252, lng: 78.1198 } },
        images: ['https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800'],
        category: 'pilgrimage',
        hotels: [{ name: 'Heritage Madurai', rating: 5, price: 8000, currency: 'INR' }],
        highlights: ['Meenakshi Temple', 'Thirumalai Palace']
    }
];

export const goaDestinations = [
    {
        name: 'Goa - Beach Paradise',
        description: 'Sun, sand, and Portuguese heritage.',
        location: { country: 'India', state: 'Goa', city: 'Panaji', coordinates: { lat: 15.2993, lng: 74.1240 } },
        images: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800'],
        category: 'beach',
        hotels: [{ name: 'Taj Exotica', rating: 5, price: 20000, currency: 'INR' }],
        highlights: ['Calangute Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls']
    }
];

export const rajasthanDestinations = [
    {
        name: 'Jaipur - The Pink City',
        description: 'Royal palaces, majestic forts, and vibrant markets.',
        location: { country: 'India', state: 'Rajasthan', city: 'Jaipur', coordinates: { lat: 26.9124, lng: 75.7873 } },
        images: ['https://images.unsplash.com/photo-1599661046289-e31897c93e14?w=800'],
        category: 'heritage',
        hotels: [{ name: 'Rambagh Palace', rating: 5, price: 45000, currency: 'INR' }],
        highlights: ['Hawa Mahal', 'Amber Fort', 'City Palace']
    },
    {
        name: 'Udaipur - City of Lakes',
        description: 'Romantic city set amidst the Aravalli Hills and beautiful lakes.',
        location: { country: 'India', state: 'Rajasthan', city: 'Udaipur', coordinates: { lat: 24.5854, lng: 73.7125 } },
        images: ['https://images.unsplash.com/photo-1585149940316-2fd74465d66d?w=800'],
        category: 'heritage',
        hotels: [{ name: 'Taj Lake Palace', rating: 5, price: 55000, currency: 'INR' }],
        highlights: ['Lake Pichola', 'City Palace', 'Jag Mandir']
    }
];

export const uttarPradeshDestinations = [
    {
        name: 'Agra - City of Taj',
        description: 'Home to the iconic Taj Mahal, a symbol of eternal love.',
        location: { country: 'India', state: 'Uttar Pradesh', city: 'Agra', coordinates: { lat: 27.1767, lng: 78.0081 } },
        images: ['https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'],
        category: 'heritage',
        hotels: [{ name: 'Oberoi Amarvilas', rating: 5, price: 40000, currency: 'INR' }],
        highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri']
    },
    {
        name: 'Varanasi - Spiritual Capital',
        description: 'One of the oldest living cities in the world, sacred to Hindus.',
        location: { country: 'India', state: 'Uttar Pradesh', city: 'Varanasi', coordinates: { lat: 25.3176, lng: 83.0062 } },
        images: ['https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800'],
        category: 'pilgrimage',
        hotels: [{ name: 'Brijrama Palace', rating: 5, price: 18000, currency: 'INR' }],
        highlights: ['Kashi Vishwanath Temple', 'Ganga Ghats', 'Sarnath']
    }
];

export const westBengalDestinations = [
    {
        name: 'Kolkata - City of Joy',
        description: 'Capital of West Bengal, known for its colonial architecture and culture.',
        location: { country: 'India', state: 'West Bengal', city: 'Kolkata', coordinates: { lat: 22.5726, lng: 88.3639 } },
        images: ['https://images.unsplash.com/photo-1558431382-27e303142255?w=800'],
        category: 'city',
        hotels: [{ name: 'The Oberoi Grand', rating: 5, price: 15000, currency: 'INR' }],
        highlights: ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Temple']
    }
];

export const internationalDestinations = [
    {
        name: 'Dubai - City of Gold',
        description: 'Modern metropolis known for luxury, skyscrapers like Burj Khalifa, and desert safaris.',
        location: { country: 'UAE', state: 'Dubai', city: 'Dubai', coordinates: { lat: 25.2048, lng: 55.2708 } },
        images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'],
        category: 'city',
        hotels: [{ name: 'Burj Al Arab', rating: 7, price: 1500, currency: 'USD' }],
        highlights: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Desert Safari']
    },
    {
        name: 'Rome - The Eternal City',
        description: 'History comes alive in Rome, from the Colosseum to the Vatican City.',
        location: { country: 'Italy', state: 'Lazio', city: 'Rome', coordinates: { lat: 41.9028, lng: 12.4964 } },
        images: ['https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800'],
        category: 'heritage',
        hotels: [{ name: 'Hotel de Russie', rating: 5, price: 800, currency: 'EUR' }],
        highlights: ['Colosseum', 'Vatican Museums', 'Trevi Fountain']
    },
    {
        name: 'New York - The Big Apple',
        description: 'The world\'s most iconic skyline, Broadway, and Central Park.',
        location: { country: 'USA', state: 'New York', city: 'New York', coordinates: { lat: 40.7128, lng: -74.0060 } },
        images: ['https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800'],
        category: 'city',
        hotels: [{ name: 'The Plaza', rating: 5, price: 900, currency: 'USD' }],
        highlights: ['Statue of Liberty', 'Times Square', 'Central Park']
    },
    {
        name: 'Bangkok - Vibrant Soul',
        description: 'Electric atmosphere, street food, and ornate temples.',
        location: { country: 'Thailand', state: 'Bangkok', city: 'Bangkok', coordinates: { lat: 13.7563, lng: 100.5018 } },
        images: ['https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800'],
        category: 'city',
        hotels: [{ name: 'Mandarin Oriental', rating: 5, price: 500, currency: 'USD' }],
        highlights: ['Grand Palace', 'Wat Arun', 'Floating Markets']
    },
    {
        name: 'Switzerland - Alpine Beauty',
        description: 'Snow-capped peaks, crystal clear lakes, and charming villages.',
        location: { country: 'Switzerland', state: 'Bern', city: 'Interlaken', coordinates: { lat: 46.6863, lng: 7.8632 } },
        images: ['https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800'],
        category: 'mountain',
        hotels: [{ name: 'Victoria Jungfrau', rating: 5, price: 700, currency: 'CHF' }],
        highlights: ['Jungfraujoch', 'Lake Thun', 'Harder Kulm']
    }
];

export const allDestinations = [
    ...karnatakaDestinations,
    ...maharashtraDestinations,
    ...keralaDestinations,
    ...tamilnaduDestinations,
    ...goaDestinations,
    ...rajasthanDestinations,
    ...uttarPradeshDestinations,
    ...westBengalDestinations,
    ...internationalDestinations
];
