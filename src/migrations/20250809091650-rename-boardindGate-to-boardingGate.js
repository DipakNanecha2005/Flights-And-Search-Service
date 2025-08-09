/**
 * @param {typeof import('sequelize')} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
export async function up(queryInterface, Sequelize) {
  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */
  queryInterface.renameColumn("Flights", "boardindGate", "boardingGate");
}

/**
 * @param {typeof import('sequelize')} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
export async function down(queryInterface, Sequelize) {
  /**
   * Add reverting commands here.
   *
   * Example:
   * await queryInterface.dropTable('users');
   */
}
