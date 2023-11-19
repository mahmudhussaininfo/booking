import User from "../Model/userModel.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

//login authentic user
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "all fields are required",
    });
  }

  //find User
  const userCheck = await User.findOne({ email });
  if (!userCheck) return res.status(400).json({ message: "user not found" });

  //password check
  const passCheck = await bcrypt.compare(password, userCheck.password);
  if (!passCheck)
    return res.status(404).json({ message: "password not match" });

  //token
  const token = jwt.sign(
    { email: userCheck.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    }
  );

  //refresh token
  const refreshToken = jwt.sign(
    { email: userCheck.email },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    }
  );

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res
    .status(200)
    .json({
      token,
      refreshToken,
      user: userCheck,
      message: "successfully login",
    });
});

//logout authentication
export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");

  res.status(200).json({
    message: "logout successfully done",
  });
});

//register user
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "all fields are required",
    });
  }

  const userCheck = await User.findOne({ email });
  if (userCheck) {
    return res.status(400).json({
      message: "user already registerd",
    });
  }

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashPassword });

  if (user) {
    return res.status(200).json({
      message: "user registration successfull",
      user,
    });
  }
});
