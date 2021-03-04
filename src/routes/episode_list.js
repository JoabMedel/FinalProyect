import express from "express";
import {schemeepisode_list,validate} from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";
import {  addepisode_list, eraseepisode_list, getepisode_lists, getepisode_list, updateepisode_list } from "../controllers/episode_list";

const router = express.Router();


    router.post(
        "/episodelist",
        isUser(1),
        addepisode_list
      
    );
    
router.put(
        "/episodelist/:id",
        isEditor(1),
        updateepisode_list
    );

router.get("/episodelist",
    isUser(1),
    getepisode_lists

    );

    router.get(
        "/episodelist/:id",
        isUser(1),
        getepisode_list
    );

    router.delete(
        "/episodelist/:id",
        isAdmin(1),
        eraseepisode_list
    );

export default router;


