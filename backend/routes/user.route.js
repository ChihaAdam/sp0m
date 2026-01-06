import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  signIn,
  register,
  signup,
  signOut,
  getUser,
  changeUserAvatar,
  changeUsername,
  changePassword,
} from "../controllers/user.controller.js";
const router = express.Router();
router.post("/register", register);
router.post("/signup", signup);
router.post("/login", signIn);
router.get("/signout", signOut);
router.get("/me", authMiddleware, getUser);
router.patch("/change-avatar", authMiddleware, changeUserAvatar);
router.patch("/change-username", authMiddleware, changeUsername);
router.patch("/change-password", authMiddleware, changePassword);
export default router;
