import mongoose from "mongoose";
import colors from "colors";

//mongodb Connection

export const mongodbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected Successfully`.bgYellow.green);
  } catch (error) {
    console.log(error.message);
  }
};
