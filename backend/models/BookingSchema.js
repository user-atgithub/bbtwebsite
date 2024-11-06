import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    technician: {
      type: mongoose.Types.ObjectId,
      ref: "Technician",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false, // Make optional for guest bookings
    },
    ticketPrice: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "technician",
    select: "name",
  });
  next();
});

export default mongoose.model("Booking", bookingSchema);
