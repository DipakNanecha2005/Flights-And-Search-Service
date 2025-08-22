import { airplaneRepositoryInstance } from "../repository/airplane-repository.js";
import { flightRepositoryInstance } from "../repository/fights-repository.js";
import { compareTime } from "../utils/helper.js";

/**
 * The Service layer for Flight operations.
 *
 * Handles business logic, validation, and delegates to the repository.
 */
class FlightService {
  /* Private fields */
  #flightRepository;
  #airplaneRepository;

  constructor() {
    this.#flightRepository = flightRepositoryInstance;
    this.#airplaneRepository = airplaneRepositoryInstance;
  }

  /**
   * Retrieves a flight by its ID.
   * @param {number | string} flightId - Flight id
   */
  async getFlight(flightId) {
    try {
      const flight = await this.#flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates a new flight.
   * @param {{
   *  flightNumber: string,
   *  airplaneId: number,
   *  departureAirportId: number,
   *  arrivalAirportId: number,
   *  departureTime: string,
   *  arrivalTime: string,
   *  price: number
   * }} data - Body Object
   */
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        const error = new Error(
          `Arrival time cannot be less than departure time`
        );
        error.statusCode = 400;
        throw error;
      }

      const airplane = await this.#airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.#flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates an existing flight by ID.
   * @param {number | string} flightId - Flight id
   * @param {Object} data - Body object
   */
  async updateFlight(flightId, data) {
    try {
      const flight = await this.#flightRepository.updateFlight(flightId, data);
      return flight;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a flight by ID.
   * @param {number} flightId - Flight id
   */
  async deleteFlight(flightId) {
    try {
      const response = await this.#flightRepository.deleteFlight(flightId);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves all flights.
   * @param {Object} filter - Request query object
   */
  async getAllFlights(filter) {
    try {
      const flights = await this.#flightRepository.getAllFlights(filter);
      return flights;
    } catch (error) {
      throw error;
    }
  }
}

/**
 * Singleton instance of {@link FlightService}.
 *
 * Provides the service layer methods to handle Flight operations.
 */
const FlightServiceinstance = new FlightService();

export default FlightService;
export { FlightServiceinstance as FlightService };
