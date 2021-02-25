import express from "express";
import {addRole} from "../controllers/roles";
import jwtValidate from "express-jwt";

const router = express.Router();
router.post("/roles",jwtValidate({secret: process.env.SECRET_KEY, algorithms: ['HS384'] }), addRole);
export default router;