const { Flights } = (await import("../models/index.js")).default;

/**
 * This Repository class interact with the Flight model.
 *
 * Handles all data-access-level operations (no business logic).
 */
class FlightRepository {
  /**
   * Fetches a flight from the database by its ID.
   * @param {String} flightId - Flight id
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
   * @param {String} flightId - Flight id
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
   * @param {String} flightId - Flight id
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
   * Fetches all the flights from the database.
   * @param {{
   *  name: String
   * }} [filter] - optional filter object
   */
  async getAllFlights(filter) {
    try {
      if (filter?.name) {
        const flights = await Flights.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });

        return flights;
      }

      const flights = await Flights.findAll();
      if (flights.length === 0) {
        const error = new Error("No flights found.");
        error.statusCode = 404;
        throw error;
      }

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
