import mongoose from "mongoose";
import TechnicianSchema from "./TechnicianSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    technician: {
      type: mongoose.Types.ObjectId,
      ref: "Technician",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });

  next();
});

reviewSchema.statics.calcAverageRatings = async function(technicianId) {
  // this points to the current model
  const stats = await this.aggregate([
    {
      $match: { technician: technicianId }
    },
    {
      $group: {
        _id: "technician",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  console.log(stats);

  if (stats.length > 0) {
    await this.model('Technician').findByIdAndUpdate(technicianId, {
      totalRating: stats[0].numOfRating,
      averageRating: stats[0].avgRating,
    });
  } else {
    await this.model('Technician').findByIdAndUpdate(technicianId, {
      totalRating: 0,
      averageRating: 0,
    });
  }

  await TechnicianSchema.findByIdAndUpdate(technicianId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating,
  });
};

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.technician);
});

export default mongoose.model("Review", reviewSchema);
