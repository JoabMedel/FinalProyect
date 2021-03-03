'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_ratings extends Model {
    static associate(models) {
      this.belongsTo(models.content_types,{
        foreignKey:"content_type_id"
      });
      this.hasMany(models.contents,{
        foreignKey:"content_rating"
      })
    }
  };
  content_ratings.init({
    content_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    last_updated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'content_ratings',
  });
  return content_ratings;
};