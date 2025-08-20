import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  browser: String,
  os: String,
  deviceType: String,
  ip: String,
  createdAt: { type: Date, default: Date.now }
});

const Login = mongoose.model("Login", LoginSchema);

export default Login; 