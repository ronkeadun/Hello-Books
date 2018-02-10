module.exports = {

  up: (queryInterface, Sequelize) =>

    queryInterface.createTable('books', {

      id: {

        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER,

      },

      isbn: {

        allowNull: false,

        unique: true,

        type: Sequelize.INTEGER,

      },

      title: {

        type: Sequelize.STRING,

        allowNull: false,

      },

      author: {

        type: Sequelize.STRING,

        allowNull: false,

      },

      description: {

        type: Sequelize.TEXT,

        allowNull: false,

      },

      image: {

        type: Sequelize.TEXT,

        allowNull: true,

      },

      status: {

        type: Sequelize.BOOLEAN,

        defaultValue: true,

        allowNull: true,

      },

      quantity: {

        type: Sequelize.INTEGER,

        allowNull: false,

      },

      categoryId: {

        type: Sequelize.INTEGER,

        onDelete: 'CASCADE',

        references: {

          model: 'categories',

          key: 'id',

        },

        allowNull: true,

      },

      createdAt: {

        allowNull: false,

        type: Sequelize.DATE,

      },

      updatedAt: {

        allowNull: false,

        type: Sequelize.DATE,

      },

    }),


  down: (queryInterface , Sequelize) => {

    queryInterface.dropTable('books');

  },

};