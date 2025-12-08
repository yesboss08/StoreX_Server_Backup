import mongoose from "mongoose";
import { Config } from "../utils/Config/Config.js";

try {
    mongoose.connect(Config.MongoDB_URL)
  console.log("db connected")
} catch (error) {
    console.log("erroe while connecting to db", error)
}