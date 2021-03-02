import express from "express";
import {addActor, eraseActor, getActor, getActors, updateActor} from "../controllers/actors";
import jwtValidate from "express-jwt";
import {schemeActors,validate} from "../middlewares/validators";

const router = express.Router();

router.post(
        "/actors",
        addActor
    );
    
router.put(
        "/actors/:id",
        validate(schemeActors),
        updateActor
    );

router.get(
        "/actors",
        getActors
    );

    router.get(
        "/actors/:id",
        validate(schemeActors),
        getActor
    );

    router.delete(
        "/actors/:id",
        validate(schemeActors),
        eraseActor
    );

    

export default router;