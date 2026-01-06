import express from "express";
import { fakeLogin } from "../controllers/fakeLogin.controller.js";
const router = express.Router();
router.post("/:page_id", fakeLogin);
export default router;
