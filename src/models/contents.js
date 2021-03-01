'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents extends Model {
    static associate(models) {
      this.belongsToMany(models.directors,{
        through:"content_directors",
        foreignKey:"content_id"
      });
      this.hasMany(models.episode_lists,{
        foreignKey:"content_id"
      });
      this.belongsTo(models.content_types, {
        foreignKey:"content_type_id"
      });
      this.belongsTo(models.content_ratings,{
        foreignKey:"content_rating_id"
      });
      this.belongsToMany(models.actors,{
        through:"content_actors",
        foreignKey:"content_id"
      });
      this.belongsToMany(models.genres,{
        through:"content_genres",
        foreignKey:"content_id"
      })
    }
  };
  contents.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    total_seasons: DataTypes.INTEGER,
    imdb_score: DataTypes.NUMERIC,
    release_dates: DataTypes.STRING,
    play_time: DataTypes.STRING,
    content_rating: DataTypes.INTEGER,
    total_episodes: DataTypes.INTEGER,
    content_type: DataTypes.INTEGER,
    imdb_link: DataTypes.STRING,
    imdb_score_votes: DataTypes.INTEGER,
    rating_details: DataTypes.JSON,
    languages: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contents',
  });
  return contents;
};