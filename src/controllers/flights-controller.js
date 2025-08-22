import { FlightService } from "../services/flights-service.js";
import { Log } from "../utils/Log.js";

/**
 * Get a flights
 * @route GET /api/v1/flights/:id
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Public
 */
export const get = async (req, res) => {
  try {
    const flight = await FlightService.getFlight(req.params.id);
    res.status(200).json({
      data: flight,
      success: true,
      error: {},
      message: "Successfully fetched a flight",
    });
  } catch (error) {
    Log.error(error);
    res.status(error.statusCode).json({
      message: error.message,
      error: error.explanation,
      data: {},
      success: false,
    });
  }
};

/**
 * Create a flight
 * @route POST /api/v1/flights
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Admin
 */
export const create = async (req, res) => {
  try {
    const flightCreationObject = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
    };
    const flight = await FlightService.createFlight(flightCreationObject);

    res.status(201).json({
      data: flight,
      success: true,
      error: {},
      message: "Successfully created a flight",
    });
  } catch (error) {
    Log.error(error);
    res.status(error.statusCode).json({
      message: error.message,
      error: error.explanation,
      data: {},
      success: false,
    });
  }
};

/**
 * Update a flight
 * @route PATCH /api/v1/flights/:id
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Authorized
 */
export const update = async (req, res) => {
  try {
    const response = await FlightService.updateFlight(req.params.id, req.body);

    res.status(201).json({
      data: response,
      success: true,
      error: {},
      message: "Successfully updated a flight",
    });
  } catch (error) {
    Log.error(error);
    res.status(error.statusCode ?? 500).json({
      message: error.message,
      error: error.explanation ?? "Not able to update a flight.",
      data: {},
      success: false,
    });
  }
};

/**
 * Get all flights
 * @route GET /api/v1/flights
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Public
 */
export const getAll = async (req, res) => {
  try {
    const flights = await FlightService.getAllFlights(req.query);
    res.status(200).json({
      data: flights,
      success: true,
      error: {},
      message: "Successfully fetched all the flights",
    });
  } catch (error) {
    Log.error(error);
    res.status(error.statusCode).json({
      message: error.message,
      error: error.explanation,
      data: {},
      success: false,
    });
  }
};
