import express from "express";
import jwtValidate from "express-jwt";
import { validate, schemeContentActor } from "../middlewares/validators";
import { isAdmin, isEditor } from "../middlewares/roleAuth";
import {
  addContentActor,
  updateContentActor,
  getContentActors,
  getOneContentActor,
  eraseContentActor,
} from "../controllers/contentActors";

const router = express.Router();

router.post(
  "/content-actors",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeContentActor),
  addContentActor
);

router.put(
  "/content-actors/:id",
  jwtValidate({ secret: process.env.SECRET_KEY, algorithms: ["HS384"] }),
  isEditor(),
  validate(schemeContentActor),
  updateContentActor
);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get("/content-actors", isEditor(), getContentActors);

router.get("/content-actors/:id", isEditor(), getOneContentActor);

router.delete("/content-actors/:id", isAdmin(), eraseContentActor);

export default router;
