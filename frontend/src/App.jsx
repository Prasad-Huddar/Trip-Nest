import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
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
                                {/* Public routes */}
                                <Route path="/" element={
                                    <UnauthenticatedRoute>
                                        <Landing />
                                    </UnauthenticatedRoute>
                                } />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                
                                {/* Protected routes - require authentication */}
                                <Route path="/explore" element={
                                    <ProtectedRoute>
                                        <Explore />
                                    </ProtectedRoute>
                                } />
                                <Route path="/destination/:id" element={
                                    <ProtectedRoute>
                                        <DestinationDetails />
                                    </ProtectedRoute>
                                } />
                                <Route path="/book/:id" element={
                                    <ProtectedRoute>
                                        <BookingPage />
                                    </ProtectedRoute>
                                } />
                                <Route path="/booking" element={
                                    <ProtectedRoute>
                                        <BookingPage />
                                    </ProtectedRoute>
                                } />
                                <Route path="/dashboard" element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                } />
                                
                                {/* Public policy pages */}
                                <Route path="/booking-policy" element={<BookingPolicy />} />
                                <Route path="/safety-guide" element={<SafetyGuide />} />
                                
                                {/* OAuth callback */}
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
