const { Airplane } = (await import("../models/index.js")).default;

/**
 * This Repository class interact with the Airplane model.
 *
 * Handles all data-access-level operations (no business logic).
 */
class AirplaneRepository {
  /**
   * Fetches a airplane from the database by its ID.
   * @param {String} airplaneId - Airplane id
   */
  async getAirplane(airplaneId) {
    try {
      const airplane = await Airplane.findByPk(airplaneId);
      if (!airplane) {
        const error = new Error(`Airplane with id ${airplaneId} not found.`);
        error.statusCode = 404;
        throw error;
      }

      return airplane;
    } catch (error) {
      throw error;
    }
  }
}

/**
 * Singleton instance of {@link AirplaneRepository}.
 *
 * Handles all data-access-level operations (no business logic).
 */
export const airplaneRepositoryInstance = new AirplaneRepository();
