import mongoose from "mongoose";

const newRefreshSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

newRefreshSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 3 * 24 * 60 * 60 }
);

const RefreshToken = mongoose.model("refreshToken", newRefreshSchema);

export default RefreshToken;
