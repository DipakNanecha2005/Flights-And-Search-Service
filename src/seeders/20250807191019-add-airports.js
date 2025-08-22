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
  await queryInterface.bulkInsert("Airports", [
    {
      name: "Sardar Vallabhbhai Patel International Airport",
      address: "Hansol, Ahmedabad, Gujarat 380003",
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Surat International Airport",
      address: "Surat - Dumas Rd, Gaviyer, Surat, Gujarat 395007",
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vadodara International Airport",
      address: "Civil Aerodrome, Harni Rd, Harni, Vadodara, Gujarat 390022",
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Chhatrapati Shivaji Maharaj International Airport",
      address: "Sahar, Mumbai, Maharashtra 400099",
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Indira Gandhi International Airport",
      address: "New Delhi, Delhi 110037",
      cityId: 5,
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
  await queryInterface.bulkDelete("Airports", {
    name: {
      [Sequelize.Op.in]: [
        "Sardar Vallabhbhai Patel International Airport",
        "Surat International Airport",
        "Vadodara International Airport",
        "Chhatrapati Shivaji Maharaj International Airport",
        "Indira Gandhi International Airport",
      ],
    },
  });
}
