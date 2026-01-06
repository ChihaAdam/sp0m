import { ENV } from "../config/env.js";
import { connectToDB } from "../config/dbConnection.js";
import {
  searchUser,
  getUserById,
  setVerificationEntry,
  verifyUser,
  createUser,
  loginUser,
  changeAvatar,
  changeUsername as changeUsernameUtil,
  changePassword as changePasswordUtil,
} from "../lib/userUtils.js";
import { sendVerificationEmail } from "../lib/mailUtils.js";
//Register user
export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      const err = new Error("All fields are required");
      err.name = "castError";
      throw err;
    }
    await connectToDB();
    await searchUser(email, username);
    const { key, verificationCode } = await setVerificationEntry(
      email,
      username,
      password
    );
    //if the email is not sent, the user can still register . so for performance reasons, we don't wait for the email to be sent
    sendVerificationEmail(email, username, verificationCode);
    res.status(200).json({ verificationKey: key });
  } catch (err) {
    next(err);
  }
};
export const signup = async (req, res, next) => {
  try {
    const { key } = req.query;
    const { code } = req.body;
    await connectToDB();
    const userObject = await verifyUser(key, code);
    const { accessToken, refreshToken } = await createUser(userObject);
    res
      .status(201)
      .cookie("refreshToken", `Bearer ${refreshToken}`, {
        httpOnly: true,
        sameSite: "none",
        secure: ENV === "production",
      })
      .json({
        message: "User created successfully",
        accessToken: `Bearer ${accessToken}`,
      });
  } catch (error) {
    next(error);
  }
};
//Login user
export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await connectToDB();
    const { accessToken, refreshToken } = await loginUser(email, password);
    res
      .status(200)
      .cookie("refreshToken", `Bearer ${refreshToken}`, {
        httpOnly: false,
        secure: ENV === "production",
        sameSite: ENV === "production" ? "none" : "lax",
      })
      .json({
        message: "User logged in successfully",
        accessToken: `Bearer ${accessToken}`,
      });
  } catch (err) {
    next(err);
  }
};

//get user account info
export const getUser = async (req, res, next) => {
  try {
    const userId = req.user_id;
    await connectToDB();
    const user = await getUserById(userId);
    res.status(200).json(user);
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

//change avatar
export const changeUserAvatar = async (req, res, next) => {
  try {
    const { avatarNumber } = req.body;
    const userId = req.user_id;
    await connectToDB();
    await changeAvatar(avatarNumber, userId);
    res.status(200).json({ message: "Avatar changed successfully" });
  } catch (err) {
    next(err);
  }
};

//change username
export const changeUsername = async (req, res, next) => {
  try {
    const { username } = req.body;
    const userId = req.user_id;
    await connectToDB();
    await changeUsernameUtil(username, userId);
    res.status(200).json({ message: "Username changed successfully" });
  } catch (err) {
    next(err);
  }
};

//change password
export const changePassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const userId = req.user_id;
    await connectToDB();
    await changePasswordUtil(password, userId);
    res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    next(err);
  }
};
