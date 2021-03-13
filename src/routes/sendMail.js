import express from "express";
import { sendMail } from "../controllers/mail";
const router = express.Router();
router.post("/send-email", sendMail);
export default router;
