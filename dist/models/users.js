'use strict';

var {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Roles, {
        through: "UserRoles",
        foreignKey: "userId"
      });
      this.hasMany(models.ResetTokens, {
        foreignKey: "userId"
      });
    }

  }

  ;
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users'
  });
  return Users;
};