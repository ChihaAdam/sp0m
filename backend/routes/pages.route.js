import express from "express";
import {
  createPage,
  getFacebookPages,
  getInstagramPages,
  getGooglePages,
  getAllPages,
  deletePage,
  updatePage,
  getPageDetails,
  getMetrics,
} from "../controllers/pages.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.use(authMiddleware);
router.post("/", createPage);
router.get("/", getAllPages);
router.get("/facebook", getFacebookPages);
router.get("/instagram", getInstagramPages);
router.get("/google", getGooglePages);
router.get("/metrics", getMetrics);
router.get("/:page_id", getPageDetails);
router.delete("/:page_id", deletePage);
router.patch("/:page_id", updatePage);
export default router;
