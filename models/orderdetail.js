const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderdetail', {
    idOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantityOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'idProduct'
      }
    },
    order_idOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'idOrder'
      }
    }
  }, {
    sequelize,
    tableName: 'orderdetail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOrder" },
          { name: "idProduct" },
          { name: "product_idProduct" },
          { name: "order_idOrder" },
        ]
      },
      {
        name: "orderdetail_product_idProduct_order_idOrder_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_idProduct" },
          { name: "order_idOrder" },
        ]
      },
      {
        name: "fk_orderDetail_product1_idx",
        using: "BTREE",
        fields: [
          { name: "product_idProduct" },
        ]
      },
      {
        name: "fk_orderDetail_order1_idx",
        using: "BTREE",
        fields: [
          { name: "order_idOrder" },
        ]
      },
    ]
  });
};
