import express from "express";
import {getAll} from "../controllers/users";
const router = express.Router();
router.get("/users", getAll);
export default router;