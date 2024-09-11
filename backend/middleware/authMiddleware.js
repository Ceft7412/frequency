import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = async (request, response, next) => {
  let token;
  token = request.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      request.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      return response
        .status(401)
        .json({ message: "Not authorized, invalid token", error: error });
    }
  } else {
    return response.status(401).json({ message: "Not authorized" });
  }
};
