import express from "express";
import {
  addActor,
  eraseActor,
  getActor,
  getActors,
  getActorsContent,
  updateActor
} from "../controllers/actors";
import jwtValidate from "express-jwt";
import { schemeActors, validate } from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";

const router = express.Router();

router.post(
  "/actors",
  validate(schemeActors),
  isEditor(),
  addActor
);

router.put(
  "/actors/:id",
  validate(schemeActors),
  isEditor(),
  updateActor
);

router.get(
  "/actors",
  isUser(),
  getActors
);

router.get(
  "/actors/:id",
  isUser(),
  getActor
);

router.delete(
  "/actors/:id",
  isAdmin(),
  eraseActor
);

router.get(
  "/actors/:id/contents",
  isUser(),
  getActorsContent
);

export default router;
