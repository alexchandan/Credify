import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    profession: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    company: {
      type: String,
      trim: true,
    },

    linkedUrl: {
      type: String,
      trim: true,
    },

    experience: {
      type: Number,
      required: true,
      min: 0,
    },

    primaryDomain: {
      type: String,
      required: true,
      trim: true,
    },

    availability: {
      type: String,
      enum: ["Immediate", "15 Days", "1 Month", "2 Months", "3+ Months"],
      default: "Immediate",
    },

    companySizePref: {
      type: String,
      enum: ["Startup", "Mid-size", "Enterprise", "Any"],
      default: "Any",
    },

    techSkills: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
