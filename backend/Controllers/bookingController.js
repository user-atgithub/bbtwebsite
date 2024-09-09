import User from '../models/UserSchema.js';
import Technician from '../models/TechnicianSchema.js';
import Booking from '../models/BookingSchema.js';
import Stripe from 'stripe';

export const getCheckoutSession = async (req, res) => {
  try {
    // Get currently booked technician
    const technician = await Technician.findById(req.params.technicianId);
    const user = await User.findById(req.userId);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/technicians/${technician.id}`,
      customer_email: user.email,
      client_reference_id: req.params.technicianId,
      line_items: [
        {
          price_data: {
            currency: 'CAD',
            unit_amount: technician.ticketPrice * 100,
            product_data: {
              name: technician.name,
              description: technician.bio,
              images: [technician.photo],
            },
          },
          quantity: 1,
        },
      ],
    });

    // Create new booking
    const booking = new Booking({
      technician: technician._id,
      user: user._id,
      ticketPrice: technician.ticketPrice,
      session: session.id,
    });

    await booking.save();

    res.status(200).json({ success: true, message: 'Successfully paid', session });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating checkout session",
    });
  }
};
