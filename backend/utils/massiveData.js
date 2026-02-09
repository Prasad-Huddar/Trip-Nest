// Comprehensive destination data for TripNest

export const karnatakaDestinations = [
    {
        name: 'Bengaluru - Silicon Valley of India',
        description: 'A vibrant metropolis blending modern technology with historical gardens. Known for its pleasant weather and tech hubs.',
        location: { country: 'India', state: 'Karnataka', city: 'Bengaluru', coordinates: { lat: 12.9716, lng: 77.5946 } },
        images: [
            '/images/destinations/banglore.jpg',
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
            { 
                name: 'The Leela Palace', 
                rating: 5, 
                price: 15000, 
                currency: 'INR', 
                image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
                amenities: ['Luxury Accommodation', 'Spa', 'Multiple Restaurants', 'WiFi', 'Swimming Pool']
            },
            { 
                name: 'ITC Gardenia', 
                rating: 5, 
                price: 12000, 
                currency: 'INR', 
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                amenities: ['Business Center', 'Spa', 'Restaurant', 'WiFi', 'Fitness Center']
            },
            { 
                name: 'Holiday Inn Bengaluru Racecourse', 
                rating: 4, 
                price: 8000, 
                currency: 'INR', 
                image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
                amenities: ['Restaurant', 'WiFi', 'Parking', '24/7 Front Desk']
            }
        ],
        discounts: [{ code: 'BLR20', percentage: 20, description: '20% off for first-time visitors' }],
        temples: ['ISKCON Temple', 'Bull Temple'],
        nearbyPlaces: [
            { name: 'Nandi Hills', distance: '60 km', category: 'Nature' },
            { name: 'Bannerghatta National Park', distance: '22 km', category: 'Wildlife' },
            { name: 'Shivanasamudra Falls', distance: '135 km', category: 'Nature' },
            { name: 'Mysore', distance: '150 km', category: 'Heritage' }
        ],
        highlights: ['Lalbagh Botanical Garden', 'Cubbon Park', 'Bangalore Palace', 'Bannerghatta National Park'],
        details: 'Major IT hub of India with pleasant climate and rich cultural heritage. Known for its gardens, palaces, and modern infrastructure.',
        duration: '3-5 days',
        maxGroupSize: 20,
        difficulty: 'easy'
    },
    {
        name: 'ISKCON Temple - Sri Krishna Chaitanya Mandir',
        description: 'Sacred ISKCON temple in Bangalore, dedicated to Lord Krishna. A major spiritual center attracting devotees from around the world. Known for its beautiful architecture, peaceful atmosphere, and spiritual discourses.',
        location: { country: 'India', state: 'Karnataka', city: 'Bangalore', coordinates: { lat: 12.9716, lng: 77.5946 } },
        images: [
            '/images/destinations/iskon temple banglore.jpg',
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'bus', details: 'BMTC to Rajajinagar', link: 'https://www.ksrtc.in' },
            { mode: 'car', details: 'Auto-rickshaw/taxi to Rajajinagar', link: 'https://www.uber.com' }
        ],
        hotels: [
            { name: 'The Leela Palace', rating: 5, price: 15000, currency: 'INR' },
            { name: 'Radisson Blu', rating: 5, price: 12000, currency: 'INR' }
        ],
        temples: ['ISKCON Temple', 'Deities Worship'],
        nearbyPlaces: [
            { name: 'Rajajinagar', distance: '5 km', category: 'City' },
            { name: 'ISKCON Temple', distance: '5 km', category: 'Pilgrimage' },
            { name: 'Cubbon Park', distance: '15 km', category: 'Nature' },
            { name: 'Lalbagh Botanical Garden', distance: '12 km', category: 'Nature' },
            { name: 'Bangalore Palace', distance: '10 km', category: 'Heritage' },
            { name: 'Vidhana Soudha', distance: '12 km', category: 'Heritage' },
            { name: 'Ulsoor Lake', distance: '8 km', category: 'Nature' },
            { name: 'Commercial Street', distance: '12 km', category: 'Shopping' }
        ],
        highlights: ['Sri Krishna Chaitanya Mandir', 'Spiritual Discourses', 'Peaceful Atmosphere', 'Beautiful Architecture', 'Deities Worship', 'Sunday Feast', 'Devotional Programs', 'Vaishnavite Traditions']
    },
    {
        name: 'Mysuru - Heritage & Culture',
        description: 'Famous for the majestic Mysore Palace and the grand Dasara festival.',
        location: { country: 'India', state: 'Karnataka', city: 'Mysuru', coordinates: { lat: 12.2958, lng: 76.6394 } },
        images: [
            '/images/destinations/mysuru palace.jpg',
            '/images/destinations/mysore zoo.jpg'
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
            '/images/destinations/vijaypur.jpg',
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
            '/images/destinations/Hampi.jpg',
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
            '/images/destinations/badami-1247.jpg',
            'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'train', details: 'Badami Railway Station', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Mali Vilas', rating: 4, price: 4500, currency: 'INR' }],
        highlights: ['Badami Cave Temples', 'Pattadakal Temples', 'Aihole Temples']
    },
    {
        name: 'Coorg - The Scotland of India',
        description: 'Hill station known for its coffee plantations and misty mountains.',
        location: { country: 'India', state: 'Karnataka', city: 'Coorg', coordinates: { lat: 12.3375, lng: 75.7873 } },
        images: [
            '/images/destinations/coorg.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'hill station',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'bus', details: 'KSRTC', link: 'https://www.ksrtc.in' }],
        hotels: [{ name: 'Tamara Coorg', rating: 5, price: 18000, currency: 'INR' }],
        highlights: ['Abbey Falls', 'Raja Seat', 'Coffee Plantations', 'Dubare Elephant Camp']
    },
    {
        name: 'Mangalore - Coastal Gem',
        description: 'Coastal city known for its beaches, temples, and seafood.',
        location: { country: 'India', state: 'Karnataka', city: 'Mangalore', coordinates: { lat: 12.9141, lng: 74.8560 } },
        images: [
            '/images/destinations/malpeBeach.jpg',
            'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800'
        ],
        category: 'beach',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'flight', details: 'Mangalore Int\'l Airport', link: 'https://www.google.com/travel/flights' },
            { mode: 'train', details: 'Mangalore Central', link: 'https://www.irctc.co.in' }
        ],
        hotels: [{ name: 'Goldfinch Hotel', rating: 4, price: 6000, currency: 'INR' }],
        temples: ['Kudroli Gokarnath Temple', 'Kateel Durga Temple'],
        highlights: ['Malpe Beach', 'St. Aloysius Chapel', 'Tannirbhavi Beach']
    },
    {
        name: 'Shimoga - Gateway to Malnad',
        description: 'Known for its spectacular waterfalls and the famous Jog Falls.',
        location: { country: 'India', state: 'Karnataka', city: 'Shimoga', coordinates: { lat: 13.9288, lng: 75.5712 } },
        images: [
            '/images/destinations/Sathodi_Falls_.jpg',
            '/images/destinations/magod-falls.jpg'
        ],
        category: 'waterfall',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'train', details: 'Shimoga Town', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'The Pride Hotel', rating: 4, price: 5000, currency: 'INR' }],
        highlights: ['Jog Falls', 'Shivanasamudra Falls', 'Kemmannagundi', 'Sathodi Falls', 'Magod Falls']
    },
    {
        name: 'Dandeli - Adventure Paradise',
        description: 'Adventure destination known for river rafting and wildlife.',
        location: { country: 'India', state: 'Karnataka', city: 'Dandeli', coordinates: { lat: 15.4287, lng: 74.3185 } },
        images: [
            '/images/destinations/dandeli.jpg',
            '/images/destinations/magod-falls.jpg'
        ],
        category: 'adventure',
        bestTimeVisit: 'October to May',
        transportModes: [{ mode: 'bus', details: 'KSRTC', link: 'https://www.ksrtc.in' }],
        hotels: [{ name: 'Dandeli River Resort', rating: 4, price: 4000, currency: 'INR' }],
        highlights: ['River Rafting', 'Dandeli Wildlife Sanctuary', 'Syntheri Rocks']
    },
    {
        name: 'Hubli - Commercial Hub',
        description: 'Major commercial center and gateway to North Karnataka.',
        location: { country: 'India', state: 'Karnataka', city: 'Hubli', coordinates: { lat: 15.3647, lng: 75.1240 } },
        images: [
            '/images/destinations/hubli.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'train', details: 'Hubli Junction', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Fortune Inn Sree Kanya', rating: 4, price: 4500, currency: 'INR' }],
        nearbyPlaces: [
            { name: 'Sathodi Falls', distance: '45 km', category: 'Waterfall' },
            { name: 'Devakar Falls', distance: '75 km', category: 'Waterfall' },
            { name: 'Magod Falls', distance: '85 km', category: 'Waterfall' },
            { name: 'Vibhooti Falls', distance: '90 km', category: 'Waterfall' },
            { name: 'Dandeli Wildlife Sanctuary', distance: '120 km', category: 'Wildlife' },
            { name: 'Gokarna Beach', distance: '150 km', category: 'Beach' },
            { name: 'Belgaum', distance: '180 km', category: 'City' },
            { name: 'Badami', distance: '200 km', category: 'Heritage' }
        ],
        highlights: ['Unkal Lake', 'Nrupatunga Betta', 'Sathodi Falls', 'Magod Falls'],
        tags: ['Hubballi', 'Hubli', 'North Karnataka', 'Commercial Hub', 'Waterfalls', 'Sathodi', 'Devakar', 'Magod']
    },
    {
        name: 'Swapnil Point - Scenic Waterfall',
        description: 'Beautiful waterfall destination near Belgaum, known for its natural beauty and scenic surroundings. A perfect spot for nature lovers and photographers.',
        location: { country: 'India', state: 'Karnataka', city: 'Belgaum', coordinates: { lat: 15.8588, lng: 74.5000 } },
        images: [
            '/images/destinations/swapnil point.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'nature',
        bestTimeVisit: 'June to September',
        transportModes: [
            { mode: 'bus', details: 'KSRTC to Belgaum', link: 'https://www.ksrtc.in' },
            { mode: 'car', details: 'Private vehicle from Belgaum', link: '' }
        ],
        hotels: [
            { name: 'Hotel Kamal Basati', rating: 3, price: 2500, currency: 'INR' },
            { name: 'Kamat Hotels Belgaum', rating: 4, price: 4000, currency: 'INR' }
        ],
        nearbyPlaces: [
            { name: 'Belgaum', distance: '25 km', category: 'City' },
            { name: 'Kamal Basti', distance: '30 km', category: 'Pilgrimage' },
            { name: 'Belgaum Fort', distance: '35 km', category: 'Heritage' },
            { name: 'Kapileshwar Temple', distance: '28 km', category: 'Pilgrimage' },
            { name: 'Siddheshwar Temple', distance: '32 km', category: 'Pilgrimage' },
            { name: 'Hubli-Dharwad', distance: '180 km', category: 'City' },
            { name: 'Gokarna Beach', distance: '120 km', category: 'Beach' },
            { name: 'Dandeli Wildlife Sanctuary', distance: '80 km', category: 'Wildlife' }
        ],
        highlights: ['Natural Waterfall', 'Scenic Beauty', 'Photography Spot', 'Peaceful Environment', 'Nature Walks', 'Fresh Air', 'Bird Watching']
    },
    {
        name: 'Kamal Basti - Ancient Jain Temple',
        description: 'Historic Jain temple complex in Belgaum, known for its beautiful architecture and religious significance. Also called Kamala Basti, this is one of the most important Jain pilgrimage sites in North Karnataka.',
        location: { country: 'India', state: 'Karnataka', city: 'Belgaum', coordinates: { lat: 15.8588, lng: 74.5000 } },
        images: [
            '/images/destinations/Kamal_Basti_view,_Belgaum.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'train', details: 'Belgaum Railway Station', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'KSRTC Belgaum Depot', link: 'https://www.ksrtc.in' }
        ],
        hotels: [
            { name: 'Kamat Hotels Belgaum', rating: 4, price: 4000, currency: 'INR' },
            { name: 'Hotel Kamal Basati', rating: 3, price: 2500, currency: 'INR' }
        ],
        temples: ['Kamal Basti Temple', 'Siddheshwar Temple', 'Kapileshwar Temple'],
        nearbyPlaces: [
            { name: 'Belgaum Fort', distance: '5 km', category: 'Heritage' },
            { name: 'Kapileshwar Temple', distance: '3 km', category: 'Pilgrimage' },
            { name: 'Siddheshwar Temple', distance: '4 km', category: 'Pilgrimage' },
            { name: 'Military Mahadev Temple', distance: '6 km', category: 'Pilgrimage' },
            { name: 'Hubli-Dharwad', distance: '180 km', category: 'City' },
            { name: 'Gokarna Beach', distance: '120 km', category: 'Beach' },
            { name: 'Dandeli Wildlife Sanctuary', distance: '80 km', category: 'Wildlife' },
            { name: 'Panhala Fort', distance: '60 km', category: 'Heritage' }
        ],
        highlights: ['Ancient Jain Architecture', 'Intricate Carvings', 'Religious Significance', 'Historical Complex', 'Peaceful Atmosphere', 'Belgaum Fort', 'Kapileshwar Temple']
    },
    {
        name: 'Gokarna - Temple Town Beach',
        description: 'Pilgrimage town known for Mahabaleshwar Temple and pristine beaches.',
        location: { country: 'India', state: 'Karnataka', city: 'Gokarna', coordinates: { lat: 14.5479, lng: 74.3188 } },
        images: [
            '/images/destinations/gokarna.jpg',
            'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800'
        ],
        category: 'beach',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'bus', details: 'KSRTC', link: 'https://www.ksrtc.in' }],
        hotels: [{ name: 'Om Sai Ram Guest House', rating: 3, price: 2500, currency: 'INR' }],
        temples: ['Mahabaleshwar Temple', 'Kotitirtha Temple'],
        highlights: ['Om Beach', 'Kudle Beach', 'Half Moon Beach', 'Mahabaleshwar Temple']
    },
    {
        name: 'Murudeshwar - Coastal Pilgrimage',
        description: 'Famous for the towering Shiva statue and ancient temples on the Konkan coast.',
        location: { country: 'India', state: 'Karnataka', city: 'Murudeshwar', coordinates: { lat: 14.0930, lng: 74.5084 } },
        images: [
            '/images/destinations/murudheshwar.jpg',
            'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'train', details: 'Murudeshwar Railway Station', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Malpe Sea Front Cottages', rating: 4, price: 4000, currency: 'INR' }],
        temples: ['Murudeshwar Temple', 'Rajarajeshwari Temple'],
        highlights: ['Murudeshwar Shiva Statue', 'Temple Complex', 'Beach', 'Nagara Fort']
    },
    {
        name: 'Mullayanagiri - Highest Peak in Karnataka',
        description: 'Highest peak in Karnataka offering panoramic views of the Western Ghats.',
        location: { country: 'India', state: 'Karnataka', city: 'Chikmagalur', coordinates: { lat: 13.3524, lng: 75.5214 } },
        images: [
            '/images/destinations/mullayanagiri.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'mountain',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'bus', details: 'KSRTC to Chikmagalur', link: 'https://www.ksrtc.in' }],
        hotels: [{ name: 'Mullayanagiri Homestay', rating: 4, price: 3000, currency: 'INR' }],
        highlights: ['Mullayanagiri Peak', 'Baba Budan Giri', 'Hebbe Falls']
    },
    {
        name: 'Mantralaya - Spiritual Center',
        description: 'Sacred place associated with Sri Raghavendra Swami and Vaishnavite traditions.',
        location: { country: 'India', state: 'Karnataka', city: 'Mantralaya', coordinates: { lat: 14.6970, lng: 76.8780 } },
        images: [
            '/images/destinations/mantralaya.jpg',
            'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'bus', details: 'APSRTC to Mantralaya', link: 'https://www.apstransco.in' }],
        hotels: [{ name: 'Guest House Mantralaya', rating: 3, price: 2000, currency: 'INR' }],
        temples: ['Sri Raghavendra Swamy Mutt'],
        highlights: ['Mantralaya Mutt', 'Raghavendra Swamy Samadhi', 'Devotee Accommodation']
    },
    {
        name: 'Magod Falls - Cascade Wonder',
        description: 'Beautiful tiered waterfall located near Mundgod in Uttara Kannada district.',
        location: { country: 'India', state: 'Karnataka', city: 'Mundgod', coordinates: { lat: 14.9050, lng: 74.8180 } },
        images: [
            '/images/destinations/magod-falls.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'waterfall',
        bestTimeVisit: 'June to October',
        transportModes: [{ mode: 'bus', details: 'KSRTC to Mundgod', link: 'https://www.ksrtc.in' }],
        hotels: [{ name: 'Nearby Homestays', rating: 4, price: 2500, currency: 'INR' }],
        highlights: ['Tiered Waterfall', 'Scenic Surroundings', 'Trekking Opportunities'],
        tags: ['Magod Falls', 'Mundgod', 'Hubli', 'Hubballi', 'Waterfalls', 'Nature', 'Trekking']
    },
    {
        name: 'Sathodi Falls - Hidden Beauty',
        description: 'Spectacular waterfall near Sirsi in the Western Ghats.',
        location: { country: 'India', state: 'Karnataka', city: 'Sirsi', coordinates: { lat: 14.7167, lng: 74.5500 } },
        images: [
            '/images/destinations/Sathodi_Falls_.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'waterfall',
        bestTimeVisit: 'June to October',
        transportModes: [{ mode: 'bus', details: 'KSRTC to Sirsi', link: 'https://www.ksrtc.in' }],
        hotels: [{ name: 'Sirsi Tourist Home', rating: 3, price: 2000, currency: 'INR' }],
        highlights: ['Sathodi Falls', 'Nearby Devastana Falls', 'Western Ghats'],
        tags: ['Sathodi Falls', 'Sirsi', 'Hubli', 'Hubballi', 'Waterfalls', 'Western Ghats', 'Nature']
    },
    {
        name: 'Devakar Falls - Nature\'s Delight',
        description: 'Beautiful waterfall located near Hubballi in Karnataka, also known as Kannur Falls. Surrounded by lush greenery and dense forests, it offers a perfect getaway for nature enthusiasts and adventure seekers.',
        location: { country: 'India', state: 'Karnataka', city: 'Hubballi', coordinates: { lat: 15.3647, lng: 75.1240 } },
        images: [
            '/images/destinations/devakar_falls.png',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'waterfall',
        bestTimeVisit: 'June to October',
        transportModes: [
            { mode: 'train', details: 'Hubli Junction', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'KSRTC to Hubballi', link: 'https://www.ksrtc.in' }
        ],
        hotels: [
            { 
                name: 'Fortune Inn Sree Kanya', 
                rating: 4, 
                price: 4500, 
                currency: 'INR',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                amenities: ['Heritage Building', 'Restaurant', 'WiFi', 'Parking', 'Tourist Information']
            },
            { 
                name: 'Hotel Residency', 
                rating: 3, 
                price: 3000, 
                currency: 'INR',
                image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
                amenities: ['Comfortable Rooms', 'Local Cuisine', '24/7 Service', 'Clean Facilities']
            }
        ],
        highlights: ['Scenic Waterfall', 'Natural Swimming Pool', 'Trekking Trails', 'Bird Watching', 'Photography Spot', 'Peaceful Environment'],
        nearbyPlaces: [
            { name: 'Hubballi', distance: '75 km', category: 'City' },
            { name: 'Sathodi Falls', distance: '45 km', category: 'Waterfall' },
            { name: 'Magod Falls', distance: '85 km', category: 'Waterfall' },
            { name: 'Vibhooti Falls', distance: '90 km', category: 'Waterfall' },
            { name: 'Dandeli Wildlife Sanctuary', distance: '120 km', category: 'Wildlife' },
            { name: 'Gokarna Beach', distance: '150 km', category: 'Beach' },
            { name: 'Belgaum', distance: '180 km', category: 'City' },
            { name: 'Badami', distance: '200 km', category: 'Heritage' }
        ],
        details: 'Devakar Falls, also known as Kannur Falls, is a hidden gem near Hubballi offering pristine natural beauty with cascading waters flowing through lush green forests. Perfect for trekking, picnics, and nature photography. The best time to visit is during monsoon when the falls are in full glory.',
        duration: '2-3 days',
        maxGroupSize: 10,
        difficulty: 'moderate',
        tags: ['Devakar Falls', 'Kannur Falls', 'Hubli', 'Hubballi', 'Waterfalls', 'Nature', 'Trekking', 'Yellapur']
    }
];

export const andamanDestinations = [
    {
        name: 'Andaman and Nicobar Islands - Paradise Islands',
        description: 'Tropical islands known for pristine beaches, coral reefs, and water sports.',
        location: { country: 'India', state: 'Andaman and Nicobar', city: 'Port Blair', coordinates: { lat: 11.6234, lng: 92.7265 } },
        images: [
            '/images/destinations/andaman and nicobar.jpg',
            'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
        ],
        category: 'island',
        bestTimeVisit: 'October to May',
        transportModes: [
            { mode: 'flight', details: 'Veer Savarkar Int\'l Airport', link: 'https://www.google.com/travel/flights' }
        ],
        hotels: [{ name: 'TSG Grand Resort', rating: 5, price: 12000, currency: 'INR' }],
        highlights: ['Radhanagar Beach', 'Cellular Jail', 'Elephant Beach', 'Scuba Diving']
    },
    {
        name: 'Havelock Island - Beach Paradise',
        description: 'Famous for Radhanagar Beach, one of Asia\'s best beaches.',
        location: { country: 'India', state: 'Andaman and Nicobar', city: 'Havelock Island', coordinates: { lat: 12.0212, lng: 92.9457 } },
        images: [
            '/images/destinations/andaman and nicobar.jpg',
            'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
        ],
        category: 'island',
        bestTimeVisit: 'October to May',
        transportModes: [{ mode: 'bus', details: 'Havelock Island Ferry', link: 'https://www.shipping.gov.in' }],
        hotels: [{ name: 'Elephant Transit Havelock', rating: 4, price: 8000, currency: 'INR' }],
        highlights: ['Radhanagar Beach', 'Vijaynagar Beach', 'Kalapathar Beach', 'Snorkeling']
    }
];

export const wildlifeDestinations = [
    {
        name: 'Kaziranga National Park - One-Horned Rhinoceros',
        description: 'UNESCO World Heritage site famous for its one-horned rhinoceros population.',
        location: { country: 'India', state: 'Assam', city: 'Kaziranga', coordinates: { lat: 26.5774, lng: 93.1719 } },
        images: [
            '/images/destinations/kaziranga.jpg',
            'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800'
        ],
        category: 'wildlife',
        bestTimeVisit: 'November to April',
        transportModes: [
            { mode: 'flight', details: 'Jorhat Airport', link: 'https://www.google.com/travel/flights' },
            { mode: 'train', details: 'Furkating Junction', link: 'https://www.irctc.co.in' }
        ],
        hotels: [{ name: 'IORA - The Resort', rating: 5, price: 15000, currency: 'INR' }],
        highlights: ['One-Horned Rhinoceros', 'Elephants', 'Tigers', 'Bird Watching']
    },
    {
        name: 'Jim Corbett National Park - Tiger Reserve',
        description: 'India\'s oldest national park, famous for Bengal tigers and diverse wildlife.',
        location: { country: 'India', state: 'Uttarakhand', city: 'Ramnagar', coordinates: { lat: 29.3943, lng: 79.4837 } },
        images: [
            '/images/destinations/tiger.jpg',
            'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800'
        ],
        category: 'wildlife',
        bestTimeVisit: 'November to June',
        transportModes: [
            { mode: 'train', details: 'Ramnagar Railway Station', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'Uttarakhand Transport', link: 'https://transport.uk.gov.in' }
        ],
        hotels: [{ name: 'The Wild Retreat', rating: 5, price: 18000, currency: 'INR' }],
        highlights: ['Bengal Tigers', 'Elephants', 'Bird Watching', 'Jungle Safaris']
    },
    {
        name: 'Ranthambore National Park - Tiger Kingdom',
        description: 'Former hunting ground turned tiger reserve, famous for tiger sightings.',
        location: { country: 'India', state: 'Rajasthan', city: 'Sawai Madhopur', coordinates: { lat: 26.0173, lng: 76.3659 } },
        images: [
            '/images/destinations/tiger.jpg',
            'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800'
        ],
        category: 'wildlife',
        bestTimeVisit: 'October to May',
        transportModes: [{ mode: 'train', details: 'Sawai Madhopur Railway Station', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Sher Bagh', rating: 5, price: 25000, currency: 'INR' }],
        highlights: ['Bengal Tigers', 'Leopards', 'Sambhar Lake', 'Historic Fort']
    }
];

export const culturalDestinations = [
    {
        name: 'Khajuraho - Temple Architecture',
        description: 'UNESCO World Heritage site famous for its erotic temple sculptures.',
        location: { country: 'India', state: 'Madhya Pradesh', city: 'Khajuraho', coordinates: { lat: 24.8500, lng: 79.9333 } },
        images: [
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800',
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
        ],
        category: 'cultural',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'train', details: 'Khajuraho Railway Station', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'MPSTDC', link: 'https://www.mpstdc.com' }
        ],
        hotels: [{ name: 'Taj Khajuraho', rating: 5, price: 12000, currency: 'INR' }],
        highlights: ['Western Group Temples', 'Eastern Group Temples', 'Chitragupta Temple', 'Archaeological Museum']
    },
    {
        name: 'Konark - Sun Temple',
        description: 'UNESCO World Heritage site featuring the magnificent Sun Temple in the shape of a chariot.',
        location: { country: 'India', state: 'Odisha', city: 'Konark', coordinates: { lat: 19.8871, lng: 86.0944 } },
        images: [
            '/images/destinations/konark sun temple.jpg',
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
        ],
        category: 'cultural',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'train', details: 'Puri Railway Station', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'OSRTC', link: 'https://www.osrtc.com' }
        ],
        hotels: [{ name: 'Mayfair Spa Resort', rating: 5, price: 15000, currency: 'INR' }],
        highlights: ['Sun Temple', 'Chauri Munda Temple', 'Konark Museum', 'Beach']
    },
    {
        name: 'Hampi - Cultural Heritage',
        description: 'UNESCO World Heritage site with ancient ruins and cultural significance.',
        location: { country: 'India', state: 'Karnataka', city: 'Hampi', coordinates: { lat: 15.3350, lng: 76.4600 } },
        images: [
            '/images/destinations/Hampi.jpg',
            'https://images.unsplash.com/photo-1580192986445-66795f72cb9a?w=800'
        ],
        category: 'cultural',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'train', details: 'Hosapete Junction', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Evolve Back Hampi', rating: 5, price: 25000, currency: 'INR' }],
        highlights: ['Virupaksha Temple', 'Vittala Temple', 'Stone Chariot', 'Queen\'s Bath']
    }
];

export const himachalDestinations = [
    {
        name: 'Manali - Adventure Capital',
        description: 'Hill station known for adventure sports and scenic beauty in the Himalayas.',
        location: { country: 'India', state: 'Himachal Pradesh', city: 'Manali', coordinates: { lat: 32.2396, lng: 77.1887 } },
        images: [
            '/images/destinations/himachal.jpeg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'mountain',
        bestTimeVisit: 'March to June, September to December',
        transportModes: [
            { mode: 'bus', details: 'HRTC', link: 'https://www.hrtc.gov.in' },
            { mode: 'train', details: 'Joginder Nagar Railway', link: 'https://www.irctc.co.in' }
        ],
        hotels: [
            { 
                name: 'The Himalayan', 
                rating: 5, 
                price: 18000, 
                currency: 'INR',
                image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
                amenities: ['Spa', 'Restaurant', 'WiFi', 'Mountain View']
            },
            { 
                name: 'Manali Backpacker Resort', 
                rating: 3, 
                price: 3500, 
                currency: 'INR',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                amenities: ['Campfire', 'Common Area', 'Parking', 'Hot Water']
            }
        ],
        highlights: ['Solang Valley', 'Rohtang Pass', 'Hadimba Temple', 'Manu Temple'],
        nearbyPlaces: [
            { name: 'Solang Valley', distance: '13 km', category: 'Adventure' },
            { name: 'Rohtang Pass', distance: '51 km', category: 'Adventure' },
            { name: 'Vashisth Hot Springs', distance: '3 km', category: 'Nature' },
            { name: 'Naggar Castle', distance: '20 km', category: 'Heritage' }
        ],
        details: 'Popular destination for adventure sports like paragliding, skiing, and river rafting. Gateway to Leh-Manali highway.',
        duration: '3-5 days',
        maxGroupSize: 12,
        difficulty: 'moderate'
    },
    {
        name: 'Shimla - The Queen of Hills',
        description: 'Former British hill station and summer capital with colonial architecture.',
        location: { country: 'India', state: 'Himachal Pradesh', city: 'Shimla', coordinates: { lat: 31.1048, lng: 77.1734 } },
        images: [
            '/images/destinations/shimla.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'mountain',
        bestTimeVisit: 'April to June, September to December',
        transportModes: [
            { mode: 'train', details: 'Shimla Railway (Toy Train)', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'HRTC', link: 'https://www.hrtc.gov.in' }
        ],
        hotels: [
            { 
                name: 'The Oberoi Cecil', 
                rating: 5, 
                price: 20000, 
                currency: 'INR',
                image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
                amenities: ['Historic Architecture', 'Fine Dining', 'Spa', 'WiFi']
            },
            { 
                name: 'Clarkes Hotel', 
                rating: 4, 
                price: 12000, 
                currency: 'INR',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                amenities: ['Colonial Style', 'Restaurant', 'WiFi', 'Mountain View']
            }
        ],
        highlights: ['The Mall Road', 'Christ Church', 'Viceregal Lodge', 'Kufri'],
        nearbyPlaces: [
            { name: 'Kufri', distance: '16 km', category: 'Hill Station' },
            { name: 'Narkanda', distance: '64 km', category: 'Hill Station' },
            { name: 'Chail', distance: '46 km', category: 'Hill Station' },
            { name: 'Fagu', distance: '25 km', category: 'Nature' }
        ],
        details: 'Former British hill station with well-preserved colonial architecture and the famous toy train ride.',
        duration: '4-6 days',
        maxGroupSize: 10,
        difficulty: 'easy'
    },
    {
        name: 'Dharamshala - Tibetan Culture Hub',
        description: 'Home to the Dalai Lama and the Tibetan government-in-exile, with beautiful landscapes.',
        location: { country: 'India', state: 'Himachal Pradesh', city: 'Dharamshala', coordinates: { lat: 32.2187, lng: 76.3455 } },
        images: [
            '/images/destinations/himachal.jpeg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'mountain',
        bestTimeVisit: 'March to June, September to November',
        transportModes: [
            { mode: 'bus', details: 'HRTC', link: 'https://www.hrtc.gov.in' },
            { mode: 'train', details: 'Pathankot Railway', link: 'https://www.irctc.co.in' }
        ],
        hotels: [
            { 
                name: 'The Dalai Lama Guest House', 
                rating: 4, 
                price: 8000, 
                currency: 'INR',
                image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
                amenities: ['Tibetan Culture', 'Mountain View', 'Restaurant', 'WiFi']
            },
            { 
                name: 'Norling Hotel', 
                rating: 3, 
                price: 4500, 
                currency: 'INR',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                amenities: ['Basic Accommodation', 'Restaurant', 'Parking']
            }
        ],
        highlights: ['McLeod Ganj', 'Tibetan Monastery', 'Bhagsunag Waterfall', 'Tsuglagkhang Complex'],
        nearbyPlaces: [
            { name: 'McLeod Ganj', distance: '10 km', category: 'Cultural' },
            { name: 'Bhagsunag Waterfall', distance: '2 km', category: 'Nature' },
            { name: 'Tibetan Institute of Performing Arts', distance: '8 km', category: 'Cultural' },
            { name: 'Dal Lake', distance: '15 km', category: 'Nature' }
        ],
        details: 'Spiritual center with Tibetan Buddhist monasteries and the residence of the Dalai Lama.',
        duration: '3-5 days',
        maxGroupSize: 15,
        difficulty: 'easy'
    }
];

export const uttarakhandDestinations = [
    {
        name: 'Haridwar - Gateway to Gods',
        description: 'Sacred city on the banks of River Ganges, starting point of Char Dham Yatra.',
        location: { country: 'India', state: 'Uttarakhand', city: 'Haridwar', coordinates: { lat: 29.9457, lng: 78.1642 } },
        images: [
            '/images/destinations/haridwar.jpg',
            'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to June',
        transportModes: [
            { mode: 'train', details: 'Haridwar Railway Station', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'Uttarakhand Transport', link: 'https://transport.uk.gov.in' }
        ],
        hotels: [{ name: 'Ganges Kinare', rating: 5, price: 8000, currency: 'INR' }],
        highlights: ['Har Ki Pauri', 'Mansa Devi Temple', 'Chandi Devi Temple', 'Ganga Aarti']
    },
    {
        name: 'Rishikesh - Yoga Capital',
        description: 'Known for yoga, meditation, and adventure sports on the banks of Ganges.',
        location: { country: 'India', state: 'Uttarakhand', city: 'Rishikesh', coordinates: { lat: 30.0869, lng: 78.2676 } },
        images: [
            '/images/destinations/rishikesh.jpg',
            'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to June',
        transportModes: [{ mode: 'train', details: 'Rishikesh Railway Station', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Ananda in the Himalayas', rating: 5, price: 45000, currency: 'INR' }],
        highlights: ['Laxman Jhula', 'Ram Jhula', 'Triveni Ghat', 'Parmarth Niketan']
    }
];

export const kashmirDestinations = [
    {
        name: 'Srinagar - Paradise on Earth',
        description: 'Famous for houseboats, Mughal gardens, and scenic Dal Lake.',
        location: { country: 'India', state: 'Jammu and Kashmir', city: 'Srinagar', coordinates: { lat: 34.0837, lng: 74.7973 } },
        images: [
            '/images/destinations/kashmir.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'hill station',
        bestTimeVisit: 'April to October',
        transportModes: [
            { mode: 'flight', details: 'Srinagar Airport', link: 'https://www.google.com/travel/flights' }
        ],
        hotels: [{ name: 'Houseboat Stay', rating: 5, price: 15000, currency: 'INR' }],
        highlights: ['Dal Lake', 'Mughal Gardens', 'Shankaracharya Temple', 'Hazratbal Shrine']
    }
];

export const ladakhDestinations = [
    {
        name: 'Leh - Land of High Passes',
        description: 'High-altitude desert known for Buddhist monasteries and mountain landscapes.',
        location: { country: 'India', state: 'Ladakh', city: 'Leh', coordinates: { lat: 34.1526, lng: 77.5772 } },
        images: [
            '/images/destinations/ladakh.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'mountain',
        bestTimeVisit: 'May to September',
        transportModes: [
            { mode: 'flight', details: 'Kushok Bakula Rimpochhe Airport', link: 'https://www.google.com/travel/flights' }
        ],
        hotels: [{ name: 'Grand Dragon Ladakh', rating: 5, price: 12000, currency: 'INR' }],
        highlights: ['Shanti Stupa', 'Thiksey Monastery', 'Pangong Lake', 'Nubra Valley']
    }
];

export const maharashtraDestinations = [
    {
        name: 'Mumbai - The City of Dreams',
        description: 'India\'s financial capital, Bollywood hub, and a melting pot of cultures.',
        location: { country: 'India', state: 'Maharashtra', city: 'Mumbai', coordinates: { lat: 19.0760, lng: 72.8777 } },
        images: [
            '/images/destinations/mumbai.jpg',
            'https://images.unsplash.com/photo-1566552881560-6be032a20ca2?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Taj Mahal Palace', rating: 5, price: 25000, currency: 'INR' }],
        highlights: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Juhu Beach']
    },
    {
        name: 'Pune - Cultural Capital',
        description: 'Known for its educational institutions and historical Shaniwar Wada.',
        location: { country: 'India', state: 'Maharashtra', city: 'Pune', coordinates: { lat: 18.5204, lng: 73.8567 } },
        images: [
            '/images/destinations/pune.jpg',
            'https://images.unsplash.com/photo-1584813539806-2538b8d918c6?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'JW Marriott Pune', rating: 5, price: 12000, currency: 'INR' }],
        highlights: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort']
    },
    {
        name: 'Lonavala - Hill Station Retreat',
        description: 'Popular hill station known for its scenic beauty and pleasant climate.',
        location: { country: 'India', state: 'Maharashtra', city: 'Lonavala', coordinates: { lat: 18.7500, lng: 73.4167 } },
        images: [
            '/images/destinations/lonavala.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'hill station',
        bestTimeVisit: 'October to June',
        transportModes: [{ mode: 'train', details: 'Lonavala Railway Station', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Fariyas Resort', rating: 4, price: 8000, currency: 'INR' }],
        highlights: ['Lohagad Fort', 'Bhaja Caves', 'Karla Caves', 'Duke\'s Nose']
    }
];

export const keralaDestinations = [
    {
        name: 'Munnar - Tea Paradise',
        description: 'Lush green tea gardens and rolling hills of the Western Ghats.',
        location: { country: 'India', state: 'Kerala', city: 'Munnar', coordinates: { lat: 10.0889, lng: 77.0595 } },
        images: [
            '/images/destinations/munnar.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'hill station',
        bestTimeVisit: 'September to March',
        hotels: [{ name: 'Blanket Hotel', rating: 5, price: 10000, currency: 'INR' }],
        highlights: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam']
    },
    {
        name: 'Alappuzha - Backwaters',
        description: 'The Venice of the East, famous for its houseboat cruises.',
        location: { country: 'India', state: 'Kerala', city: 'Alappuzha', coordinates: { lat: 9.4981, lng: 76.3329 } },
        images: [
            '/images/destinations/alleppey-backwaters-vibe.jpg',
            'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800'
        ],
        category: 'nature',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Ramada by Wyndham', rating: 5, price: 9000, currency: 'INR' }],
        highlights: ['Houseboat Stay', 'Alappuzha Beach', 'Vembanad Lake']
    },
    {
        name: 'Kerala Utsavam - Cultural Festival Experience',
        description: 'Experience the vibrant culture and festivals of Kerala through traditional performances, arts, and celebrations. A celebration of Kerala\'s rich cultural heritage with traditional Kathakali, Mohiniyattam, and folk performances.',
        location: { country: 'India', state: 'Kerala', city: 'Kochi', coordinates: { lat: 9.9312, lng: 76.2673 } },
        images: [
            '/images/destinations/kerala utsavam.jpg',
            'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800'
        ],
        category: 'cultural',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'flight', details: 'Cochin International Airport', link: 'https://www.google.com/travel/flights' },
            { mode: 'train', details: 'Ernakulam Junction', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'Kerala State Transport', link: 'https://www.keralatourism.org' }
        ],
        hotels: [
            { name: 'Fort Kochi Heritage Hotel', rating: 5, price: 12000, currency: 'INR', amenities: ['Heritage Architecture', 'Spa', 'Restaurant', 'WiFi', 'Cultural Shows'] },
            { name: 'Cochin Marriott Hotel', rating: 5, price: 10000, currency: 'INR', amenities: ['Luxury Accommodation', 'Spa', 'Multiple Restaurants', 'WiFi', 'Swimming Pool'] }
        ],
        temples: [],
        nearbyPlaces: [
            { name: 'Munnar', distance: '150 km', category: 'Hill Station' },
            { name: 'Alappuzha', distance: '80 km', category: 'Backwaters' },
            { name: 'Thekkady', distance: '180 km', category: 'Wildlife' },
            { name: 'Wayanad', distance: '120 km', category: 'Hill Station' },
            { name: 'Athirappilly Falls', distance: '60 km', category: 'Waterfall' },
            { name: 'Kumarakom', distance: '90 km', category: 'Backwaters' }
        ],
        highlights: ['Kerala Folklore Theatre', 'Kathakali Performances', 'Traditional Music', 'Spice Market Tours', 'Cultural Workshops', 'Traditional Kerala Cuisine', 'Folk Dance Performances']
    }
];

export const tamilnaduDestinations = [
    {
        name: 'Chennai - Cultural Gateway',
        description: 'Capital city known for Marina Beach and Dravidian architecture.',
        location: { country: 'India', state: 'Tamil Nadu', city: 'Chennai', coordinates: { lat: 13.0827, lng: 80.2707 } },
        images: [
            '/images/destinations/chennai.jpg',
            'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'November to February',
        hotels: [{ name: 'Taj Coromandel', rating: 5, price: 14000, currency: 'INR' }],
        highlights: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George']
    },
    {
        name: 'Madurai - Temple City',
        description: 'Historic city centered around the Meenakshi Amman Temple.',
        location: { country: 'India', state: 'Tamil Nadu', city: 'Madurai', coordinates: { lat: 9.9252, lng: 78.1198 } },
        images: [
            '/images/destinations/Madurai-Meenakshi-Amman-Temple.jpg',
            'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Heritage Madurai', rating: 5, price: 8000, currency: 'INR' }],
        highlights: ['Meenakshi Temple', 'Thirumalai Palace']
    },
    {
        name: 'Ooty - Queen of Hill Stations',
        description: 'Famous for its botanical gardens and Nilgiri Mountain Railway.',
        location: { country: 'India', state: 'Tamil Nadu', city: 'Ooty', coordinates: { lat: 11.4088, lng: 76.6939 } },
        images: [
            '/images/destinations/ooty1.jpeg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'hill station',
        bestTimeVisit: 'October to June',
        transportModes: [{ mode: 'train', details: 'Nilgiri Mountain Railway', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Savoy Hotel', rating: 5, price: 15000, currency: 'INR' }],
        highlights: ['Ooty Lake', 'Botanical Gardens', 'Doddabetta Peak']
    },
    {
        name: 'Pondicherry - French Quarter',
        description: 'Former French colony with European architecture and spiritual centers.',
        location: { country: 'India', state: 'Tamil Nadu', city: 'Pondicherry', coordinates: { lat: 11.9416, lng: 79.8083 } },
        images: [
            '/images/destinations/pondicherry.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Le Dupleix', rating: 5, price: 12000, currency: 'INR' }],
        highlights: ['Auroville', 'French Quarter', 'Promenade Beach']
    },
    {
        name: 'Dhanushkodi - End of India',
        description: 'Ghost town at the southern tip of India, destroyed by a cyclone in 1964.',
        location: { country: 'India', state: 'Tamil Nadu', city: 'Rameswaram', coordinates: { lat: 9.2882, lng: 79.4916 } },
        images: [
            '/images/destinations/dhanuskodi.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'nature',
        bestTimeVisit: 'October to March',
        transportModes: [{ mode: 'train', details: 'Rameswaram Railway Station', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'GRT Grand Rameswaram', rating: 4, price: 5000, currency: 'INR' }],
        highlights: ['Dhanushkodi Beach', 'Boat Ride to Lanka', 'Pilgrimage Connection']
    },
    {
        name: 'Trimbakeshwar - Jyotirlinga Temple',
        description: 'One of the twelve Jyotirlingas of Lord Shiva, located in Nashik district of Maharashtra. Ancient temple with significant religious importance.',
        location: { country: 'India', state: 'Maharashtra', city: 'Trimbakeshwar', coordinates: { lat: 20.0175, lng: 73.7513 } },
        images: [
            '/images/destinations/trimbakeshwar.jpg',
            'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'train', details: 'Nashik Road Railway Station', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'MSRTC', link: 'https://www.msrtc.org' }
        ],
        hotels: [{ name: 'Hotel Trimbakeshwar', rating: 4, price: 3500, currency: 'INR' }],
        temples: ['Trimbakeshwar Temple', 'Bhima Shankar Temple', 'Grishneshwar Temple'],
        nearbyPlaces: [
            { name: 'Nashik', distance: '30 km', category: 'City' },
            { name: 'Shirdi', distance: '150 km', category: 'Pilgrimage' },
            { name: 'Bhima Shankar Temple', distance: '50 km', category: 'Pilgrimage' },
            { name: 'Grishneshwar Temple', distance: '35 km', category: 'Pilgrimage' },
            { name: 'Saptashrungi Temple', distance: '80 km', category: 'Pilgrimage' }
        ],
        highlights: ['Trimbakeshwar Jyotirlinga', 'Sacred Godavari River', 'Panchvati', 'Brahmagiri Hill', 'Nashik Temples']
    }
];

export const goaDestinations = [
    {
        name: 'Goa - Beach Paradise',
        description: 'Sun, sand, and Portuguese heritage.',
        location: { country: 'India', state: 'Goa', city: 'Panaji', coordinates: { lat: 15.2993, lng: 74.1240 } },
        images: [
            '/images/destinations/goa beach.jpg',
            'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800'
        ],
        category: 'beach',
        bestTimeVisit: 'November to March',
        hotels: [{ name: 'Taj Exotica', rating: 5, price: 20000, currency: 'INR' }],
        highlights: ['Calangute Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls']
    }
];

export const rajasthanDestinations = [
    {
        name: 'Jaipur - The Pink City',
        description: 'Royal palaces, majestic forts, and vibrant markets.',
        location: { country: 'India', state: 'Rajasthan', city: 'Jaipur', coordinates: { lat: 26.9124, lng: 75.7873 } },
        images: [
            '/images/destinations/jaipur.jpg',
            'https://images.unsplash.com/photo-1599661046289-e31897c93e14?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Rambagh Palace', rating: 5, price: 45000, currency: 'INR' }],
        highlights: ['Hawa Mahal', 'Amber Fort', 'City Palace']
    },
    {
        name: 'Udaipur - City of Lakes',
        description: 'Romantic city set amidst the Aravalli Hills and beautiful lakes.',
        location: { country: 'India', state: 'Rajasthan', city: 'Udaipur', coordinates: { lat: 24.5854, lng: 73.7125 } },
        images: [
            '/images/destinations/udaipur.jpg',
            'https://images.unsplash.com/photo-1585149940316-2fd74465d66d?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Taj Lake Palace', rating: 5, price: 55000, currency: 'INR' }],
        highlights: ['Lake Pichola', 'City Palace', 'Jag Mandir']
    },
    {
        name: 'Jaisalmer - Golden City',
        description: 'Desert city famous for its golden sandstone architecture and camel safaris.',
        location: { country: 'India', state: 'Rajasthan', city: 'Jaisalmer', coordinates: { lat: 26.9157, lng: 70.9083 } },
        images: [
            '/images/destinations/Rajasthan-Desert-Tour.jpg',
            'https://images.unsplash.com/photo-1599661046289-e31897c93e14?w=800'
        ],
        category: 'desert',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Hotel Desert View', rating: 4, price: 8000, currency: 'INR' }],
        highlights: ['Jaisalmer Fort', 'Sam Sand Dunes', 'Patwon Ki Haveli']
    }
];

export const uttarPradeshDestinations = [
    {
        name: 'Agra - City of Taj',
        description: 'Home to the iconic Taj Mahal, a symbol of eternal love.',
        location: { country: 'India', state: 'Uttar Pradesh', city: 'Agra', coordinates: { lat: 27.1767, lng: 78.0081 } },
        images: [
            '/images/destinations/taj mahal.jpg',
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Oberoi Amarvilas', rating: 5, price: 40000, currency: 'INR' }],
        highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri']
    },
    {
        name: 'Varanasi - Spiritual Capital',
        description: 'One of the oldest living cities in the world, sacred to Hindus.',
        location: { country: 'India', state: 'Uttar Pradesh', city: 'Varanasi', coordinates: { lat: 25.3176, lng: 83.0062 } },
        images: [
            '/images/destinations/varnasi.jpg',
            'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Brijrama Palace', rating: 5, price: 18000, currency: 'INR' }],
        highlights: ['Kashi Vishwanath Temple', 'Ganga Ghats', 'Sarnath']
    },
    {
        name: 'Ayodhya - Birthplace of Lord Rama',
        description: 'Ancient city and birthplace of Lord Rama, now a major pilgrimage site.',
        location: { country: 'India', state: 'Uttar Pradesh', city: 'Ayodhya', coordinates: { lat: 26.7953, lng: 82.1945 } },
        images: [
            '/images/destinations/Ayodhya.jpg',
            'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800'
        ],
        category: 'pilgrimage',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'Clarks Inn', rating: 4, price: 6000, currency: 'INR' }],
        highlights: ['Ram Janmabhoomi', 'Hanuman Garhi', 'Kanak Bhawan']
    }
];

export const westBengalDestinations = [
    {
        name: 'Kolkata - City of Joy',
        description: 'Capital of West Bengal, known for its colonial architecture and culture.',
        location: { country: 'India', state: 'West Bengal', city: 'Kolkata', coordinates: { lat: 22.5726, lng: 88.3639 } },
        images: [
            '/images/destinations/kolkata.jpg',
            'https://images.unsplash.com/photo-1558431382-27e303142255?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'October to March',
        hotels: [{ name: 'The Oberoi Grand', rating: 5, price: 15000, currency: 'INR' }],
        highlights: ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Temple']
    },
    {
        name: 'Darjeeling - Queen of Hills',
        description: 'Famous for its tea gardens and the iconic Darjeeling Himalayan Railway.',
        location: { country: 'India', state: 'West Bengal', city: 'Darjeeling', coordinates: { lat: 27.0360, lng: 88.2627 } },
        images: [
            '/images/destinations/Darjeeling.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'hill station',
        bestTimeVisit: 'October to June',
        transportModes: [{ mode: 'train', details: 'Darjeeling Himalayan Railway', link: 'https://www.irctc.co.in' }],
        hotels: [{ name: 'Windamere Hotel', rating: 5, price: 20000, currency: 'INR' }],
        highlights: ['Tea Gardens', 'Tiger Hill', 'Peace Pagoda']
    }
];

export const andhraDestinations = [
    {
        name: 'Ramoji Film City - Movie Magic',
        description: 'World\'s largest integrated film city and popular tourist destination.',
        location: { country: 'India', state: 'Andhra Pradesh', city: 'Hyderabad', coordinates: { lat: 17.4455, lng: 78.5571 } },
        images: [
            '/images/destinations/ramoji.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'flight', details: 'Hyderabad Airport', link: 'https://www.google.com/travel/flights' },
            { mode: 'bus', details: 'TSRTC', link: 'https://www.tsrtconline.com' }
        ],
        hotels: [{ name: 'Hyderabad Marriott', rating: 5, price: 10000, currency: 'INR' }],
        highlights: ['Film City Tour', 'Movie Sets', 'Theme Parks', 'Studio Tours']
    }
];

export const delhiDestinations = [
    {
        name: 'Red Fort Delhi - Mughal Majesty',
        description: 'UNESCO World Heritage site and iconic Mughal fort built by Shah Jahan.',
        location: { country: 'India', state: 'Delhi', city: 'Delhi', coordinates: { lat: 28.6562, lng: 77.2410 } },
        images: [
            '/images/destinations/red fort.jpg',
            'https://images.unsplash.com/photo-1587334273529-6ae07a42f7c7?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'October to March',
        transportModes: [
            { mode: 'train', details: 'Old Delhi Railway Station', link: 'https://www.irctc.co.in' },
            { mode: 'bus', details: 'Delhi Transport Corporation', link: 'https://www.dtcmobility.com' }
        ],
        hotels: [{ name: 'The Oberoi, New Delhi', rating: 5, price: 25000, currency: 'INR' }],
        highlights: ['Red Fort Complex', 'Diwan-i-Aam', 'Diwan-i-Khas', 'Light and Sound Show']
    }
];

export const internationalDestinations = [
    {
        name: 'Dubai - City of Gold',
        description: 'Modern metropolis known for luxury, skyscrapers like Burj Khalifa, and desert safaris.',
        location: { country: 'UAE', state: 'Dubai', city: 'Dubai', coordinates: { lat: 25.2048, lng: 55.2708 } },
        images: [
            '/images/destinations/dubai.jpg',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'November to March',
        hotels: [{ name: 'Burj Al Arab', rating: 7, price: 1500, currency: 'USD' }],
        highlights: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Desert Safari']
    },
    {
        name: 'Rome - The Eternal City',
        description: 'History comes alive in Rome, from the Colosseum to the Vatican City.',
        location: { country: 'Italy', state: 'Lazio', city: 'Rome', coordinates: { lat: 41.9028, lng: 12.4964 } },
        images: [
            '/images/destinations/Rome.jpg',
            'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800'
        ],
        category: 'heritage',
        bestTimeVisit: 'April to June, September to October',
        hotels: [{ name: 'Hotel de Russie', rating: 5, price: 800, currency: 'EUR' }],
        highlights: ['Colosseum', 'Vatican Museums', 'Trevi Fountain']
    },
    {
        name: 'New York - The Big Apple',
        description: 'The world\'s most iconic skyline, Broadway, and Central Park.',
        location: { country: 'USA', state: 'New York', city: 'New York', coordinates: { lat: 40.7128, lng: -74.0060 } },
        images: [
            '/images/destinations/new york.jpg',
            'https://images.unsplash.com/photo-1496409773096-104ff2c73ba4?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'April to June, September to November',
        hotels: [{ name: 'The Plaza', rating: 5, price: 900, currency: 'USD' }],
        highlights: ['Statue of Liberty', 'Times Square', 'Central Park']
    },
    {
        name: 'Bangkok - Vibrant Soul',
        description: 'Electric atmosphere, street food, and ornate temples.',
        location: { country: 'Thailand', state: 'Bangkok', city: 'Bangkok', coordinates: { lat: 13.7563, lng: 100.5018 } },
        images: [
            '/images/destinations/bangkook.jpg',
            'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'November to February',
        hotels: [{ name: 'Mandarin Oriental', rating: 5, price: 500, currency: 'USD' }],
        highlights: ['Grand Palace', 'Wat Arun', 'Floating Markets']
    },
    {
        name: 'Switzerland - Alpine Beauty',
        description: 'Snow-capped peaks, crystal clear lakes, and charming villages.',
        location: { country: 'Switzerland', state: 'Bern', city: 'Interlaken', coordinates: { lat: 46.6863, lng: 7.8632 } },
        images: [
            '/images/destinations/switzerland.jpg',
            'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800'
        ],
        category: 'mountain',
        bestTimeVisit: 'June to September',
        hotels: [{ name: 'Victoria Jungfrau', rating: 5, price: 700, currency: 'CHF' }],
        highlights: ['Jungfraujoch', 'Lake Thun', 'Harder Kulm']
    },
    {
        name: 'Thailand - Bangkok & Beyond',
        description: 'Vibrant country known for its tropical beaches, opulent shrines, and street food.',
        location: { country: 'Thailand', state: 'Bangkok', city: 'Bangkok', coordinates: { lat: 13.7563, lng: 100.5018 } },
        images: [
            '/images/destinations/thailand.jpg',
            'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800'
        ],
        category: 'city',
        bestTimeVisit: 'November to February',
        hotels: [{ name: 'Mandarin Oriental', rating: 5, price: 500, currency: 'USD' }],
        highlights: ['Grand Palace', 'Wat Pho', 'Floating Markets', 'Street Food']
    }
];

// Update the allDestinations array to include new destinations
export const kedarnathDestinations = [
    {
        name: 'Kedarnath - Lord of the Field',
        description: 'One of the twelve Jyotirlingas of Lord Shiva, located in the Garhwal Himalayan range in Uttarakhand. Major pilgrimage destination with ancient temple at an altitude of 3,583 m (11,755 ft).',
        location: { country: 'India', state: 'Uttarakhand', city: 'Kedarnath', coordinates: { lat: 30.7352, lng: 79.0515 } },
        images: [
            '/images/destinations/kedharnath.jpg',
            'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800'
        ],
        category: 'mountain',
        bestTimeVisit: 'April to October (peak season June-August)',
        price: 35000,  // Complete Kedarnath Darshan Package
        transportModes: [
            { mode: 'car', details: 'GUHA - Only authorised Gaddis/taxies', link: 'https://kndsguru.com' },
            { mode: 'helicopter', details: 'Heli Services from Dehradun/Sahastradhara', link: 'https://kedarnathhelicopter.com' },
            { mode: 'train', details: 'Rishikesh Railway Station (nearest)', link: 'https://www.irctc.co.in' }
        ],
        hotels: [
            { 
                name: 'GMVN Kedarnath Guest House', 
                rating: 3, 
                price: 1500, 
                currency: 'INR', 
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                amenities: ['Hot Water', 'Attached Bathroom', 'WiFi', 'Restaurant']
            },
            { 
                name: 'Kedarnath Bhojnalaya & Rest House', 
                rating: 2, 
                price: 800, 
                currency: 'INR', 
                image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
                amenities: ['Basic Accommodation', 'Dining Hall', 'Parking']
            }
        ],
        temples: ['Kedarnath Temple', 'Bhairavnath Temple', 'Gauri Kund'],
        nearbyPlaces: [
            { name: 'Badrinath', distance: '220 km', category: 'Pilgrimage' },
            { name: 'Gangotri', distance: '250 km', category: 'Pilgrimage' },
            { name: 'Yamunotri', distance: '300 km', category: 'Pilgrimage' },
            { name: 'Chopta', distance: '180 km', category: 'Adventure' },
            { name: 'Tungnath', distance: '15 km', category: 'Pilgrimage' }
        ],
        highlights: ['Ancient Temple', 'Himalayan Views', 'Gauri Kund', 'Bhairavnath Temple', 'Snow Views'],
        details: 'Complete Char Dham Yatra package includes Kedarnath, Badrinath, Gangotri, and Yamunotri. Helicopter services available from Dehradun, Sahastradhara, and other nearby locations. Trek distance from Gauri Kund is 14 km (16 km from Sonprayag).',
        duration: '5-7 days',
        maxGroupSize: 15,
        difficulty: 'challenging'
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
    ...internationalDestinations,
    ...andamanDestinations,
    ...wildlifeDestinations,
    ...culturalDestinations,
    ...himachalDestinations,
    ...uttarakhandDestinations,
    ...kashmirDestinations,
    ...ladakhDestinations,
    ...andhraDestinations,
    ...delhiDestinations,
    ...kedarnathDestinations
];
