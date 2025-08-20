import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import questionRoutes from "./routes/question.js";
import answerRoutes from "./routes/answer.js";
import userRoutes from "./routes/users.js";
import trackLogin from "./middlewares/trackLogin.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(trackLogin); // Apply login tracking globally (or selectively on login route)

app.use("/questions", questionRoutes);
app.use("/answers", answerRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://admin:test@stack-overflow-clone.ebpq0pl.mongodb.net/";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process on connection failure
  });