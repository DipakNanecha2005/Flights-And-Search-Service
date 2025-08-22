import { create, get, getAll, update } from "../../controllers/flights-controller.js";
import { validateCreateFlight } from "../../middlewares/flight-middleware.js";
import express from "express";

/**
 * Router for flight endpoints.
 * @route /flights
 */
const router = express.Router();

router.get("/:id", get);
router.post("/", validateCreateFlight, create);
router.patch("/:id", update);
router.get("/", getAll);

export default router;
