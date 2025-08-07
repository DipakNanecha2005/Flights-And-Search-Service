import express from "express";
import CityRoutes from "./city-routes.js";

const router = express.Router();

router.use("/city", CityRoutes);

export default router;
