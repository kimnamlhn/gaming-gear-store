var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _cart = require("./cart");
var _cart_items = require("./cart_items");
var _category = require("./category");
var _orderdetail = require("./orderdetail");
var _orders = require("./orders");
var _payment = require("./payment");
var _product = require("./product");
var _product_comments = require("./product_comments");
var _product_images = require("./product_images");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cart_items = _cart_items(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var orderdetail = _orderdetail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_comments = _product_comments(sequelize, DataTypes);
  var product_images = _product_images(sequelize, DataTypes);

  orders.belongsToMany(product, { as: 'product_idProduct_products', through: orderdetail, foreignKey: "order_idOrder", otherKey: "product_idProduct" });
  product.belongsToMany(orders, { as: 'order_idOrder_orders', through: orderdetail, foreignKey: "product_idProduct", otherKey: "order_idOrder" });
  cart.belongsTo(account, { as: "idAccount_account", foreignKey: "idAccount"});
  account.hasOne(cart, { as: "cart", foreignKey: "idAccount"});
  orders.belongsTo(account, { as: "customer_idCustomer_account", foreignKey: "customer_idCustomer"});
  account.hasMany(orders, { as: "orders", foreignKey: "customer_idCustomer"});
  payment.belongsTo(account, { as: "customer_idCustomer_account", foreignKey: "customer_idCustomer"});
  account.hasMany(payment, { as: "payments", foreignKey: "customer_idCustomer"});
  product_comments.belongsTo(account, { as: "idAccount_account", foreignKey: "idAccount"});
  account.hasMany(product_comments, { as: "product_comments", foreignKey: "idAccount"});
  cart_items.belongsTo(cart, { as: "idCart_cart", foreignKey: "idCart"});
  cart.hasMany(cart_items, { as: "cart_items", foreignKey: "idCart"});
  product.belongsTo(category, { as: "category_category", foreignKey: "category"});
  category.hasMany(product, { as: "products", foreignKey: "category"});
  orderdetail.belongsTo(orders, { as: "order_idOrder_order", foreignKey: "order_idOrder"});
  orders.hasMany(orderdetail, { as: "orderdetails", foreignKey: "order_idOrder"});
  payment.belongsTo(orders, { as: "order_idOrder_order", foreignKey: "order_idOrder"});
  orders.hasMany(payment, { as: "payments", foreignKey: "order_idOrder"});
  cart_items.belongsTo(product, { as: "idProduct_product", foreignKey: "idProduct"});
  product.hasMany(cart_items, { as: "cart_items", foreignKey: "idProduct"});
  orderdetail.belongsTo(product, { as: "product_idProduct_product", foreignKey: "product_idProduct"});
  product.hasMany(orderdetail, { as: "orderdetails", foreignKey: "product_idProduct"});
  product_comments.belongsTo(product, { as: "idProduct_product", foreignKey: "idProduct"});
  product.hasMany(product_comments, { as: "product_comments", foreignKey: "idProduct"});
  product_images.belongsTo(product, { as: "product_product", foreignKey: "product"});
  product.hasMany(product_images, { as: "product_images", foreignKey: "product"});

  return {
    account,
    cart,
    cart_items,
    category,
    orderdetail,
    orders,
    payment,
    product,
    product_comments,
    product_images,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
