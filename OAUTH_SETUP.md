# TripNest OAuth Integration Guide

This guide explains how to set up social media authentication (OAuth) for TripNest.

## Features

- **Google OAuth 2.0** - Sign in with Google
- **Facebook Login** - Sign in with Facebook
- **Twitter OAuth 2.0** - Sign in with Twitter/X
- **Instagram Basic Display** - Sign in with Instagram
- **Traditional Email/Password** - Standard authentication

## Database Storage

All user sign-ins (both OAuth and traditional) are stored in MongoDB with the following schema:

```javascript
{
  name: String,
  email: String,
  password: String (hashed, optional for OAuth users),
  avatar: String,
  role: String (user/admin),
  provider: String (local/google/facebook/twitter/instagram),
  providerId: String (OAuth provider's user ID),
  socialLinks: {
    instagram: String,
    twitter: String,
    facebook: String
  },
  favorites: [ObjectId],
  createdAt: Date
}
```

## Setup Instructions

### 1. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Set authorized redirect URIs:
   - `http://localhost:5173/auth/callback` (development)
   - `https://yourdomain.com/auth/callback` (production)
6. Copy Client ID and Client Secret
7. Add to `.env`:
   ```
   GOOGLE_CLIENT_ID=your_client_id_here
   GOOGLE_CLIENT_SECRET=your_client_secret_here
   ```

### 2. Facebook OAuth Setup

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app → Select "Consumer" type
3. Add "Facebook Login" product
4. Configure OAuth Redirect URIs:
   - `http://localhost:5173/auth/callback` (development)
   - `https://yourdomain.com/auth/callback` (production)
5. Copy App ID and App Secret
6. Add to `.env`:
   ```
   FACEBOOK_APP_ID=your_app_id_here
   FACEBOOK_APP_SECRET=your_app_secret_here
   ```

### 3. Twitter OAuth 2.0 Setup

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new app or select existing one
3. Enable OAuth 2.0
4. Set callback URL:
   - `http://localhost:5173/auth/callback` (development)
   - `https://yourdomain.com/auth/callback` (production)
5. Copy Client ID and Client Secret
6. Add to `.env`:
   ```
   TWITTER_CLIENT_ID=your_client_id_here
   TWITTER_CLIENT_SECRET=your_client_secret_here
   ```

### 4. Instagram Basic Display Setup

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app → Select "Consumer" type
3. Add "Instagram Basic Display" product
4. Configure OAuth Redirect URIs:
   - `http://localhost:5173/auth/callback` (development)
   - `https://yourdomain.com/auth/callback` (production)
5. Copy Instagram App ID and App Secret
6. Add to `.env`:
   ```
   INSTAGRAM_APP_ID=your_app_id_here
   INSTAGRAM_APP_SECRET=your_app_secret_here
   ```

## API Endpoints

### Get OAuth URL
```
GET /api/auth/oauth/:provider
```
Returns the OAuth authorization URL for the specified provider.

**Response:**
```json
{
  "success": true,
  "authUrl": "https://accounts.google.com/o/oauth2/v2/auth?..."
}
```

### OAuth Login (Direct)
```
POST /api/auth/oauth
```
Handles OAuth login with provider data.

**Request Body:**
```json
{
  "provider": "google",
  "providerId": "123456789",
  "email": "user@example.com",
  "name": "John Doe",
  "avatar": "https://..."
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "user@example.com",
    "avatar": "https://...",
    "role": "user",
    "provider": "google"
  }
}
```

### OAuth Callback Handler
```
POST /api/auth/oauth/callback
```
Handles OAuth callback with authorization code.

**Request Body:**
```json
{
  "provider": "google",
  "code": "authorization_code_here"
}
```

## Frontend Usage

### Sign In Modal

The `AuthModal` component now includes OAuth buttons:

```jsx
import AuthModal from './components/AuthModal';

<AuthModal isOpen={true} onClose={() => {}} initialMode="login" />
```

### Social Media Links

The Footer component includes links to TripNest's social media:

- Facebook: `https://www.facebook.com/tripnest`
- Twitter: `https://twitter.com/tripnest`
- Instagram: `https://www.instagram.com/tripnest`
- Email: `mailto:contact@tripnest.com`

## How It Works

1. **User clicks OAuth button** → Frontend calls `/api/auth/oauth/:provider`
2. **Backend returns OAuth URL** → User is redirected to provider's login page
3. **User authorizes app** → Provider redirects back with authorization code
4. **Backend exchanges code for access token** → Fetches user profile
5. **User created/updated in database** → JWT token returned to frontend
6. **User is authenticated** → Redirected to explore page

## Security Notes

- OAuth credentials should **never** be committed to version control
- Use environment variables for all sensitive data
- Implement CSRF protection for OAuth callbacks
- Validate redirect URIs to prevent open redirect vulnerabilities
- Store only necessary user data from OAuth providers
- Implement rate limiting on OAuth endpoints

## Testing

For development, you can test OAuth without setting up all providers:

1. The system will show an error message if OAuth is not configured
2. Users can still sign in with email/password
3. Set up one provider at a time for testing

## Production Deployment

1. Update redirect URIs in all OAuth provider dashboards
2. Set production environment variables
3. Enable HTTPS (required by most OAuth providers)
4. Test each OAuth flow thoroughly
5. Monitor OAuth error logs

## Troubleshooting

### "OAuth not configured" error
- Check that environment variables are set correctly
- Verify OAuth credentials in provider dashboards
- Ensure redirect URIs match exactly

### Redirect URI mismatch
- Update redirect URIs in provider dashboards
- Check for trailing slashes
- Verify protocol (http vs https)

### User data not saving
- Check MongoDB connection
- Verify User model schema
- Check backend logs for errors

## Support

For issues or questions, contact: contact@tripnest.com
