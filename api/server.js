import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

//express init
const app = express();

//PORT
const PORT = process.env.PORT || 9090;

//server listen
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgMagenta.gray);
});
