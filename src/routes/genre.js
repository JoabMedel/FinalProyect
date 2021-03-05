import express from "express";
import {
    addDGenre,
    updateGenre,
    getGenres,
    getOneGenre,
    eraseGenre
} from "../controllers/genres";

const router = express.Router();

router.post("/genres",addDGenre);

router.put("/genres/:id",updateGenre);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get("/genres",getGenres);

router.get("/genres/:id",getOneGenre);

router.delete("/genres/:id",eraseGenre);

export default router;
