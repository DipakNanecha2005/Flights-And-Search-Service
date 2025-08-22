/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {typeof import('sequelize')} Sequelize
 */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Flights", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    flightNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    airplaneId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    departureAirportId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    arrivalAirportId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    arrivalTime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    departureTime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    boardingGate: {
      type: Sequelize.STRING,
    },
    totalSeats: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {typeof import('sequelize')} Sequelize
 */
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Flights");
}
