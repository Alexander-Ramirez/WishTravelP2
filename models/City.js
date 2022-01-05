const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model {}

City.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    landmarks: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entertainment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    excursion_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    travel_time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'city',
  }
);

module.exports = City;
