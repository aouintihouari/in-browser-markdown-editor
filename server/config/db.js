import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "md-editor" });
    console.log("MongoDB connected");
    return mongoose.connection;
  } catch (err) {
    console.error("DB connection failed:", err);
    throw err;
  }
};

export default connectDB;
