import express from "express";
import {addRole} from "../controllers/roles";
const router = express.Router();
router.post("/roles", addRole);
export default router;