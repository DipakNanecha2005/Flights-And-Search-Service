import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  update,
} from "../../controllers/city-controller.js";

const router = express.Router();

router.get("/:id", get);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);
router.get("/", getAll);

export default router;
