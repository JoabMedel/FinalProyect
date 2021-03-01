'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_genres extends Model {
    static associate(models) {
      this.belongsTo(models.genres,{
        foreignKey:"genre_id"
      });
      this.belongsTo(models.contents,{
        foreignKey:"content_id"
      });
    }
  };
  content_genres.init({
    genre_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'content_genres',
  });
  return content_genres;
};