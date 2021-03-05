import express from "express";
import {} from "../controllers/actors";
import jwtValidate from "express-jwt";
import {schemecontent_ratings,validate} from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";
import {  addcontent_ratings, erasecontent_ratings, getcontent_rating, getcontent_ratings, updatecontent_ratings } from "../controllers/contentRatings";

const router = express.Router();

router.post(
        "/contentratings",
        validate(schemecontent_ratings),
        isUser(1),
        addcontent_ratings
      
    );
    
router.put(
        "/contentratings/:id",
        validate(schemecontent_ratings),
        isEditor(1),
        updatecontent_ratings
    );

router.get("/contentratings",
    isUser(1),
    getcontent_ratings

    );

    router.get(
        "/contentratings/:id",
        isUser(1),
        getcontent_rating
    );

    router.delete(
        "/contentratings/:id",
        isAdmin(1),
        erasecontent_ratings
    );

   

export default router;



