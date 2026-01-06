import { refreshToken } from "../controllers/refreshToken.controller.js";
import { Router } from "express";
const router = Router();
router.get("/", refreshToken);
export default router;
