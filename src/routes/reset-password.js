import express from "express";
import {resetpasword} from "../controllers/resetPssword";
const router = express.Router();

router.post("/reset-password", resetpasword);
export default router;