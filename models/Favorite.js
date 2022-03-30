import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  game_id: {
    type: Number,
    required: [true, "Game ID is required"],
  },
  url: {
    type: String,
    required: [true, "URL is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  userId: {
    type: String,
    required: [true, "User ID is required"],
    },
});
export default mongoose.models.Favorite ||
  mongoose.model("Favorite", FavoriteSchema);
