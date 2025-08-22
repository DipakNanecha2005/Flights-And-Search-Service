import { ClientError } from "../utils/errors/Client-Error.js";

/**
 * Middleware - Validates create flight body object.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
export const validateCreateFlight = (req, res, next) => {
  const {
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    departureTime,
    arrivalTime,
    price,
  } = req.body;

  const hasMissingFields = [
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    departureAirportId,
    departureTime,
    arrivalTime,
    price,
  ].some((field) => !field);
  if (hasMissingFields) {
    return next(
      new ClientError(
        "AttributeNotFound",
        "Required flight information is missing in the request.",
        "Please provide all required fields: flightNumber, airplaneId, departureAirportId, arrivalAirportId, departureTime, arrivalTime, price.",
        400
      )
    );
  }

  if (departureAirportId === arrivalAirportId) {
    return next(
      new ClientError(
        "InvalidAttribute",
        "Departure and arrival airports cannot be the same.",
        "Please choose different airports for departure and arrival.",
        400
      )
    );
  }

  if (isNaN(Date.parse(departureTime))) {
    return next(
      new ClientError(
        "InvalidAttribute",
        "Invalid format for departureTime.",
        "Please provide a valid ISO 8601 formatted date string for departureTime.",
        400
      )
    );
  }
  if (isNaN(Date.parse(arrivalTime))) {
    return next(
      new ClientError(
        "InvalidAttribute",
        "Invalid format for arrivalTime.",
        "Please provide a valid ISO 8601 formatted date string for arrivalTime.",
        400
      )
    );
  }

  if (price <= 0) {
    return next(
      new ClientError(
        "InvalidAttribute",
        "Invalid price value in the request.",
        "Price must be a non-negative number.",
        400
      )
    );
  }

  next();
};
