import mongoose from "mongoose";

const connectDB = async (DB_URI) => {
  try {
    if (!DB_URI) {
      throw new Error("MongoDB URI is missing");
    }

    await mongoose.connect(DB_URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("DB Connection Error:", error.message);

    process.exit(1);
  }
};

export default connectDB;
