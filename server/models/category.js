export default (sequelize, DataTypes) => {

  const Category = sequelize.define('category', {

    title: {

      type: DataTypes.STRING,

      unique: {

        args: true,

        msg: 'Category already exists'

      },

    }

  });

  Category.associate = (models) => {

    Category.hasMany(models.Book, {

      foreignKey: 'categoryId',

      as: 'category'

    });

  };

  return Category;

};