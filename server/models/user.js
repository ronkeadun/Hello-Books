module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('user', {

    username: {

      type: DataTypes.STRING,

      unique: {

        args: true,

        msg: 'Username already taken'

      },

      allowNull: false,

    },

    password: {

      type: DataTypes.STRING,

      allowNull: false,

    },

    email: {

      type: DataTypes.STRING,

      unique: {

        args: true,

        msg: 'User with this email exists'

      },

      allowNull: false,

    },

    role: {

      type: DataTypes.STRING,

      defaultValue: 'normal',

      allowNull: false,

    },

    level: {

      type: DataTypes.STRING,

      defaultValue: 'bronze',

    },
    
    isAdmin: {
      
      type: DataTypes.BOOLEAN,
      
      defaultValue: false,
    
    },

    borrowLimit: {

      type: DataTypes.INTEGER,

      defaultValue: 2,

    },

    totalBorrow: {

      type: DataTypes.INTEGER,

      defaultValue: 0,

    },

  });

  User.associate = (models) => {

    User.hasMany(models.Borrow, {

      foreignKey: 'userId',

      as: 'borrow',

    });

  };

  return User;

};