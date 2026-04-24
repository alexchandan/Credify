import mongoose from "mongoose";

const connectDB = async (DB_URI) => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database Connected Successfully.");
  } catch (error) {
    console.log("DB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
