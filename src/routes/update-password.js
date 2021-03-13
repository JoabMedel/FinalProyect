import express from "express";
import { updateUser } from "../controllers/updatePassword";
import { validate, schemaUpdatePassword } from "../middlewares/validators";

const router = express.Router();

router.put("/users", validate(schemaUpdatePassword), updateUser);
export default router;
