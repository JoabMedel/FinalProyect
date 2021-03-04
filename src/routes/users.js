import express from "express"
import {getAll} from "../controllers/users";
import {getUser} from "../controllers/users";
import jwtValidate from "express-jwt"
import {isAdmin } from "../middlewares/roleAuth";

const router = express.Router();
router.get("/users",jwtValidate({secret: process.env.SECRET_KEY, algorithms: ['HS384'] }),isAdmin(1),getAll);
router.get("/users/:id",jwtValidate({secret: process.env.SECRET_KEY, algorithms: ['HS384'] }),getUser);
export default router;