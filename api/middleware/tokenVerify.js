import User from "../Model/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const tokenVerify = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader) {
    return res.status(404).json({
      message: "Unauthorized",
    });
  }

  const token = authHeader.split(" ")[1];

  //final verify token
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    asyncHandler(async (err, decode) => {
      if (err) {
        return res.status(404).json({ message: "invalid token" });
      }
      const me = await User.findOne({ email: decode.email });
      req.me = me;
      next();
    })
  );
};
