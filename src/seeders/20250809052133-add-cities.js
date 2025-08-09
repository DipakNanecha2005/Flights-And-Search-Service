/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {typeof import('sequelize')} Sequelize
 */
export async function up(queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
   */
  await queryInterface.bulkInsert("Cities", [
    {
      name: "Ahmedabad",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Surat",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vadodara",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Mumbai",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Delhi",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {typeof import('sequelize')} Sequelize
 */
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  await queryInterface.bulkDelete("Cities", {
    name: {
      [Sequelize.Op.in]: ["Ahmedabad", "Surat", "Vadodara", "Mumbai", "Delhi"],
    },
  });
}
