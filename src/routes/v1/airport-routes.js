import express from "express";
import { create, get, getAll } from "../../controllers/airport-controller.js";

/**
 * Router for airport endpoints.
 * @route /airports
 */
const router = express.Router();

router.get("/:id", get);
router.post("/", create);
router.get("/", getAll);

export default router;
