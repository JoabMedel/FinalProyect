import express from "express";
import {
    addContentActor,
    updateContentActor,
    getContentActors,
    getOneContentActor,
    eraseContentActor
} from "../controllers/contentActors";

const router = express.Router();

router.post("/content-actors",addContentActor);

router.put("/content-actors/:id",updateContentActor);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get("/content-actors",getContentActors);

router.get("/content-actors/:id",getOneContentActor);

router.delete("/content-actors/:id",eraseContentActor);

export default router;