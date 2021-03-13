import express from "express";
import jwtValidate from "express-jwt";
import { validate, schemeGenre } from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";
import {
  addDGenre,
  updateGenre,
  getGenres,
  getOneGenre,
  eraseGenre,
} from "../controllers/genres";

const router = express.Router();

router.post(
  "/genres",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeGenre),
  addDGenre
);

router.put(
  "/genres/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeGenre),
  updateGenre
);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get(
  "/genres",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isUser(),
  getGenres
);

router.get(
  "/genres/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isUser(),
  getOneGenre
);

router.delete(
  "/genres/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isAdmin(),
  eraseGenre
);

export default router;
