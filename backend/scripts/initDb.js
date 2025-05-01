import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { Member } from "../models/Member.js";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const initializeDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Check if there's existing data
    const count = await Member.countDocuments();
    if (count > 0) {
      console.log("Database already has members. Skipping initialization.");
      mongoose.connection.close();
      return;
    }

    const dataDir = path.join(__dirname, "../data");

    // Path to seed data file
    const seedDataPath = path.join(dataDir, "seed-members.json");

    const seedData = JSON.parse(fs.readFileSync(seedDataPath, "utf8"));

    // Insert seed data into the database
    await Member.insertMany(seedData);
    console.log("Database initialized with seed data from file");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error initializing database:", error);
    process.exit(1);
  }
};

// Run the initialization
