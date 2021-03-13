import express from "express";
import {} from "../controllers/actors";
import jwtValidate from "express-jwt";
import { schemecontent_directors, validate } from "../middlewares/validators";
import { isAdmin, isEditor } from "../middlewares/roleAuth";
import {
  addcontent_directors,
  erasecontent_directors,
  getcontent_director,
  getcontent_directors,
  updatecontent_directors,
} from "../controllers/contentDirectors";

const router = express.Router();

router.post(
  "/contentdirectors",
  validate(schemecontent_directors),
  isEditor(),
  addcontent_directors
);

router.put(
  "/contentdirectors/:id",
  validate(schemecontent_directors),
  isEditor(),
  updatecontent_directors
);

router.get(
  "/contentdirectors",
  isEditor(),
  getcontent_directors
);

router.get(
  "/contentdirectors/:id",
  isEditor(),
  getcontent_director
);

router.delete(
  "/contentdirectors/:id",
  isAdmin(),
  erasecontent_directors
);

export default router;
