import express from 'express';
import { oauthLogin, getOAuthUrl, handleOAuthCallback } from '../controllers/oauthController.js';

const router = express.Router();

// Get OAuth URL for a provider
router.get('/oauth/:provider', getOAuthUrl);

// OAuth login (direct)
router.post('/oauth', oauthLogin);

// OAuth callback handler
router.post('/oauth/callback', handleOAuthCallback);

export default router;
