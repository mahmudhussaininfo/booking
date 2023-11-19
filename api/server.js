import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import { mongodbConnect } from "./config/db.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

//express init
const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//PORT
const PORT = process.env.PORT || 9090;

//static folder
app.use(express.static("public"));

//routes
app.use("/api/v1/booking/auth", authRoute);
app.use("/api/v1/booking", userRoute);

//error Handler
app.use(errorHandler);

//server listen
app.listen(PORT, () => {
  mongodbConnect();
  console.log(`Server is running on ${PORT}`.bgMagenta.gray);
});
