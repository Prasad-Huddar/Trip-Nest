# 🏔️ TripNest - The Ultimate Travel Discovery Platform

TripNest is a premium, full-stack travel and tourism application designed to provide users with a seamless experience discovering and exploring world-class destinations. Built with a modern tech stack (MERN), it features rich interactive elements, dynamic filtering, and comprehensive travel data.

##  Premium Features

-  **Global Exploration**: Discover destinations across **29+ Indian States** and multiple international flagships including **Italy, Thailand, France, Japan, and Greece**.
-  **Advanced Filtering System**:
    - **Dynamic State/Country Filters**: Intelligently extracts regions from the database for precise navigation.
    - **Categorized Discovery**: Specialized categories for Beach, Mountain, Heritage, Hill Stations, Wildlife, Pilgrimage, and more.
    - **Price & Rating Sorting**: Find the perfect stay within your budget and quality expectations.
-  **Rich Visual Experience**: High-quality imagery including custom local assets for iconic landmarks like **Shimla, Red Fort, Ramoji Film City, and Ayodhya**.
-  **Integrated Logistics**: Real-time travel mode suggestions (Trains, Flights, Buses) with direct booking links.
-  **Hotel Ecosystem**: Detailed stay recommendations with price points, ratings, and amenity lists for every destination.
-  **Dynamic Interface**: Stunning dark/light mode support with smooth Framer Motion transitions and responsive layouts.
-  **Interactive Maps**: Localized coordinates for all destinations using high-precision geolocation data.

##  Tech Stack

### Frontend
- **React 18** (Vite-powered for high performance)
- **Tailwind CSS** (Modern utility-first styling)
- **Framer Motion** (Premium animations and transitions)
- **Lucide & Feather Icons** (Sleek visual language)
- **React Router** (Dynamic client-side navigation)
- **Axios** (Robust API communication)

### Backend
- **Node.js & Express.js**
- **MongoDB with Mongoose** (Scalable NoSQL database)
- **JWT Authentication** (Secure stateless user sessions)
- **Bcrypt.js** (Enterprise-grade password hashing)
- **Dotenv** (Secure environment management)

##  Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB Atlas account or local MongoDB instance

### Installation & Setup

1. **Clone & Install**
   ```bash
   git clone https://github.com/your-repo/tripnest.git
   cd TripNest
   ```

2. **Backend Configuration**
   ```bash
   cd backend
   npm install
   # Create a .env file with:
   # PORT=5000
   # MONGODB_URI=your_mongodb_connection_string
   # JWT_SECRET=your_secret_key
   npm run dev
   ```

3. **Frontend Configuration**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

Open (https://tripnest-explore.vercel.app/) to see the application in action.

##  Current Project Progress

- [x] Complete MERN stack foundation
- [x] Advanced dynamic filtering by State/Country
- [x] Comprehensive Indian destination data (Shimla, Rameswaram, Delhi, Maharashtra, Karnataka)
- [x] International flagship destinations (Italy, Thailand, Santorini, Paris)
- [x] Robust transport and hotel integration
- [x] Premium Dashboard & Explore UI
- [ ] Real-time flight/hotel price tracking (Upcoming)
- [ ] User itineraries & AI planning (Upcoming)

##  Project Structure

```
TripNest/
├── backend/            # Express API Server
│   ├── controllers/    # Business Logic
│   ├── models/         # Mongoose Schemas (Destination, User, Booking)
│   ├── routes/         # API Endpoint Definitions
│   └── scripts/        # Data Management & Migration Scripts
└── frontend/           # Vite + React Client
    ├── public/         # Static Assets & Local Images
    └── src/
        ├── components/ # Atomic UI Components
        ├── pages/      # View Modules (Home, Explore, Details)
        └── utils/      # API Config & Helper Functions
```

##  License

This project is licensed under the ISC License - see the LICENSE file for details.

##  Support

For technical support or inquiries, please contact the development team at [support@tripnest.com](mailto:support@tripnest.com) or open a GitHub issue.

---
*Empowering your next adventure with TripNest.* 
