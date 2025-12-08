import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const dbURL = ENV.DB_URL;

    if (!dbURL) {
      throw new Error("Missing DB_URL in environment configuration");
    }

    const connection = await mongoose.connect(dbURL);
    console.log(`🚀 MongoDB connected successfully at: ${connection.connection.host}`);
    
  } catch (err) {
    console.error("⚠️ Failed to establish MongoDB connection:", err.message);
    process.exit(1); // Exit on failure
  }
};
