import express from "express";
import dotenv from "dotenv";
import router from "./routes/routeBlogs.js";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import blogsRouter from "./routes/blogRoute.js";

dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// User router
app.use("/api/users/", userRoute);

// Blog router
// app.use("/api/", router);
// app.use("/api/blogs", router);
// app.use("/api/blogs/35/blog", router);

// Blog router
app.use("/api/blogs/", blogsRouter);
const PORT = process.env.PORT;
const ENVIRONMENT = process.env.NODE_ENVIRONMENT;
console.log("ENVIRONMENT: ", ENVIRONMENT);
console.log("PORT: ", PORT);

app.listen(PORT, () => {
  console.log("Frequency App");
});
