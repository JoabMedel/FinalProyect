import express from "express";
import { schemecontents, validate } from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";
import {
  addcontents,
  erasecontents,
  getOneContent,
  getcontents,
  updatecontents,
} from "../controllers/contents";

const router = express.Router();

router.get("/contents/:id", isUser(), getOneContent);

router.post("/contents", isUser(), addcontents);

router.put("/contents/:id",isEditor(), updatecontents);

router.get("/contents", isUser(), getcontents);

router.delete("/contents/:id", isAdmin(), erasecontents);

export default router;
