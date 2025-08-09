import { CityService } from "../services/city-service.js";

/**
 * Get City
 * @route GET /api/v1/city/:id
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Public
 */
export const get = async (req, res) => {
  try {
    const city = await CityService.getCity(req.params.id);
    res.status(200).json({ city, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cannot get city right now.",
      error: error.message,
      success: false,
    });
  }
};

/**
 * Create City
 * @route POST /api/v1/city
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Admin
 */
export const create = async (req, res) => {
  try {
    const city = await CityService.createCity(req.body);
    res.status(201).json({
      city,
      success: true,
      message: "Successfully created a city",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cannot create city right now.",
      error: error.message,
      success: false,
    });
  }
};

/**
 * Update City
 * @route PATCH /api/v1/city/:id
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Admin
 */
export const update = async (req, res) => {
  try {
    const response = await CityService.updateCity(req.params.id, req.body);

    res.status(200).json({
      response,
      success: true,
      message: "Successfully updated a city",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cannot update city right now.",
      error: error.message,
      success: false,
    });
  }
};

/**
 * Delete City
 * @route DELETE /api/v1/city/:id
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @access Admin
 */
export const remove = async (req, res) => {
  try {
    const response = await CityService.deleteCity(req.params.id);
    if (!response) {
      return res.status(500).json({
        success: response,
        message: "Internal server error | Cannot delete city right now",
      });
    }
    res.status(200).json({
      success: response,
      message: "Successfully deleted a city",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cannot delete city right now.",
      error: error.message,
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
    res.status(200).json({ cities, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cannot get cities right now.",
      error: error.message,
      success: false,
    });
  }
};
