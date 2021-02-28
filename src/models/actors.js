'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actors extends Model {
    static associate(models) {
      this.belongsToMany(models.contents,{
        through:"content_actors",
        foreignKey:"actor_id"
      });
    }
  };
  actors.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'actors',
  });
  return actors;
};