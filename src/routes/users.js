import express from "express";
import {getAll} from "../controllers/users";
import {validateAdmin} from "../middlewares/jwt"

const router = express.Router();
router.get("/users", getAll);
export default router;