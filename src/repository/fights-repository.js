const { Flights } = (await import("../models/index.js")).default;
import { Op } from "sequelize";

/**
 * This Repository class interact with the Flight model.
 *
 * Handles all data-access-level operations (no business logic).
 */
class FlightRepository {
  /**
   * Fetches a flight from the database by its ID.
   * @param {number | string} flightId - Flight id
   */
  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      if (!flight) {
        const error = new Error(`Flight with id ${flightId} not found.`);
        error.statusCode = 404;
        throw error;
      }

      return flight;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Inserts a new flight record into the database.
   * @param {{
   *  flightNumber: string,
   *  airplaneId: number,
   *  departureAirportId: number,
   *  arrivalAirportId: number,
   *  departureTime: string,
   *  arrivalTime: string,
   *  price: number
   * }} data - Flight creation payload.
   */
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      error.message = `Failed to create flight. ${error.message}`;
      throw error;
    }
  }

  /**
   * Updates a flight record by its ID.
   * @param {number | string} flightId - Flight id
   * @param {{
   *  flightNumber?: string,
   *  airplaneId?: number,
   *  departureAirportId?: number,
   *  arrivalAirportId?: number,
   *  departureTime?: string,
   *  arrivalTime?: string,
   *  price?: number
   * }}  data - Flight updation payload.
   */
  async updateFlight(flightId, data) {
    try {
      const [updated] = await Flights.update(data, {
        where: {
          id: flightId,
        },
      });
      if (!updated) {
        const error = new Error(
          `Flight with id ${flightId} not found or no update occurred.`
        );
        error.statusCode = 404;
        throw error;
      }
      const flight = await this.getFlight(flightId);
      return flight;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a flight record by its ID.
   * @param {number} flightId - Flight id
   */
  async deleteFlight(flightId) {
    try {
      const deleted = await Flights.destroy({
        where: {
          id: flightId,
        },
      });
      if (!deleted) {
        const error = new Error(`Flight with id ${flightId} not found.`);
        error.statusCode = 404;
        throw error;
      }

      return deleted;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Helper function for creating filter object
   * @param {{
   *  arrivalAirportId?: number,
   *  departureAirportId?: number,
   *  minPrice?: number,
   *  maxPrice?: number,
   * }} [data] - Raw filter object
   */
  #createFilter(data) {
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice || data.maxPrice) {
      const priceFilter = {};
      if (data.minPrice) priceFilter[Op.gte] = data.minPrice;
      if (data.maxPrice) priceFilter[Op.lte] = data.maxPrice;

      if (Object.getOwnPropertySymbols(priceFilter).length > 0) {
        filter.price = priceFilter;
      }
    }

    return filter;
  }

  /**
   * Fetches all the flights from the database.
   * @param {{
   *  arrivalAirportId?: number,
   *  departureAirportId?: number,
   *  minPrice?: number,
   *  maxPrice?: number,
   * }} [filter] - optional filter object
   */
  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);

      const flights = await Flights.findAll({
        where: filterObject,
      });

      return flights;
    } catch (error) {
      throw error;
    }
  }
}

/**
 * Singleton instance of {@link FlightRepository}.
 *
 * Handles all data-access-level operations (no business logic).
 */
export const flightRepositoryInstance = new FlightRepository();
