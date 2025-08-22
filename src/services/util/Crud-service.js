/**
 * Base class for performing CRUD service.
 *
 * Handles business logic, validation, and delegates to the repository.
 */
export class CrudService {
  // private field
  #repository;

  /**
   * Constructor to initialize the repository.
   * @param {Object} repository - Repository object
   */
  constructor(repository) {
    this.#repository = repository;
  }

  /**
   * Retrieves a record  by its ID.
   * @param {number | string} modelId - model id
   */
  async get(modelId) {
    try {
      const response = await this.#repository.get(modelId);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates a new record.
   * @param {Object} data - Record creation payload
   */
  async create(data) {
    try {
      const response = await this.#repository.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates a record by ID.
   * @param {number} modelId - City id
   * @param {Object} data - Record updation payload
   */
  async update(modelId, data) {
    try {
      const response = await this.#repository.update(modelId, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a record by ID.
   * @param {number} modelId - City id
   */
  async destroy(modelId) {
    try {
      const response = await this.#repository.destroy(modelId);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves all records.
   */
  async getAll() {
    try {
      const response = await this.#repository.getAll();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
