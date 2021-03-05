import express from "express";
import {
    addContentGenres,
    updateContentgender,
    getContentGenders,
    getOneContentGender,
    eraseContentGender
} from "../controllers/contentGenres";

const router = express.Router();

router.post("/content-genres",addContentGenres);

router.put("/content-genres/:id",updateContentgender);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get("/content-genres",getContentGenders);

router.get("/content-genres/:id",getOneContentGender);

router.delete("/content-genres/:id",eraseContentGender);

export default router;
