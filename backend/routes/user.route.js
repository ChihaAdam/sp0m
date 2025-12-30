import express from "express";
import { signIn, signUp, signOut } from "../controllers/user.controller.js";
const router = express.Router();
router.post("/register", signUp);
router.post("/login", signIn);
router.get("/logout", signOut);
export default router;
