import express from "express";
import { getContents } from "../controllers/contents";


const router = express.Router();

router.get(
        "/contents/:id/actors",
        getContents,
    );
    
    

export default router;