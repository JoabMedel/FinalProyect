import express from "express";
import {addRoleUser} from "../controllers/roles";
const router = express.Router();
router.post("/roles/:userId/", addRoleUser);
export default router;