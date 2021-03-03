'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class directors extends Model {
    static associate(models) {
      this.belongsToMany(models.contents,{
        through:"content_directors",
        foreignKey:"director_id"
      })
    }
  };
  directors.init({
    name: DataTypes.STRING,
    last_updated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'directors',
  });
  return directors;
};