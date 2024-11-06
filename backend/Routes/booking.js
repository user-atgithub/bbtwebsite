import express from 'express';
import { authenticate } from './../auth/verifyToken.js';
import { getCheckoutSession, getGuestCheckoutSession } from '../Controllers/bookingController.js';

const router = express.Router();

router.post('/checkout-session/:technicianId', authenticate, getCheckoutSession);
router.post('/guest-checkout-session/:technicianId', getGuestCheckoutSession); // New route for guest checkout

export default router;
