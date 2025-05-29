'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Flight, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE',
      });
    }
  }
  Airplane.init({
    modelNumber: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};