import express from "express";
import { signUpPrivilegedUser } from "../controllers/auth";

const router = express.Router();

router.post("/priv-user", signUpPrivilegedUser);

export default router;
