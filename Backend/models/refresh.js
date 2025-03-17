import mongoose from "mongoose";

const newRefreshSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,  
    expires: '3d',      
  }
});

const RefreshToken = mongoose.model('refreshToken', newRefreshSchema);

export default RefreshToken;
