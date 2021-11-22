var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _category = require("./category");
var _orderdetail = require("./orderdetail");
var _orders = require("./orders");
var _payment = require("./payment");
var _product = require("./product");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var orderdetail = _orderdetail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);

  orders.belongsToMany(product, { as: 'product_idProduct_products', through: orderdetail, foreignKey: "order_idOrder", otherKey: "product_idProduct" });
  product.belongsToMany(orders, { as: 'order_idOrder_orders', through: orderdetail, foreignKey: "product_idProduct", otherKey: "order_idOrder" });
  orders.belongsTo(account, { as: "customer_idCustomer_account", foreignKey: "customer_idCustomer"});
  account.hasMany(orders, { as: "orders", foreignKey: "customer_idCustomer"});
  payment.belongsTo(account, { as: "customer_idCustomer_account", foreignKey: "customer_idCustomer"});
  account.hasMany(payment, { as: "payments", foreignKey: "customer_idCustomer"});
  product.belongsTo(category, { as: "category_category", foreignKey: "category"});
  category.hasMany(product, { as: "products", foreignKey: "category"});
  orderdetail.belongsTo(orders, { as: "order_idOrder_order", foreignKey: "order_idOrder"});
  orders.hasMany(orderdetail, { as: "orderdetails", foreignKey: "order_idOrder"});
  payment.belongsTo(orders, { as: "order_idOrder_order", foreignKey: "order_idOrder"});
  orders.hasMany(payment, { as: "payments", foreignKey: "order_idOrder"});
  orderdetail.belongsTo(product, { as: "product_idProduct_product", foreignKey: "product_idProduct"});
  product.hasMany(orderdetail, { as: "orderdetails", foreignKey: "product_idProduct"});

  return {
    account,
    category,
    orderdetail,
    orders,
    payment,
    product,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
