import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import technicianRoute from "./Routes/technician.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from "./Routes/booking.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: ['https://bigbeats.netlify.app', 'http://localhost:5173'], // Update with your frontend domains
  credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions)); // Use cors middleware for CORS handling

app.get('/', (req, res) => {
  res.send('API is working');
});

// Database connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB database is connected');
  } catch (err) {
    console.error('MongoDB database connection failed', err);
    process.exit(1); // Exit process with failure
  }
};

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/technicians', technicianRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRoute);

app.listen(port, async () => {
  await connectDB(); // Ensure database is connected before starting the server
  console.log("Server is running on port " + port);
});
