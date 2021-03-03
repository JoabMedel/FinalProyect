'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      total_seasons: {
        type: Sequelize.INTEGER
      },
      imdb_score: {
        type: Sequelize.NUMERIC
      },
      release_dates: {
        type: Sequelize.STRING
      },
      play_time: {
        type: Sequelize.STRING
      },
      content_rating: {
        type: Sequelize.INTEGER,
        references:{
          model:"content_ratings",
          key:"id"
        }
      },
      total_episodes: {
        type: Sequelize.INTEGER
      },
      content_type: {
        type: Sequelize.INTEGER,
        references:{
          model:"content_types",
          key:"id"
        }
      },
      imdb_link: {
        type: Sequelize.STRING
      },
      last_updated: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      imdb_score_votes: {
        type: Sequelize.INTEGER
      },
      rating_details: {
        type: Sequelize.JSON
      },
      languages: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contents');
  }
};