import express from "express";
import CityRoutes from "./city-routes.js";
import FlightRoutes from "./flights-routes.js";
import AirportRoutes from "./airport-routes.js";

/**
 * Router for version-1 API endpoints.
 * @route /v1
 */
const router = express.Router();

router.use("/city", CityRoutes);
router.use("/flights", FlightRoutes);
router.use("/airports", AirportRoutes);

export default router;
