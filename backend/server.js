import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { initializeDatabase } from "./scripts/initDb.js";
import router from "./routers/memberRouter.js";

dotenv.config();

await initializeDatabase();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Team Members API is running");
});

app.use("/api/members", router);

// Serve static files from the uploads directory
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
