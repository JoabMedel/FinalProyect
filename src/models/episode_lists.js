'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class episode_lists extends Model {
    static associate(models) {
      this.belongsTo(models.contents,{
        foreignKey:"content_id"
      });
    }
  };
  episode_lists.init({
    season_num: DataTypes.INTEGER,
    episode_name: DataTypes.STRING,
    content_id: DataTypes.INTEGER,
    release_date: DataTypes.STRING,
    episode_rating: DataTypes.NUMERIC,
    episode_num: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    episode_imdb_link: DataTypes.STRING,
    episode_score_votes: DataTypes.INTEGER,
    last_updated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'episode_lists',
  });
  return episode_lists;
};