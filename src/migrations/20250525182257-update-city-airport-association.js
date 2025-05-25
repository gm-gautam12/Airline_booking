/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  
  await queryInterface.addConstraint('Airports', {
    type: 'FOREIGN KEY',
    name: 'city_fkey_constraint',
    fields: ['cityId'],
    references: {
      table: 'cities',
      field: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });

};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.removeConstraint('Airports', 'city_fkey_constraint');
};
