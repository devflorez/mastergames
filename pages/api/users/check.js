import dbConnect from "lib/mongoose";
import User from "models/User";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const user = await User.findOne({
          email: body.email,
        });
        return res.status(200).json({email: user.email});
      } catch (error) {
        console.error(error.name);
        if (error.name === "CastError") {
          return res.status(400).json({ message: "Bad request" });
        } else if (error.name === "TypeError") {
          return res.status(404).json({ message: "User not found" });
        } else {
          return res.status(500).json({ message: "Internal server error" });
        }
      }

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
