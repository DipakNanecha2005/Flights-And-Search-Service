import { cityRepositoryInstance } from "../repository/city-repository.js";

/**
 * The Service layer for City operations.
 *
 * Handles business logic, validation, and delegates to the repository.
 */
class CityService {
  // private field
  #cityRepository;

  constructor() {
    this.#cityRepository = cityRepositoryInstance;
  }

  /**
   * Retrieves a city by its ID.
   * @param {String} cityId - City id
   */
  async getCity(cityId) {
    try {
      const city = await this.#cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates a new city.
   * @param {Object} data - Body object
   */
  async createCity(data) {
    try {
      const city = await this.#cityRepository.createCity(data);
      return city;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates an existing city by ID.
   * @param {String} cityId - City id
   * @param {{
   *  name: String
   * }} data - Body object
   */
  async updateCity(cityId, data) {
    try {
      const city = await this.#cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a city by ID.
   * @param {String} cityId - City id
   */
  async deleteCity(cityId) {
    try {
      const response = await this.#cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves all cities.
   */
  async getAllCities(filter) {
    try {
      const cities = await this.#cityRepository.getAllCities({
        name: filter?.name,
      });
      return cities;
    } catch (error) {
      throw error;
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
