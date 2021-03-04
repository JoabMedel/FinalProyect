import express from "express";
import {addActor, eraseActor, getActor, getActors, getActorsContent, updateActor} from "../controllers/actors";
import jwtValidate from "express-jwt";
import {schemeActors,validate} from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";

const router = express.Router();

router.post(
        "/actors",
        validate(schemeActors),
        isUser(1),
        addActor
      
    );
    
router.put(
        "/actors/:id",
        validate(schemeActors),
        isEditor(1),
        updateActor
    );

router.get("/actors",
    isUser(1),
    getActors

    );

    router.get(
        "/actors/:id",
        isUser(1),
        getActor
    );

    router.delete(
        "/actors/:id",
        isAdmin(1),
        eraseActor
    );

    router.get("/actors/:id/contents",
    getActorsContent

    );

   

export default router;