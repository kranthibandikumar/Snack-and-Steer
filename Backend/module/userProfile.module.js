/** @format */

import mongoose from "mongoose";

const UserProfileSchema = mongoose.Schema({
  name: { type: String, require: true },
  city: { type: String, require: true },
  emergencyContact: { type: Number, require: true },
  preferredMode: { type: String, enum: ["own", "public", "ride-share"] },
  vehicleType: {
    type: String,
    enum: ["car", "motorcycle", "bicycle", "scooter"],
  },
});

const UserProfileModle = mongoose.model("userProfile", UserProfileSchema);
export default UserProfileModle;
