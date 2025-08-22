import { Op } from "sequelize";
import { ClientError } from "../utils/errors/Client-Error.js";
import { AppError } from "../utils/errors/App-Error.js";
import { ValidationError } from "../utils/errors/Validation-Error.js";
const { City } = (await import("../models/index.js")).default;

/**
 * This Repository class interact with the City model.
 *
 * Handles all data-access-level operations (no business logic).
 */
class CityRepository {
  /**
   * Fetches a city from the database by its ID.
   * @param {number | string} cityId - City id
   */
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      if (!city) {
        throw new ClientError(
          "AttributeNotFound",
          "Invalid city id in the request.",
          "Please check the ID again, No city record found.",
          404
        );
      }

      return city;
    } catch (error) {
      if (error instanceof ClientError) {
        throw error;
      }

      throw new AppError(
        "RepositoryError",
        "Cannot fetch city.",
        `Failed to fetch a city record: ${error.message}`,
        500
      );
    }
  }

  /**
   * Inserts a new city record into the database.
   * @param {{ name: string }} data - City creation payload.
   */
  async createCity(data) {
    try {
      const city = await City.create({ name: data.name });
      return city;
    } catch (error) {
      error.message = `Failed to create city, ${error.message}`;
      throw error;
    }
  }

  /**
   * Updates a city record by its ID.
   * @param {number | string} cityId - City id
   * @param {{ name: string }}  data - City updation payload.
   */
  async updateCity(cityId, data) {
    try {
      const [updated] = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      if (!updated) {
        throw new ClientError(
          "AttributeNotFound",
          "Invalid city id in the request or no update occurred.",
          "Please verify the city ID and ensure update data is valid.",
          404
        );
      }

      const city = await this.getCity(cityId);
      return city;
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        throw new ValidationError(error);
      }

      error.message = `Failed to update city, ${error.message}`;
      throw error;
    }
  }

  /**
   * Deletes a city record by its ID.
   * @param {number | string} cityId - City id
   */
  async deleteCity(cityId) {
    try {
      const deleted = await City.destroy({
        where: {
          id: cityId,
        },
      });
      if (!deleted) {
        throw new ClientError(
          "AttributeNotFound",
          "Invalid city id in the request or no delete occurred.",
          "Please verify the city ID.",
          404
        );
      }

      return deleted;
    } catch (error) {
      error.message = `Failed to delete city, ${error.message}`;
      throw error;
    }
  }

  /**
   * Fetches all the cities from the database.
   * @param {{ name: string }} [filter] - optional filter object
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
        if (cities.length === 0) {
          throw new AppError(
            "NotFoundError",
            "No cities found.",
            "The city list is currently empty.",
            404
          );
        }

        return cities;
      }

      const cities = await City.findAll();
      if (cities.length === 0) {
        throw new AppError(
          "NotFoundError",
          "No cities found.",
          "The city list is currently empty.",
          404
        );
      }

      return cities;
    } catch (error) {
      error.message = `Failed to fetch all the cities, ${error.message}`;
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
