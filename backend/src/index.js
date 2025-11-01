import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

// Load .env from backend folder explicitly
dotenv.config({ path: path.resolve("./backend/.env") });

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Debug log
console.log("DEBUG MONGO_URI:", process.env.MONGO_URI);

// Increase body size limit to 25 MB
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));

app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://baatcheet-seven.vercel.app", // your deployed frontend domain
    ],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  // app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  // });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
