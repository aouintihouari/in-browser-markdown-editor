import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import documentsRoute from "./routes/documents.route.js";

dotenv.config();

const app = express();

const allowedOrigin = process.env.CORS_ORIGIN;

app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));

app.use(express.json());

app.use("/api/v1/documents", documentsRoute);

app.use((err, req, res, next) => {
  console.error("ERROR 💥", err);
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message || "Something went wrong",
  });
});

export default app;
