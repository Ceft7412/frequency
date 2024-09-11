import express from "express";
import { fetchBlogs } from "../controllers/blogsController.js";
import { protect } from "../middleware/authMiddleware.js";
const blogsRouter = express.Router();

blogsRouter.get("/", protect, fetchBlogs);

export default blogsRouter;
