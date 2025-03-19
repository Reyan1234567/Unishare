import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    courseId: {
      type: String,
      trim: true,
    },
    fieldId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "field",
      required: true,
    },
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "field",
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
