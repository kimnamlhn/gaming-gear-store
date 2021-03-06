const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    idPayment: {
      autoIncrement: true,
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
      },
      unique: "fk_payment_order"
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    creationDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
          { name: "idPayment" },
        ]
      },
      {
        name: "idOrder_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOrder" },
        ]
      },
    ]
  });
};
