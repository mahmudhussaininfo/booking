import User from "../Model/userModel.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

//getuser
export const getAllUser = asyncHandler(async (req, res) => {
  const user = await User.find();
  if (user) {
    return res.status(200).json(user);
  }
});

//create User
export const createUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }

    const userCheck = await User.findOne({ email });
    if (userCheck) {
      return res.status(400).json({
        message: "user already created, try something new",
      });
    }

    //hash password
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashPassword });

    if (user) {
      return res.status(200).json({
        message: "user create successfully",
        user,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});
