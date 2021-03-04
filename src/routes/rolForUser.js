import express from "express";
import {addRoleUser,updateRoleUser} from "../controllers/roles";
import {validate,schemeAddRolUser,schemeUpdatRolUser} from "../middlewares/validators";
import jwtValidate from "express-jwt";

const router = express.Router();
router.post(
        "/users/:userID/roles/:rolesID",
        jwtValidate({secret: process.env.SECRET_KEY, algorithms: ['HS384'] }),
        validate(schemeAddRolUser),
        addRoleUser
    );

router.patch(
        "/roleUser/:id",
        jwtValidate({secret: process.env.SECRET_KEY, algorithms: ['HS384'] }),
        validate(schemeUpdatRolUser),
        updateRoleUser
    );


export default router;