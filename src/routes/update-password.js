import express from "express";
import {updateUser} from "../controllers/updatePassword";
import {validate,userSchema} from "../middlewares/validators";

const router = express.Router();

router.patch("/users",validate(userSchema),updateUser);
export default router;