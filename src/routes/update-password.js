import express from "express";
import {updateUser} from "../controllers/updatePassword";
import {validate,userSchema} from "../middlewares/validators";

const router = express.Router();

router.put("/users",updateUser);
export default router;