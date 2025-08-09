import express from "express";
import { create } from "../../controllers/flights-controller.js";

/**
 * Router for flight endpoints.
 */
const router = express.Router();

router.post("/", create);

export default router;
