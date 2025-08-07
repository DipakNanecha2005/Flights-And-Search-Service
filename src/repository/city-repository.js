import db from "../models/index.js";
const { City } = db;

/**
 * This Repository class interact with the City model.
 *
 * Handles all data-access-level operations (no business logic).
 */
class CityRepository {
  /**
   * Fetches a city from the database by its ID.
   * @param {String} cityId - City id
   */
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Inserts a new city record into the database.
   * @param {Object} data - Body object
   */
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates a city record by its ID.
   * @param {String} cityId - City id
   * @param {Object}  data - Body object
   */
  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a city record by its ID.
   * @param {String} cityId - City id
   */
  async deleteCity(cityId) {
    try {
      const deleted = await City.destroy({
        where: {
          id: cityId,
        },
      });
      return deleted;
    } catch (error) {
      throw error;
    }
  }
}

export const cityRepositoryInstance = new CityRepository();
