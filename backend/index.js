import express from "express";
import chalk from "chalk";
import { connectToDB } from "./config/dbConnection.js";
import fakeLoginRoute from "./routes/fakelogin.route.js";
import userRoute from "./routes/user.route.js";
const app = express();

app.use(express.json());
app.use("/api/v1/fakeLogin", fakeLoginRoute);
app.use("/api/v1/user", userRoute);
app.listen(3000, async () => {
  console.log(chalk.green.bold("Server running on port 3000"));
  await connectToDB();
  console.log(chalk.cyan.bold("Connected to MongoDB"));
});
