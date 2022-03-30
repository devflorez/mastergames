import mongoose from "mongoose";
import { string } from "yup";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  image: {
    type: String,
    required: [false, "Image is required"],
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
});
export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
