import { getSession } from "next-auth/react";
import dbConnect from "lib/mongoose";
import Favorite from "models/Favorite";
dbConnect();
export default async function handler(req, res) {
  const session = await getSession({ req });
  console.log("🚀", session);
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        if (!session) {
          res.status(401).json({ message: "Unauthorized" });
          return;
        }
        const favorites = await Favorite.find({ userId: session.user._id });
        return res.status(200).json(favorites);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }

    case "POST":
      try {
        if (!session) {
          res.status(401).json({ message: "Unauthorized" });
          return;
        }
        const newFavorite = await Favorite.create({
          ...body,
          userId: session.user._id,
        });
        return res.status(201).json(newFavorite);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
