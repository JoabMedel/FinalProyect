'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genres extends Model {
    static associate(models) {
      this.belongsToMany(models.contents,{
        through:"content_genres",
        foreignKey:"genre_id"
      });
    }
  };
  genres.init({
    name: DataTypes.STRING,
    last_updated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'genres',
  });
  return genres;
};