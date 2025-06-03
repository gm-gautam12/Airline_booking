'use strict';
import { flightSeatTypes } from '../utils/common/index.js';
const { BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS } = flightSeatTypes;
/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
   */
  await queryInterface.bulkInsert('Seats', [
    {
      airplaneId: 1,
      row: 1,
      col: "A",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 2,
      row: 2,
      col: "C",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 3,
      row: 2,
      col: "B",
      type: BUSINESS,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 4,
      row: 1,
      col: "E",
      type: FIRST_CLASS,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 5,
      row: 3,
      col: "D",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      airplaneId: 6,
      row: 3,
      col: "C",
      type: PREMIUM_ECONOMY,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
};

export const down = async (queryInterface, Sequelize) => {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */ 
};
