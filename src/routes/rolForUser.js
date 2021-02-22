import express from "express";
import {addRoleUser} from "../controllers/roles";
const router = express.Router();
router.post("/roles/:roleId/", addRoleUser);
export default router;