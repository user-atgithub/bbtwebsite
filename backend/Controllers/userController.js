import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Technician from "../models/TechnicianSchema.js";

// Update User
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update', error: err.message });
    }
};

// Delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete', error: err.message });
    }
};

// Get User by ID
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, message: 'No user found' });
        }
        res.status(200).json({ success: true, message: 'User found', data: user });
    } catch (err) {
        res.status(404).json({ success: false, message: 'No user found', error: err.message });
    }
};

// Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");
        res.status(200).json({ success: true, message: 'Users found', data: users });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found', error: err.message });
    }
};

export const getUserProfile = async (req, res) => {
    const userId = req.userId;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .json({
          success: true,
          message: "Profile info is getting",
          data: { ...rest },
        });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, cannot get" });
    }
  };
  
  export const getMyAppointments = async (req, res) => {
    try {
      // step -1 : retrieve appointments from booking for specific user
      const bookings = await Booking.find({ user: req.userId });
      // step -2 : extract technician ids from appointment bookings
      const technicianIds = bookings.map((el) => el.technician.id);
      // step -3 : retrieve technicians using technician ids
      const technicians = await Technician.find({ _id: { $in: technicianIds } }).select("-password");
      res
        .status(200)
        .json({
          success: true,
          message: "Appointments are getting",
          data: technicians,
        });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, cannot get" });
    }
  };