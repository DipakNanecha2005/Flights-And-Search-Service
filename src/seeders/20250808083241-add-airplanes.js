"use strict";

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
  await queryInterface.bulkInsert(
    "Airplanes",
    [
      {
        modelNumber: "Airbus A320neo",
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Airbus A321neo",
        capacity: 222,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing 737-800",
        capacity: 189,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing 737 MAX 8",
        capacity: 178,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Airbus A350-900",
        capacity: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing 787-8 Dreamliner",
        capacity: 256,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
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
  await queryInterface.bulkDelete("Airplanes", {
    modelNumber: {
      [Sequelize.Op.in]: [
        "Airbus A320neo",
        "Airbus A321neo",
        "Boeing 737-800",
        "Boeing 737 MAX 8",
        "Airbus A350-900",
        "Boeing 787-8 Dreamliner",
      ],
    },
  });
}
