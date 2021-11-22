const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    idOrder: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shippedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idCustomer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idPayment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customer_idCustomer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'account',
        key: 'idAccount'
      }
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOrder" },
        ]
      },
      {
        name: "fk_order_customer1_idx",
        using: "BTREE",
        fields: [
          { name: "customer_idCustomer" },
        ]
      },
    ]
  });
};
