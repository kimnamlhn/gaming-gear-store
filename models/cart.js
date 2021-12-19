const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart', {
    idCart: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idAccount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'account',
        key: 'idAccount'
      },
      unique: "cart_ibfk_1"
    },
    idSession: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "idSession_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'cart',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCart" },
        ]
      },
      {
        name: "fk_account_cart",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAccount" },
        ]
      },
      {
        name: "idSession_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSession" },
        ]
      },
      {
        name: "idAccount_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAccount" },
        ]
      },
      {
        name: "fk_account_cart_idx",
        using: "BTREE",
        fields: [
          { name: "idAccount" },
        ]
      },
    ]
  });
};
