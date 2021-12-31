const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_detail', {
    idOrderDetail: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idOrder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'idOrder'
      }
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
        key: 'idProduct'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOrderDetail" },
        ]
      },
      {
        name: "order_product_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOrder" },
          { name: "idProduct" },
        ]
      },
      {
        name: "fk_product_order_detail_idx",
        using: "BTREE",
        fields: [
          { name: "idProduct" },
        ]
      },
      {
        name: "fk_order_order_detail_idx",
        using: "BTREE",
        fields: [
          { name: "idOrder" },
        ]
      },
    ]
  });
};
