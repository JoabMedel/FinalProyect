import express from "express";
import {
    addContentType,
    updateContenType,
    getContentTypes,
    getOneContentType,
    eraseContentType
} from "../controllers/contentType";
const router = express.Router();

router.post("/content-type",addContentType);

router.put("/content-type/:id",updateContenType);

//se pasa el query "limit" en el path para poner limite de datos a mostrar
router.get("/content-type",getContentTypes);

router.get("/content-type/:id",getOneContentType);

router.delete("/content-type/:id",eraseContentType);

export default router;