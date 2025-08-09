import { Op } from "sequelize";
const { City } = (await import("../models/index.js")).default;

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
      if (!city) {
        const error = new Error(`City with id ${cityId} not found.`);
        error.statusCode = 404;
        throw error;
      }

      return city;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Inserts a new city record into the database.
   * @param {{name: String}} data - City creation payload.
   */
  async createCity(data) {
    try {
      const city = await City.create({ name: data.name });
      return city;
    } catch (error) {
      error.message = `Failed to create city. ${error.message}`;
      throw error;
    }
  }

  /**
   * Updates a city record by its ID.
   * @param {String} cityId - City id
   * @param {{
   *  name: String
   * }}  data - City updation payload.
   */
  async updateCity(cityId, data) {
    try {
      const [updated] = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      if (!updated) {
        const error = new Error(
          `City with id ${cityId} not found or no update occurred.`
        );
        error.statusCode = 404;
        throw error;
      }
      const city = await this.getCity(cityId);
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
      if (!deleted) {
        const error = new Error(`City with id ${cityId} not found.`);
        error.statusCode = 404;
        throw error;
      }

      return deleted;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Fetches all the cities from the database.
   * @param {{
   *  name: String
   * }} [filter] - optional filter object
   */
  async getAllCities(filter) {
    try {
      if (filter?.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });

        return cities;
      }

      const cities = await City.findAll();
      if (cities.length === 0) {
        const error = new Error("No cities found.");
        error.statusCode = 404;
        throw error;
      }

      return cities;
    } catch (error) {
      throw error;
    }
  }
}

/**
 * Singleton instance of {@link CityRepository}.
 *
 * Handles all data-access-level operations (no business logic).
 */
export const cityRepositoryInstance = new CityRepository();
