import express from "express";
import { schemeepisode_list, validate } from "../middlewares/validators";
import { isAdmin, isEditor, isUser } from "../middlewares/roleAuth";
import {
  addepisode_list,
  eraseepisode_list,
  getepisode_lists,
  getepisode_list,
  updateepisode_list,
} from "../controllers/episode_list";

const router = express.Router();

router.post(
  "/episodelist",
  isEditor(),
  validate(schemeepisode_list),
  addepisode_list
);

router.put(
  "/episodelist/:id",
  isEditor(),
  validate(schemeepisode_list),
  updateepisode_list
);

router.get("/episodelist", isUser(), getepisode_lists);

router.get("/episodelist/:id", isUser(), getepisode_list);

router.delete("/episodelist/:id", isAdmin(), eraseepisode_list);

export default router;
