import express from "express";
import { resetpasword } from "../controllers/resetPssword";
import { validate, schemeRessetPassword } from "../middlewares/validators";

const router = express.Router();

router.post("/reset-password", validate(schemeRessetPassword), resetpasword);
export default router;
