import { cityRepositoryInstance } from "../repository/city-repository.js";
import { ServiceError } from "../utils/errors/Service-Error.js";

/**
 * The Service layer for City operations.
 *
 * Handles business logic, validation, and delegates to the repository.
 */
class CityService {
  /* Private field */
  #cityRepository;

  constructor() {
    this.#cityRepository = cityRepositoryInstance;
  }

  /**
   * Retrieves a city by its ID.
   * @param {number | string} cityId - City id
   */
  async getCity(cityId) {
    try {
      const city = await this.#cityRepository.getCity(cityId);

      return city;
    } catch (error) {
      if (["AttributeNotFound", "NotFoundError"].includes(error.name)) {
        throw error;
      }

      throw new ServiceError(
        `Failed to retrieve city with ID ${cityId}.`,
        error.message
      );
    }
  }

  /**
   * Creates a new city.
   * @param {{ name: string }} data - Body object
   */
  async createCity(data) {
    try {
      const city = await this.#cityRepository.createCity(data);

      return city;
    } catch (error) {
      if (["AttributeNotFound", "NotFoundError"].includes(error.name)) {
        throw error;
      }

      throw new ServiceError("Failed to create city.", error.message);
    }
  }

  /**
   * Updates an existing city by ID.
   * @param {number | string} cityId - City id
   * @param {{ name: string }} data - Body object
   */
  async updateCity(cityId, data) {
    try {
      const city = await this.#cityRepository.updateCity(cityId, data);

      return city;
    } catch (error) {
      if (["AttributeNotFound", "ValidationError"].includes(error.name)) {
        throw error;
      }

      throw new ServiceError(
        `Failed to update city with ID ${cityId}.`,
        error.message
      );
    }
  }

  /**
   * Deletes a city by ID.
   * @param {number | string} cityId - City id
   */
  async deleteCity(cityId) {
    try {
      const response = await this.#cityRepository.deleteCity(cityId);

      return response;
    } catch (error) {
      if (["AttributeNotFound", "NotFoundError"].includes(error.name)) {
        throw error;
      }

      throw new ServiceError(
        `Failed to delete city with ID ${cityId}.`,
        error.message
      );
    }
  }

  /**
   * Retrieves all cities.
   * @param {Object & { name: string}} [filter] - optional filter object
   */
  async getAllCities(filter) {
    try {
      const cities = await this.#cityRepository.getAllCities({
        name: filter?.name,
      });

      return cities;
    } catch (error) {
      if (["AttributeNotFound", "NotFoundError"].includes(error.name)) {
        throw error;
      }

      throw new ServiceError("Failed to fetch cities.", error.message);
    }
  }
}

/**
 * Singleton instance of {@link CityService}.
 *
 * Provides the service layer methods to handle City operations.
 */
const CityServiceinstance = new CityService();

export default CityService;
export { CityServiceinstance as CityService };
