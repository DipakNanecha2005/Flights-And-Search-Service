import express from "express";
import {
  create,
  get,
  remove,
  update,
} from "../../controllers/city-controller.js";

const router = express.Router();

router.get("/:id", get);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

export default router;
