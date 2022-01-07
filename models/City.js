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
    image1: {
      type: DataTypes.STRING,
    },
    image1Alt: {
      type: DataTypes.STRING,
    },
    image2: {
      type: DataTypes.STRING,
    },
    image3: {
      type: DataTypes.STRING,
    }
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
