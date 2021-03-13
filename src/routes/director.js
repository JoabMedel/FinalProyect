import express from "express";
import jwtValidate from "express-jwt";
import { validate, schemeDirectors } from "../middlewares/validators";
import {isAdmin,isEditor,isUser} from "../middlewares/roleAuth";
import {
  addDirectors,
  updateDirector,
  getDirectors,
  getOneDirector,
  eraseDirector,
} from "../controllers/directors";
const router = express.Router();

router.post(
  "/directors",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeDirectors),
  addDirectors
);

router.put(
  "/directors/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeDirectors),
  updateDirector
);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get(
  "/directors",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isUser(),
  getDirectors
);

router.get(
  "/directors/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isUser(),
  getOneDirector
);

router.delete(
  "/directors/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isAdmin(),
  eraseDirector
);

export default router;
