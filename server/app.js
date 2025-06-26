import express from "express";
import cors from "cors";

import documentsRoute from "./routes/documents.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/documents", documentsRoute);

app.use((err, req, res, next) => {
  console.error("ERROR 💥", err);
  res
    .status(err.statusCode || 500)
    .json({
      status: err.status || "error",
      message: err.message || "Something went wrong",
    });
});

export default app;
