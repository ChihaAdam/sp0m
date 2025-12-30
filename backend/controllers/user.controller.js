import User from "../model/userModel.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../lib/tokenUtils.js";
import { hashPassword, comparePassword } from "../lib/hashPassword.js";
import { ENV } from "../config/env.js";
import { connectToDB } from "../config/dbConnection.js";
//Register user
export const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    await dbConnection();
    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const accessToken = generateAccessToken({
      id: user._id,
    });
    const refreshToken = generateRefreshToken({
      id: user._id,
    });
    res
      .status(201)
      .cookie("refreshToken", `Bearer ${refreshToken}`, {
        httpOnly: ENV == "production",
        secure: ENV == "production",
        sameSite: "none",
      })
      .json({
        message: "User created successfully",
        token: `Bearer ${accessToken}`,
      });
  } catch (err) {
    next(err);
  }
};

//Login user
export const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await connectToDB();
    const user = await User.findOne({ username });
    if (!user) {
      const err = new Error("username or password is incorrect");
      err.name = "LoginError";
      throw err;
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      const err = new Error("username or password is incorrect");
      err.name = "LoginError";
      throw err;
    }
    const accessToken = generateAccessToken({
      id: user._id,
    });
    const refreshToken = generateRefreshToken({
      id: user._id,
    });
    res
      .status(200)
      .cookie("refreshToken", `Bearer ${refreshToken}`, {
        httpOnly: ENV == "production",
        secure: ENV == "production",
        sameSite: "none",
      })
      .json({
        message: "User logged in successfully",
        token: `Bearer ${accessToken}`,
      });
  } catch (err) {
    next(err);
  }
};

//Logout user
export const signOut = async (req, res, next) => {
  res
    .clearCookie("refreshToken")
    .json({ message: "User logged out successfully" });
};
