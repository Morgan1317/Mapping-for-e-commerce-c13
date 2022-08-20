const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
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
    // tagname column
    tag_name: {
      // is string
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
