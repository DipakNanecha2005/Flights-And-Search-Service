import { AirportRepositoryInstance } from "../repository/airport-repository.js";
import { CrudService } from "./util/Crud-service.js";

/**
 * @extends {CrudService}
 */
class AirportService extends CrudService {
  /**
   * Constructor to initialize the repository.
   */
  constructor() {
    /**
     * @param {typeof AirportRepositoryInstance} repository - Repository object
     */
    super(AirportRepositoryInstance);
  }
}

/**
 * Singleton instance of {@link AirportService}.
 *
 * Provides the service layer methods to handle Airport operations.
 */
const AirportServiceinstance = new AirportService();

export default AirportService;
export { AirportServiceinstance as AirportService };
