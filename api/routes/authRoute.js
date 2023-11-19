import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/authController.js";

//router init
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/register").post(registerUser);

//export
export default router;
