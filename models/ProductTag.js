const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
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
    // reference products id
    product_id: {
      // integer
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // tag id column
    tag_id:{
      // integer
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
