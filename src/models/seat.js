'use strict';
import { Model } from 'sequelize';
import { flightSeatTypes } from '../utils/common/index.js';
const { BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS } = flightSeatTypes;
export default (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
      });
  
    }
  }
  Seat.init({
    row: {
      type:DataTypes.INTEGER,
      allowable: false,
    },
    col:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: [BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS],
      defaultValue: ECONOMY,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};