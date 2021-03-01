import express from "express";
import {addActor, updateActor} from "../controllers/actors";
import jwtValidate from "express-jwt";
import {schemeActors,validate} from "../middlewares/validators";

const router = express.Router();

router.post(
        "/actors",
        validate(schemeActors),
        addActor
    );
    
router.put(
        "/actors/:id",
        validate(schemeActors),
        updateActor
    );

router.get(
        "/actors",
        validate(schemeActors),
        updateActor
    );
export default router;