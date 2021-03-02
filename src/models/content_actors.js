'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_actors extends Model {
    static associate(models) {
      this.belongsTo(models.actors,{
        foreignKey:"id"
      });
      this.belongsTo(models.contents,{
        foreignKey:"content_id"
      })
    }
  };
  content_actors.init({
    actor_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'content_actors',
  });
  return content_actors;
};