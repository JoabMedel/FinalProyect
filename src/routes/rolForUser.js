import express from "express";
import {addRoleUser} from "../controllers/roles";
import jwtValidate from "express-jwt";

const router = express.Router();
router.post("/roles/:roleId/",jwtValidate({secret: process.env.SECRET_KEY, algorithms: ['HS384'] }), addRoleUser);
export default router;