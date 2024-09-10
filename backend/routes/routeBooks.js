import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, world!");
});

router.post("/blogs", (req, res) => {
  res.send("Hello, blogs!");
});

router.put("/blogs/35/blog", (req, res) => {
  res.send("Edit, blogs!");
});
export default router;
