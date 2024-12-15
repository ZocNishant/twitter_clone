import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use("/api/auth", authRoutes); // Middleware

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}.`);
  connectMongoDB();
});
