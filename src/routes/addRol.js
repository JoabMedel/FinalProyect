import express from "express";
import {addRole,updateRole} from "../controllers/roles";
import jwtValidate from "express-jwt";
import {schemeRol,validate} from "../middlewares/validators";

const router = express.Router();

router.post(
        "/roles",
        jwtValidate({secret: process.env.SECRET_KEY, algorithms: ['HS384'] }),
        validate(schemeRol),
        addRole
    );
    
router.patch(
        "/roles/:id",
        jwtValidate({secret: process.env.SECRET_KEY, algorithms: ['HS384'] }),
        validate(schemeRol),
        updateRole
    );

export default router;

