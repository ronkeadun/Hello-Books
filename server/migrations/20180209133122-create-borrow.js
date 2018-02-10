module.exports = {

  up: (queryInterface, Sequelize) => {

    queryInterface.createTable('borrows', {

      id: {

        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER,

      },

      userId: {

        type: Sequelize.INTEGER,

        onDelete: 'CASCADE',

        references: {

          model: 'users',

          key: 'id',

          as: 'userId',

        },

        allowNull: false,

      },

      bookId: {

        type: Sequelize.INTEGER,

        onDelete: 'CASCADE',

        references: {

          model: 'books',

          key: 'id',

          as: 'bookId',

        },

        allowNull: false,

      },

      returned: {

        type: Sequelize.BOOLEAN,

        defaultValue: false,

        allowNull: false,

      },

      dueDate: {

        type: Sequelize.DATE,

        allowNull: false,

      },

      actualReturnDate: {

        type: Sequelize.DATE,

        allowNull: false,

      },

      createdAt: {

        allowNull: false,

        type: Sequelize.DATE,

      },

      updatedAt: {

        allowNull: false,

        type: Sequelize.DATE,

      },

    });

  },


  down: (queryInterface, Sequelize) => {

    queryInterface.dropTable('borrows');

  },

};