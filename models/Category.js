const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define id column
    id: {
      // integer
      type: DataTypes.INTEGER,
      // doens't allow null values
      allowNull: false,
      // set as primary key
      primaryKey:true,
      // autoincrement
      autoIncrement: true
    },
    // define category_name column
    category_name :{
      // string
      type: DataTypes.STRING,
      // doesnt allow null values
      allowNull: false
    }
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
