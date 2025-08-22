import { AirportService } from "../services/airport-service.js";
import { Log } from "../utils/Log.js";

/**
 * Get an airport
 * @route GET /api/v1/airports/:id
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Public
 */
export const get = async (req, res) => {
  try {
    const airport = await AirportService.get(req.params.id);
    res.status(201).json({
      data: airport,
      success: true,
      error: {},
      message: "Successfully fetched an airport.",
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
 * Create an airport
 * @route POST /api/v1/airports
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Admin
 */
export const create = async (req, res) => {
  try {
    const airport = await AirportService.create(req.body);
    res.status(201).json({
      data: airport,
      success: true,
      error: {},
      message: "Successfully created an airport.",
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
 * Get all the airports
 * @route GET /api/v1/airports
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Public
 */
export const getAll = async (req, res) => {
  try {
    const airport = await AirportService.getAll();
    res.status(201).json({
      airport,
      success: true,
      error: {},
      message: "Successfully fetched all the airports.",
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
