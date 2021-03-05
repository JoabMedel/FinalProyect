import express from 'express';
import {
    addDirectors,
    updateDirector,
    getDirectors,
    getOneDirector,
    eraseDirector
} from "../controllers/directors";
const router = express.Router();

router.post("/directors",addDirectors);

router.put("/directors/:id",updateDirector);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get("/directors",getDirectors);

router.get("/directors/:id",getOneDirector);

router.delete("/directors/:id",eraseDirector);

export default router;