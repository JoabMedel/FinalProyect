import express from "express";
import jwtValidate from "express-jwt";
import { validate, schemeContentType } from "../middlewares/validators";
import {isAdmin,isEditor,isUser} from "../middlewares/roleAuth";
import {
  addContentType,
  updateContenType,
  getContentTypes,
  getOneContentType,
  eraseContentType,
} from "../controllers/contentType";
const router = express.Router();

router.post(
  "/content-type",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeContentType),
  addContentType
);

router.put(
  "/content-type/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeContentType),
  updateContenType
);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get(
  "/content-type",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isUser(),
  getContentTypes
);

router.get(
  "/content-type/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isUser(),
  getOneContentType
);

router.delete(
  "/content-type/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isAdmin(),
  eraseContentType
);

export default router;
