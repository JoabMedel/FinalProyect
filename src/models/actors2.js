'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Actors2.init({
    name: DataTypes.STRING,
    createdAt:false,
    last_update:'updateTimestamp'
  }, {
    sequelize,
    modelName: 'Actors2',
  });
  return Actors2;
};