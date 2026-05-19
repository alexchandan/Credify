import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const skillResultSchema = new mongoose.Schema(
  {
    skillName: { type: String, required: true },
    testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
    score: { type: Number, required: true },
    totalScore: { type: Number, required: true },
    percentage: { type: Number, required: true },
    percentile: { type: Number, default: 0 }, // calculated after grading
    badgeLevel: {
      type: String,
      enum: ["bronze", "silver", "gold", "platinum"],
      default: "bronze",
    },
    takenAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    // ── Core (both roles) ──────────────────────────────
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, minlength: 8, select: false },
    role: {
      type: String,
      enum: ["candidate", "recruiter", "admin"],
      required: true,
    },
    avatar: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },

    // ── Candidate profile ──────────────────────────────
    candidateProfile: {
      headline: { type: String, default: "" }, // "Full Stack Dev | 2 yrs exp"
      bio: { type: String, default: "" },
      location: { type: String, default: "" },
      resumeUrl: { type: String, default: "" },
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      isPublic: { type: Boolean, default: true }, // recruiter visibility toggle
      isAvailable: { type: Boolean, default: true }, // open to work
      skillResults: [skillResultSchema],
      overallScore: { type: Number, default: 0 },
      testsAttempted: { type: Number, default: 0 },
    },

    // ── Recruiter profile ──────────────────────────────
    recruiterProfile: {
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      designation: { type: String, default: "" },
      isVerified: { type: Boolean, default: false }, // verified via company email
      verifiedAt: { type: Date },
      contactsUsed: { type: Number, default: 0 }, // for plan limits
    },

    // ── Password reset ─────────────────────────────────
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true },
);

// Index for recruiter candidate search
userSchema.index({
  role: 1,
  "candidateProfile.isPublic": 1,
  "candidateProfile.overallScore": -1,
});
userSchema.index({ email: 1 });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (plain) {
  return bcrypt.compare(plain, this.password);
};

// Never expose password or reset tokens
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.resetPasswordToken;
  delete obj.resetPasswordExpires;
  return obj;
};

const User = mongoose.model("User", userSchema);
export default User;
