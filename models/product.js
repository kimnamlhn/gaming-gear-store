const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    idProduct: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'idCategory'
      }
    },
    images: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product_images',
        key: 'product'
      }
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProduct" },
        ]
      },
      {
        name: "fk_category_product_idx",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
      {
        name: "fk_image_product_idx",
        using: "BTREE",
        fields: [
          { name: "images" },
        ]
      },
    ]
  });
};
