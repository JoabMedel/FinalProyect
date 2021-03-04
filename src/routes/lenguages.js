import express from "express";
import {} from "../controllers/actors";
import jwtValidate from "express-jwt";
import {schemeLanguages,validate} from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";
import {  addLanguages, eraseLanguages, getLanguage, getLanguages, updateLanguages } from "../controllers/lenguages";

const router = express.Router();

router.post(
        "/Languages",
        validate(schemeLanguages),
        isUser(1),
        addLanguages
      
    );
    
router.put(
        "/Languages/:id",
        validate(schemeLanguages),
        isEditor(1),
        updateLanguages
    );

router.get("/Languages",
    isUser(1),
    getLanguages

    );

    router.get(
        "/Languages/:id",
        isUser(1),
        getLanguage
    );

    router.delete(
        "/Languages/:id",
        isAdmin(1),
        eraseLanguages
    );

   

export default router;