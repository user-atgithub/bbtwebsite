import Review from "../models/ReviewSchema.js";
import Technician from "../models/TechnicianSchema.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});

        res
        .status(200)
        .json({ success: true, message: "Successful", data: reviews });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
};

// Create review
export const createReview = async (req, res) => {
    if (!req.body.technician) req.body.technician = req.params.technicianId
    if (!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body)

    try {
        const savedReview = await newReview.save()

        await Technician.findByIdAndUpdate(req.body.technician, { 
            $push: { reviews: savedReview._id },
        });

        res
        .status(200)
        .json({ success: true, message: "Review submitted", data: savedReview });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
