import express from "express";
import { authUser, logoutUser, registerUser } from "../controllers/userController.js";
const userRoute = express.Router();

import { protect } from "../middleware/authMiddleware.js";

userRoute.post("/register", registerUser);
userRoute.post("/signin", authUser);
userRoute.post("/logout", logoutUser);

export default userRoute;
