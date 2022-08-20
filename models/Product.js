// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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
    // define productname column
    product_name :{
      // string
      type: DataTypes.STRING,
      // doesnt allow null values
      allowNull: false
    },
    // price column
    price :{
      // decimal
      type: DataTypes.DECIMAL,
      // doesn't allow null values
      allowNull: false,
      // validate value is a decimal 
      validate: {
        isDecimal: true
      }
    },
    // stock column
    stock: {
      // integer
      type: DataTypes.INTEGER,
      // doens't allow null values
      allowNull: false,
      // set default to 10 
      defaultValue: 10,
       // validate value is numeric 
      validate: {
        isNumeric: true
      }
    },
    // category_id column
    category_id: {
      // integer
      type: DataTypes.INTEGER,
      // reference category models id
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
