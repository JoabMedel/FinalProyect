'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('content_actors', {
      id: {
        type: Sequelize.INTEGER,
        references:{
          model:"actors",
          key:"id"
        }
      },
      content_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"contents",
          key:"id"
        }
      },
      last_updated: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
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
    await queryInterface.dropTable('content_actors');
  }
};