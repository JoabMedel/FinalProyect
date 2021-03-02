'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_types extends Model {
    static associate(models) {
      this.hasMany(models.contents,{
        foreignKey:"content_type",
      });
      this.hasMany(models.content_ratings,{
        foreignKey:"content_type_id"
      })
    }
  };
  content_types.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'content_types',
  });
  return content_types;
};