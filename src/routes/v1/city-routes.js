import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  update,
} from "../../controllers/city-controller.js";
import {
  validateCityId,
  validateCityName,
} from "../../middlewares/city-middleware.js";

/**
 * Router for City endpoints.
 * @route /city
 */
const router = express.Router();

router.get("/:id", validateCityId, get);
router.post("/", validateCityName, create);
router.patch("/:id", validateCityId, validateCityName, update);
router.delete("/:id", validateCityId, remove);
router.get("/", getAll);

export default router;
