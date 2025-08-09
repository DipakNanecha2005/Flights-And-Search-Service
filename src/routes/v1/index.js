import express from "express";
import CityRoutes from "./city-routes.js";
import FlightRoutes from "./flights-routes.js";

/**
 * Router for version-1 API endpoints.
 */
const router = express.Router();

router.use("/city", CityRoutes);
router.use("/flights", FlightRoutes);

export default router;
