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
      type: DataTypes.STRING(100),
      allowNull: false
    },
    generalInfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    detailedDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'idCategory'
      }
    },
    creationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
    ]
  });
};
