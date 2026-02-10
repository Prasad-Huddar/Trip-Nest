import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

// Use environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL || '/api';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        console.log('AuthContext useEffect running');
        const token = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        console.log('Token from localStorage:', token);
        console.log('User from localStorage:', savedUser);
            
        if (token && savedUser) {
            const parsedUser = JSON.parse(savedUser);
            console.log('Setting user from localStorage:', parsedUser);
            setUser(parsedUser);
        } else {
            console.log('No valid auth data in localStorage');
        }
        setLoading(false);
        console.log('AuthContext loading set to false');
    }, []);

    const login = async (email, password) => {
        try {
            console.log('Login function called with:', { email, password });
            const { data } = await api.post(`/auth/login`, { email, password });
            console.log('Login API response:', data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            console.log('User state set to:', data.user);
            // No automatic redirect - stay on current page (landing page)
            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    };

    const register = async (name, email, password) => {
        console.log('Register function called with:', { name, email, password });
        try {
            console.log('Making API call to /auth/register');
            const { data } = await api.post(`/auth/register`, { name, email, password });
            console.log('API response:', data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            console.log('User registered and state set to:', data.user);
            // No automatic redirect - stay on current page (landing page)
            return { success: true };
        } catch (error) {
            console.error('Registration error:', error);
            let message = error.response?.data?.message || 'Registration failed';
            if (error.message === 'Network Error') {
                message = 'Network Error: Unable to reach server. Is the backend running?';
            }
            console.error('Registration error message:', message);
            return {
                success: false,
                message
            };
        }
    };

    const logout = () => {
        console.log('Logout function called');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        console.log('User state after logout:', null);
        navigate('/');
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
