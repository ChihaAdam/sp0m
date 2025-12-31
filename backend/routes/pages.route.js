import express from "express";
import {
  createPage,
  getFacebookPages,
  getInstagramPages,
  getGooglePages,
  getPageDetails,
} from "../controllers/pages.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.use(authMiddleware);
router.post("/", createPage);
router.get("/facebook", getFacebookPages);
router.get("/instagram", getInstagramPages);
router.get("/google", getGooglePages);
router.get("/:page_id", getPageDetails);
export default router;
