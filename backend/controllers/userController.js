import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const logoutUser = async (request, response) => {
  response.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  response.status(200).json({ message: "User logged out" });
};

/**
 * @desc Login a user.
 * @route POST /api/users/signin
 */
export const authUser = async (request, response) => {
  // Destructure the data and get only the email and password.
  const { email, password } = request.body;

  // Find a user the has the similar entered email in the database.
  const user = await User.findOne({ email });

  // If no user is found, or the password doesn't match, send a 401 response.
  if (!user || !(await user.matchPassword(password))) {
    response.status(401).json({ message: "Invalid email or password" });
    return;
  }
  // If the user is found and the password matches, generate a token and send a 201 response.
  generateToken(response, user._id);
  response.status(201).json({ _id: user._id, name: user.name, email: user.email });
};

/**
 * @desc Register a user.
 * @route POST /api/users/register
 */
export const registerUser = async (request, response) => {
  console.log("request: ", request.body);

  // Destructure the data
  const { name, email, password } = request.body;
  // Validate the request body

  // Await the finding of the user before proceeding.
  const userExist = await User.findOne({ email });
  console.log("userExist: ", userExist);

  // If user exists, do not create and return nothing to cancel the creation.
  if (userExist) {
    response.status(400).json({ message: "User already exists." });
    return false;
  }

  // If user doesn't exists, create one.
  const user = await User.create({
    name,
    email,
    password,
  });

  // If successfully created the user, respond something. Else, status to 400.
  if (user) {
    generateToken(response, user._id);
    response.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    response.status(400);
  }
};
