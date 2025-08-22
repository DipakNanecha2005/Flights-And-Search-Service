import { CityService } from "../services/city-service.js";
import { Log } from "../utils/Log.js";

/**
 * Get a city
 * @route GET /api/v1/city/:id
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Public
 */
export const get = async (req, res) => {
  try {
    const city = await CityService.getCity(req.params.id);
    res.status(200).json({
      data: city,
      success: true,
      error: {},
      message: "Successfully fetched a city.",
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
 * Create a city
 * @route POST /api/v1/city
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Admin
 */
export const create = async (req, res) => {
  try {
    const city = await CityService.createCity(req.body);
    res.status(201).json({
      data: city,
      success: true,
      error: {},
      message: "Successfully created a city",
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
 * Update a city
 * @route PATCH /api/v1/city/:id
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Admin
 */
export const update = async (req, res) => {
  try {
    const response = await CityService.updateCity(req.params.id, req.body);

    res.status(200).json({
      data: response,
      success: true,
      error: {},
      message: "Successfully updated a city",
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
 * Delete a city
 * @route DELETE /api/v1/city/:id
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Admin
 */
export const remove = async (req, res) => {
  try {
    const response = await CityService.deleteCity(req.params.id);

    res.status(200).json({
      data: response,
      success: true,
      error: {},
      message: "Successfully deleted a city",
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
 * Get all cities
 * @route GET /api/v1/city/
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Public
 */
export const getAll = async (req, res) => {
  try {
    const cities = await CityService.getAllCities(req.query);
    res.status(200).json({
      data: cities,
      success: true,
      error: {},
      message: "Successfully fetched all the cities.",
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
