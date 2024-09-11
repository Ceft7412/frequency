import express from "express";
import dotenv from "dotenv";
import router from "./routes/routeBlogs.js";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const ENVIRONMENT = process.env.NODE_ENVIRONMENT;
console.log("ENVIRONMENT: ", ENVIRONMENT);
console.log("PORT: ", PORT);

app.listen(PORT, () => {
  console.log("Frequency App");
});

// User router
app.use("/api/users/", userRoute);

// Blog router
// app.use("/api/", router);

// app.use("/api/blogs", router);
// app.use("/api/blogs/35/blog", router);
