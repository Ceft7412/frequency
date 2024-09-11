import express from "express";
import { authUser, logoutUser, registerUser } from "../controllers/userController.js";
const userRoute = express.Router();



userRoute.post("/register", registerUser);
userRoute.post("/signin", authUser);
userRoute.post("/logout", logoutUser);
export default userRoute;
