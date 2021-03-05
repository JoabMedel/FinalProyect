import express from "express";
import { getContentsId } from "../controllers/contents";
import {schemecontents,validate} from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";
import {  addcontents, erasecontents, getcontent, getcontents, updatecontents } from "../controllers/contents";

const router = express.Router();

router.get(
        "/contents/:id/actors",
        getContentsId,
    );
    
    router.post(
        "/contents",
        isUser(1),
        addcontents
      
    );
    
router.put(
        "/contents/:id",
        updatecontents
    );

router.get("/contents",
    isUser(1),
    getcontents

    );

    router.get(
        "/contents/:id",
        isUser(1),
        getcontent
    );

    router.delete(
        "/contents/:id",
        isAdmin(1),
        erasecontents
    );

export default router;


