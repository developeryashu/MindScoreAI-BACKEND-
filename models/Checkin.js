import mongoose from "mongoose";

const CheckinSchema = new mongoose.Schema(
  {
    mood: Number,
    stress: Number,
    sleep: Number,
    message: String
  },
  { timestamps: true }
);

export default mongoose.model("Checkin", CheckinSchema);
