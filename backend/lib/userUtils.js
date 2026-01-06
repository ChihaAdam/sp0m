import User from "../model/userModel.js";
import { hashPassword, comparePassword } from "./hashPassword.js";
import crypto from "crypto";
import { redisClient } from "../config/redisClient.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../lib/tokenUtils.js";

export const getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    const err = new Error("user not found");
    err.name = "userNotFoundError";
    throw err;
  }
  return {
    username: user.username,
    avatarNumber: user.avatarNumber,
  };
};

export const searchUser = async (email, username) => {
  const user = await User.findOne({ email: email } || { username: username });
  if (user) {
    if (user.email === email) {
      const err = new Error("email already exists");
      err.name = "duplicateEmailError";
      throw err;
    }
    if (user.username === username) {
      const err = new Error("username already exists");
      err.name = "duplicateUsernameError";
      throw err;
    }
  }
};

export const setVerificationEntry = async (email, username, password) => {
  const key = crypto.randomBytes(64).toString("hex");
  const verificationCode = crypto.randomInt(100000, 999999);
  const hashedPassword = await hashPassword(password);
  await redisClient.set(
    key,
    JSON.stringify({
      username: username,
      email: email,
      password: hashedPassword,
      verificationCode: verificationCode,
    }),
    "EX",
    600
  );
  return { key, verificationCode };
};

export const verifyUser = async (key, enteredCode) => {
  const user = await redisClient.get(key);
  if (!user) {
    const err = new Error("verification entry not found");
    err.name = "verificationEntryNotFoundError";
    throw err;
  }
  const userObject = JSON.parse(user);
  if (userObject.verificationCode !== enteredCode) {
    const err = new Error("verification code is incorrect");
    err.name = "verificationCodeError";
    throw err;
  }
  await redisClient.del(key);
  return userObject;
};

export const createUser = async (userObject) => {
  const { username, email, password } = userObject;
  //just in case of other user created an account with the same email or username in the step of the verification
  await searchUser(email, username);
  const user = await User.create({
    username: username,
    email: email,
    password: password,
  });
  const accessToken = generateAccessToken({ id: user._id });
  const refreshToken = generateRefreshToken({ id: user._id });
  return { accessToken, refreshToken };
};

export const loginUser = async (email, password) => {
  if (!email || !password) {
    const err = new Error("email and password are required");
    err.name = "castError";
    throw err;
  }
  const user = await User.findOne({ email: email });
  console.log(user);
  if (!user) {
    const err = new Error("email or password is incorrect");
    err.name = "loginError";
    throw err;
  }
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    const err = new Error("username or password is incorrect");
    err.name = "loginError";
    throw err;
  }
  const accessToken = generateAccessToken({ id: user._id });
  const refreshToken = generateRefreshToken({ id: user._id });
  return { accessToken, refreshToken };
};

//change avatar
export const changeAvatar = async (avatarNumber, userId) => {
  await User.findByIdAndUpdate(userId, { avatarNumber: Number(avatarNumber) });
};

export const changeUsername = async (username, userId) => {
  await User.findByIdAndUpdate(userId, { username: username });
};
export const changePassword = async (password, userId) => {
  const hashedPassword = await hashPassword(password);
  await User.findByIdAndUpdate(userId, { password: hashedPassword });
};
