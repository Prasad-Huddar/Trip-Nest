import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

// @desc    OAuth callback handler
// @route   POST /api/auth/oauth
// @access  Public
export const oauthLogin = async (req, res, next) => {
    try {
        const { provider, providerId, email, name, avatar } = req.body;

        if (!provider || !providerId || !email) {
            return res.status(400).json({
                success: false,
                message: 'Missing required OAuth data'
            });
        }

        // Check if user exists with this provider
        let user = await User.findOne({ provider, providerId });

        if (!user) {
            // Check if user exists with this email
            user = await User.findOne({ email });

            if (user) {
                // Update existing user with OAuth info
                user.provider = provider;
                user.providerId = providerId;
                if (avatar) user.avatar = avatar;
                await user.save();
            } else {
                // Create new user
                user = await User.create({
                    name: name || email.split('@')[0],
                    email,
                    provider,
                    providerId,
                    avatar: avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || email)}&background=random`
                });
            }
        }

        // Create token
        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
                provider: user.provider
            }
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get OAuth redirect URL
// @route   GET /api/auth/oauth/:provider
// @access  Public
export const getOAuthUrl = async (req, res, next) => {
    try {
        const { provider } = req.params;
        const redirectUri = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/auth/callback`;

        let authUrl;

        switch (provider) {
            case 'google':
                authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
                    `client_id=${process.env.GOOGLE_CLIENT_ID}&` +
                    `redirect_uri=${redirectUri}&` +
                    `response_type=code&` +
                    `scope=openid email profile`;
                break;

            case 'facebook':
                authUrl = `https://www.facebook.com/v18.0/dialog/oauth?` +
                    `client_id=${process.env.FACEBOOK_APP_ID}&` +
                    `redirect_uri=${redirectUri}&` +
                    `scope=email,public_profile`;
                break;

            case 'twitter':
                // Twitter OAuth 2.0
                authUrl = `https://twitter.com/i/oauth2/authorize?` +
                    `client_id=${process.env.TWITTER_CLIENT_ID}&` +
                    `redirect_uri=${redirectUri}&` +
                    `response_type=code&` +
                    `scope=tweet.read users.read&` +
                    `state=state&` +
                    `code_challenge=challenge&` +
                    `code_challenge_method=plain`;
                break;

            case 'instagram':
                // Instagram Basic Display API
                authUrl = `https://api.instagram.com/oauth/authorize?` +
                    `client_id=${process.env.INSTAGRAM_APP_ID}&` +
                    `redirect_uri=${redirectUri}&` +
                    `scope=user_profile,user_media&` +
                    `response_type=code`;
                break;

            default:
                return res.status(400).json({
                    success: false,
                    message: 'Invalid OAuth provider'
                });
        }

        res.status(200).json({
            success: true,
            authUrl
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Handle OAuth callback
// @route   POST /api/auth/oauth/callback
// @access  Public
export const handleOAuthCallback = async (req, res, next) => {
    try {
        const { provider, code } = req.body;

        if (!provider || !code) {
            return res.status(400).json({
                success: false,
                message: 'Missing provider or authorization code'
            });
        }

        // Here you would exchange the code for an access token
        // and fetch user data from the provider's API
        // This is a simplified example - in production, you'd need to:
        // 1. Exchange code for access token
        // 2. Use access token to fetch user profile
        // 3. Create/update user in database
        // 4. Return JWT token

        res.status(200).json({
            success: true,
            message: 'OAuth callback received. Implement token exchange logic.'
        });
    } catch (error) {
        next(error);
    }
};
