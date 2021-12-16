const { Model, DataTypes } = require('sequelize');

// we are calling require, passing in the file name, it is returning module.exports
//and assigning it to the sequelize variable
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
