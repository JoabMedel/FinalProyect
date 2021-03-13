import express from "express";
import { addRole, updateRole, deleteRole } from "../controllers/roles";
import jwtValidate from "express-jwt";
import {isAdmin,isEditor} from "../middlewares/roleAuth"
import { schemeRol, validate } from "../middlewares/validators";

const router = express.Router();

router.post(
  "/roles",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  validate(schemeRol),
  isEditor(),
  addRole
);

router.put(
  "/roles/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  validate(schemeRol),
  isEditor(),
  updateRole
);

router.delete(
  "/roles/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  deleteRole
);

export default router;
