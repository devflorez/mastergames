import { getSession } from "next-auth/react";
import dbConnect from "lib/mongoose";
import Favorite from "models/Favorite";
dbConnect();
export default async function handler(req, res) {
  const session = await getSession({ req });
  const {
    method,

    query: { id },
  } = req;
  switch (method) {
    case "GET":
      try {
        if (!session) {
          res.status(401).json({ message: "Unauthorized" });
          return;
        }
        const favorite = await Favorite.findOne({
          game_id: id,
          userId: session.user._id,
        });
        return res.status(200).json(favorite);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }

    case "DELETE":
      try {
        if (!session) {
          res.status(401).json({ message: "Unauthorized" });
          return;
        }
        const deletedFavorite = await Favorite.findByIdAndDelete(id);
        return res.status(200).json(deletedFavorite);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
