import express from "express";
import {addActor, eraseActor, getActor, getActors, updateActor} from "../controllers/actors";
import jwtValidate from "express-jwt";
import {schemeActors,validate} from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";

const router = express.Router();

router.post(
        "/actors",
        addActor
    );
    
router.put(
        "/actors/:id",
        validate(schemeActors),
        isEditor,
        updateActor
    );

router.get("/actors",getActors

    );

    router.get(
        "/actors/:id",
        validate(schemeActors),
        isUser,
        getActor
    );

    router.delete(
        "/actors/:id",
        validate(schemeActors),
        isAdmin,
        eraseActor
    );

    

export default router;