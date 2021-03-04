import express from "express";
import {} from "../controllers/actors";
import jwtValidate from "express-jwt";
import {schemecontent_directors,validate} from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";
import {  addcontent_directors, erasecontent_directors, getcontent_director, getcontent_directors, updatecontent_directors } from "../controllers/contentDirectors";

const router = express.Router();

router.post(
        "/contentdirectors",
        validate(schemecontent_directors),
        isUser(1),
        addcontent_directors
      
    );
    
router.put(
        "/contentdirectors/:id",
        validate(schemecontent_directors),
        isEditor(1),
        updatecontent_directors
    );

router.get("/contentdirectors",
    isUser(1),
    getcontent_directors

    );

    router.get(
        "/contentdirectors/:id",
        isUser(1),
        getcontent_director
    );

    router.delete(
        "/contentdirectors/:id",
        isAdmin(1),
        erasecontent_directors
    );

   

export default router;



