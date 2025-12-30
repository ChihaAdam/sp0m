import mongoose from "mongoose";
import { DB_URI } from "./env.js";

//connect to db in a serverless environment . must return the cached connection if exists
let connection = null;
export const connectToDB = async () => {
  try {
    if (connection) return connection;
    connection = await mongoose.connect(DB_URI);
    return connection;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to connect to database");
  }
};
