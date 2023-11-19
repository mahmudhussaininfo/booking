import express from "express";
import { createUser, getAllUser } from "../controller/userController.js";
import { tokenVerify } from "../middleware/tokenVerify.js";

//router init
const router = express.Router();

//token veryfify
router.use(tokenVerify);

router.route("/").get(getAllUser).post(createUser);

//export
export default router;
