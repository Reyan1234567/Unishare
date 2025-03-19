import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    fieldCode: {
      type: String,
      required: true,
      trim: true,
    },
    courses: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "courses",
    },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "college",
      required:true
    },
  },
  {
    timestamps: true,
  }
);

const Field = mongoose.model("Field", fieldSchema);

export default Field;
