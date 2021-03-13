import express from "express";
import { login } from "../controllers/auth";
import { validate, schemaLogin } from "../middlewares/validators";

const router = express.Router();
router.post("/login", validate(schemaLogin), login);
export default router;
