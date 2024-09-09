import User from '../models/UserSchema.js';
import Technician from '../models/TechnicianSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = user => {
  console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY); // Debugging line
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15d'
  });
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = null;
    if (role === 'customer') {
      user = await User.findOne({ email });
    } else if (role === 'technician') {
      user = await Technician.findOne({ email });
    }

    // Check if user exists
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    if (role === 'customer') {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
      });
    } else if (role === 'technician') {
      user = new Technician({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
      });
    }

    await user.save();
    res.status(200).json({ success: true, message: 'User successfully created' });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ success: false, message: 'Internal server error, Try again' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = null;
    const customer = await User.findOne({ email });
    const technician = await Technician.findOne({ email });
    if (customer) {
      user = customer;
    }
    if (technician) {
      user = technician;
    }

    // Check if user exists or not
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ status: false, message: 'Invalid credentials' });
    }

    // Get token
    const token = generateToken(user);

    const { password: _, role, appointment, ...rest } = user._doc;

    res.status(200).json({ status: true, message: "Successfully login", token, data: { ...rest }, role });
    
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ status: false, message: "Failed to login, token" });
  }
};
