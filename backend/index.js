import express from "express";
import chalk from "chalk";
import { connectToDB } from "./config/dbConnection.js";
const app = express();

app.listen(3000, async () => {
  console.log(chalk.green.bold("Server running on port 3000"));
  await connectToDB();
  console.log(chalk.cyan.bold("Connected to MongoDB"));
});
