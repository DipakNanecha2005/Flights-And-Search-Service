import { AppError } from "../utils/errors/App-Error.js";

/**
 * Custom error middleware
 * @param {AppError} err - - The error object.
 * @param {import('express').Request} _ - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
export const errorMiddleware = (err, _, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error, Something went wrong.",
    error: err.explanation || "Something went wrong",
    data: {},
    success: false,
  });
};
