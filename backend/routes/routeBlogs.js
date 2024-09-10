import express from "express";
import { fetchBlogs } from "../controllers/blogsController.js";

const router = express.Router();

router.get("/blogs", fetchBlogs);

router.post("/blogs/add", (req, res) => {
  res.send("Hello, blogs!");
});

router.put("/blogs/35/blog", (req, res) => {
  res.send("Edit, blogs!");
});
export default router;
