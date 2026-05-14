import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema(
  {
    profilePhoto: {
      type: String,
      trim: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    industryType: {
      type: String,
      required: true,
      trim: true,
    },

    companySize: {
      type: String,
      enum: ["1-10", "11-50", "51-200", "201-500", "500+"],
      default: "1-10",
    },

    companyWebsite: {
      type: String,
      trim: true,
    },

    linkedInUrl: {
      type: String,
      trim: true,
    },

    companyDescription: {
      type: String,
      trim: true,
    },

    recruiterName: {
      type: String,
      required: true,
      trim: true,
    },

    recruiterRole: {
      type: String,
      trim: true,
    },

    workEmail: {
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

    department: {
      type: String,
      trim: true,
    },

    hiringRegion: {
      type: String,
      trim: true,
    },

    roleForHiring: {
      type: String,
      trim: true,
    },

    volHiringPerMonth: {
      type: Number,
      min: 0,
      default: 0,
    },

    assesmentGoal: {
      type: String,
      trim: true,
    },

    verificationProofDoc: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Recruiter = mongoose.model("Recruiter", recruiterSchema);

export default Recruiter;
