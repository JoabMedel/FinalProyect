import express from "express";
import jwtValidate from "express-jwt";
import { validate, schemeContentGenre } from "../middlewares/validators";
import {isAdmin,isEditor} from "../middlewares/roleAuth";
import {
  addContentGenres,
  updateContentgender,
  getContentGenders,
  getOneContentGender,
  eraseContentGender,
} from "../controllers/contentGenres";

const router = express.Router();

router.post(
  "/content-genres",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeContentGenre),
  addContentGenres
);

router.put(
  "/content-genres/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeContentGenre),
  updateContentgender
);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get(
  "/content-genres",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  getContentGenders
);

router.get(
  "/content-genres/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  getOneContentGender
);

router.delete(
  "/content-genres/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isAdmin(),
  eraseContentGender
);

export default router;
