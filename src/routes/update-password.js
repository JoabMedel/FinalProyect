import express from "express";
import {updateUser} from "../controllers/updatePassword";
const router = express.Router();

router.patch("/users",updateUser);
export default router;