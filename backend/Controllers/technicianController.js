import Booking from "../models/BookingSchema.js";
import Technician from "../models/TechnicianSchema.js";

// Update Technician
export const updateTechnician = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedTechnician = await Technician.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedTechnician });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update', error: err.message });
    }
};

// Delete Technician
export const deleteTechnician = async (req, res) => {
    const id = req.params.id;

    try {
        await Technician.findByIdAndDelete(id);
        res.status(200).json({ 
            success: true, 
            message: 'Successfully deleted' 
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete', error: err.message });
    }
};

// Get Technician by ID
export const getSingleTechnician = async (req, res) => {
    const id = req.params.id;

    try {
        const technician = await Technician.findById(id)
            .populate('reviews')
            .select("-password");

        if (!technician) {
            return res.status(404).json({ success: false, message: 'No technician found' });
        }

        res.status(200).json({ 
            success: true, 
            message: 'Technician found', 
            data: technician 
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to retrieve technician', error: err.message });
    }
};

// Get All Technicians
export const getAllTechnicians = async (req, res) => {
    try {
        const { query } = req.query;
        let technicians;

        if (query) {
            technicians = await Technician.find({
                isApproved: 'approved', 
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ],
            }).select("-password");
        } else {
            technicians = await Technician.find({ isApproved: "approved" }).select("-password");
        }

        res.status(200).json({ 
            success: true, 
            message: 'Technicians found', 
            data: technicians 
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to retrieve technicians', error: err.message });
    }
};

export const getTechnicianProfile = async (req, res) => {
    const technicianId = req.userId;
    try {
        const technician = await Technician.findById(technicianId);
        if (!technician) {
            return res
                .status(404)
                .json({ success: false, message: "Technician not found" });
        }
        const { password, ...rest } = technician._doc;
        const appointments = await Booking.find({ technician: technicianId });
        res
            .status(200)
            .json({
                success: true,
                message: "Profile info is getting",
                data: { ...rest, appointments },
            });
    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Something went wrong, cannot get" });
    }
};
