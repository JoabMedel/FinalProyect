import express from "express";
import { addRoleUser, updateRoleUser, deleteRoleUser } from "../controllers/roles";
import {isEditor,isAdmin} from "../middlewares/roleAuth"
import {
  validate,
  schemeAddRolUser,
  schemeUpdatRolUser,
} from "../middlewares/validators";
import jwtValidate from "express-jwt";

const router = express.Router();
router.post(
  "/users/:userID/roles/:rolesID",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeAddRolUser),
  addRoleUser
);

router.put(
  "/roleUser/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeUpdatRolUser),
  updateRoleUser
);

router.delete(
  "/roleUser/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isAdmin(),
  deleteRoleUser
)

export default router;
