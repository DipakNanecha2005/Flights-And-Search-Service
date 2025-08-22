import { ClientError } from "../utils/errors/Client-Error.js";

/**
 * Middleware - Validates city id parameter.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
export const validateCityId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(
      new ClientError(
        "AttributeNotFound",
        "City id not found in the request.",
        "Please provide city id.",
        404
      )
    );
  }

  if (Number(id) <= 0) {
    return next(
      new ClientError(
        "InvalidAttribute",
        "Invalid city id in the request.",
        "A non-negative city id is required.",
        404
      )
    );
  }

  next();
};

/**
 * Middleware - Validates city name from body object.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
export const validateCityName = (req, res, next) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return next(
      new ClientError(
        "AttributeNotFound",
        "City name not found or invalid name in the request.",
        "Please provide city name.",
        404
      )
    );
  }

  next();
};
