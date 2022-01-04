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
    cityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.STRING,
    },
    landmarks: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    entertainment: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'city',
  }
);

module.exports = City;
