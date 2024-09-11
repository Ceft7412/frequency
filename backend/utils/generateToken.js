import jwt from "jsonwebtoken";

const generateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    // Prevents the cookie from being accessed by JS
    httpOnly: true,
    // Cookie must only be sent through HTTPS connections.
    secure: process.env.NODE_ENVIRONMENT !== "development",
    // Restricts the cookie  to be sent only from the same origin.
    sameSite: "strict",
    // Age is 30days.
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
