import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true,
    trim: true,
  },
  email: {
    required: true,
    type: email,
    unique: true,
    trim: true,
  },
  password: {
    required: true,
    type: String,
    trim: true,
  },
  enrolledCourses: {
    type: [mongoose.Schema.ObjectId],
    ref: "Course",
  },
  adminOf: {
    type: mongoose.Schema.ObjectId,
    ref: "Course",
  },
});

const account = mongoose.model("account", accountSchema);
export default account;
