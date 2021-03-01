import express from "express";
import {signUp} from "../controllers/auth";
import {validate, userSchema} from "../middlewares/validators";
const router = express.Router();

/* router.post("/singup",validate(userSchema), signUp); */
router.post("/signup",signUp)
export default router;