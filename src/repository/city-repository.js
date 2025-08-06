import { where } from "sequelize";
import db from "../models/index.js";
const { City } = db;

export class CityRepository {
  /**
   * Creates a new city record in the database.
   * @param {String} name - City name
   */
  async createCity(name) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a city record by its id.
   * @param {String} cityId - City id
   */
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
