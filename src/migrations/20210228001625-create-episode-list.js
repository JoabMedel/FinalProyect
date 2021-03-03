'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('episode_lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      season_num: {
        type: Sequelize.INTEGER
      },
      episode_name: {
        type: Sequelize.STRING
      },
      content_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"contents",
          key:"id"
        }
      },
      release_date: {
        type: Sequelize.STRING
      },
      episode_rating: {
        type: Sequelize.NUMERIC
      },
      episode_num: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      last_updated: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      episode_imdb_link: {
        type: Sequelize.STRING
      },
      episode_score_votes: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('episode_lists');
  }
};