import { FlightService } from "../services/flights-service.js";

/**
 * Create Flight
 * @route POST /api/v1/flights
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Admin
 */
export const create = async (req, res) => {
  try {
    const flight = await FlightService.createFlight(req.body);
    res.status(201).json({
      flight,
      success: true,
      message: "Successfully created a flight",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cannot create flight right now.",
      error: error.message,
      success: false,
    });
  }
};
