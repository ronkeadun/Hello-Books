module.exports = {

  up: (queryInterface, Sequelize) => {

    queryInterface.createTable('users', {

      id: {

        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER,

      },

      username: {

        type: Sequelize.STRING,

        allowNull: false,

        unique: true,

        validate: {

          is: /^[a-z0-9_-]+$/i,

        },

      },

      password: {

        type: Sequelize.STRING,

        allowNull: false,

      },

      email: {

        type: Sequelize.STRING,

        unique: true,

        isEmail: true,

        allowNull: false,

      },

      role: {

        type: Sequelize.STRING,

        defaultValue: 'normal',

        allowNull: false,

      },

      level: {

        type: Sequelize.STRING,

        defaultValue: 'bronze',

        allowNull: false,

      },

      isAdmin: {
      
       type: Sequelize.BOOLEAN,
      
       defaultValue: false,
    
      },

      borrowLimit: {

        type: Sequelize.INTEGER,

        defaultValue: 2,

        allowNull: false,

      },

      totalBorrow: {

        type: Sequelize.INTEGER,

        defaultValue: 0,

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

    queryInterface.dropTable('users');

  },

};