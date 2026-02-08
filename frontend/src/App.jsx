import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import DestinationDetails from './pages/DestinationDetails';
import BookingPage from './pages/BookingPage';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingPolicy from './pages/BookingPolicy';
import SafetyGuide from './pages/SafetyGuide';
import OAuthCallback from './pages/OAuthCallback';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <AuthProvider>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<Landing />} />
                                <Route path="/explore" element={<Explore />} />
                                <Route path="/destination/:id" element={<DestinationDetails />} />
                                <Route path="/book/:id" element={<BookingPage />} />
                                <Route path="/booking" element={<BookingPage />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/booking-policy" element={<BookingPolicy />} />
                                <Route path="/safety-guide" element={<SafetyGuide />} />
                                <Route path="/auth/callback" element={<OAuthCallback />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </AuthProvider>
            </Router>
        </ThemeProvider>
    );
}

export default App;
