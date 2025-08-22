import { CrudRepository } from "./util/CrudRepository.js";

const { Airport } = (await import("../models/index.js")).default;

/**
 * This Repository class interact with the Airport model.
 *
 * Handles all data-access-level operations (no business logic).
 * @extends {CrudRepository}
 */
class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

/**
 * Singleton instance of {@link AirportRepository}.
 *
 * Handles all data-access-level operations (no business logic).
 */
export const AirportRepositoryInstance = new AirportRepository();
