'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_directors extends Model {
    static associate(models) {
      this.belongsTo(models.directors,{
        foreignKey:"director_id"
      });
      this.belongsTo(models.contents,{
        foreignKey:"content_id"
      });
    }
  };
  content_directors.init({
    director_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'content_directors',
  });
  return content_directors;
};