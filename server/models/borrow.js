module.exports = (sequelize, DataTypes) => {

  const Borrow = sequelize.define('borrow', {

    returned: {

      type: DataTypes.BOOLEAN,

      defaultValue: false,

      allowNull: false,

    },

    dueDate: {

      type: DataTypes.DATE,

      allowNull: false,

    },

    actualReturnDate: {

      type: DataTypes.DATE,

      allowNull: false,

    },

  });



  Borrow.associate = (models) => {

    Borrow.belongsTo(models.Book, {

      foreignKey: 'bookId',

      as: 'book',

      onDelete: 'CASCADE',

    });

    Borrow.belongsTo(models.User, {

      foreignKey: 'userId',

      as: 'user',

      onDelete: 'CASCADE',

    });

  };

  return Borrow;

};