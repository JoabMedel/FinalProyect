import express from "express";
import {signUp} from "../controllers/auth";
import {validate, userSchema} from "../middlewares/validators";
const router = express.Router();

router.post("/users", validate(userSchema), signUp);
export default router;