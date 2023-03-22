import jwt from "jsonwebtoken";
import { User } from "../models/user";

const authMiddleware = async (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Set user object on request
    req.user = decoded.user;

    // Get user from database
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res
        .status(401)
        .json({ msg: "Invalid token, authorization denied" });
    }

    // Call next middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

export default authMiddleware;
