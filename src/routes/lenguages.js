import express from "express";
import jwtValidate from "express-jwt";
import { schemeLanguages, validate } from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";
import {
  addLanguages,
  eraseLanguages,
  getLanguage,
  getLanguages,
  updateLanguages,
} from "../controllers/lenguages";

const router = express.Router();

router.post(
  "/Languages",
  validate(schemeLanguages),
  isEditor(),
  addLanguages
);

router.put(
  "/Languages/:id",
  validate(schemeLanguages),
  isEditor(),
  updateLanguages
);

router.get(
  "/Languages",
  isUser(),
  getLanguages
);

router.get(
  "/Languages/:id",
  isUser(),
  getLanguage
);

router.delete(
  "/Languages/:id",
  isAdmin(),
  eraseLanguages
);

export default router;
