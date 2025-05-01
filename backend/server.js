import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { initializeDatabase } from "./scripts/initDb.js";

dotenv.config();

await initializeDatabase();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
