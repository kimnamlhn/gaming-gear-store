const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    idpayment: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idCustomer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    amount: {
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
    },
    order_idOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'idOrder'
      }
    }
  }, {
    sequelize,
    tableName: 'payment',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpayment" },
        ]
      },
      {
        name: "fk_payment_customer_idx",
        using: "BTREE",
        fields: [
          { name: "customer_idCustomer" },
        ]
      },
      {
        name: "fk_payment_order1_idx",
        using: "BTREE",
        fields: [
          { name: "order_idOrder" },
        ]
      },
    ]
  });
};
