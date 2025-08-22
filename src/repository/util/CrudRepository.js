import { Log } from "../../utils/Log.js";
import { Model } from "sequelize";

/**
 * Base class for performing CRUD operations on a Sequelize model.
 */
export class CrudRepository {
  // private field
  /** @type {import("sequelize").ModelStatic<Model>} */
  #model;

  /**
   * @param {import("sequelize").ModelStatic<Model>} model - Sequelize model instance.
   */
  constructor(model) {
    this.#model = model;
  }

  /**
   * Fetch a single record by ID.
   * @param {number} modelId - Model id
   */
  async get(modelId) {
    try {
      const response = await this.#model.findByPk(modelId);
      return response;
    } catch (error) {
      Log.error(error);
      throw error;
    }
  }

  /**
   * Inserts a new record into the database.
   * @param {Object} data - The payload for creating the record.
   */
  async create(data) {
    try {
      const response = await this.#model.create(data);
      return response;
    } catch (error) {
      Log.error(error);
      throw error;
    }
  }

  /**
   * Updates a record by ID with the given data.
   * @param {number} modelId - Model id
   * @param {Object} data - The payload for updating the record.
   */
  async update(modelId, data) {
    try {
      const [updated] = await this.#model.update(data, {
        where: {
          id: modelId,
        },
      });
      if (!updated) {
        return null;
      }

      const response = await this.get(modelId);
      return response;
    } catch (error) {
      Log.error(error);
      throw error;
    }
  }

  /**
   * Deletes a record by ID.
   * @param {number} modelId - Model id
   */
  async delete(modelId) {
    try {
      const deleted = await this.#model.destroy({
        where: {
          id: modelId,
        },
      });
      return deleted;
    } catch (error) {
      Log.error(error);
      throw error;
    }
  }

  /**
   * Fetches all records from the database.
   */
  async getAll() {
    try {
      const response = await this.#model.findAll();
      return response;
    } catch (error) {
      Log.error(error);
      throw error;
    }
  }
}
