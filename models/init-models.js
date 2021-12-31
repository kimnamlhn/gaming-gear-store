var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _cart = require("./cart");
var _cart_items = require("./cart_items");
var _category = require("./category");
var _order_detail = require("./order_detail");
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
  var order_detail = _order_detail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_comments = _product_comments(sequelize, DataTypes);
  var product_images = _product_images(sequelize, DataTypes);

  cart.belongsTo(account, { as: "idAccount_account", foreignKey: "idAccount"});
  account.hasOne(cart, { as: "cart", foreignKey: "idAccount"});
  orders.belongsTo(account, { as: "idAccount_account", foreignKey: "idAccount"});
  account.hasMany(orders, { as: "orders", foreignKey: "idAccount"});
  product_comments.belongsTo(account, { as: "idAccount_account", foreignKey: "idAccount"});
  account.hasMany(product_comments, { as: "product_comments", foreignKey: "idAccount"});
  cart_items.belongsTo(cart, { as: "idCart_cart", foreignKey: "idCart"});
  cart.hasMany(cart_items, { as: "cart_items", foreignKey: "idCart"});
  product.belongsTo(category, { as: "category_category", foreignKey: "category"});
  category.hasMany(product, { as: "products", foreignKey: "category"});
  order_detail.belongsTo(orders, { as: "idOrder_order", foreignKey: "idOrder"});
  orders.hasMany(order_detail, { as: "order_details", foreignKey: "idOrder"});
  payment.belongsTo(orders, { as: "idOrder_order", foreignKey: "idOrder"});
  orders.hasOne(payment, { as: "payment", foreignKey: "idOrder"});
  cart_items.belongsTo(product, { as: "idProduct_product", foreignKey: "idProduct"});
  product.hasMany(cart_items, { as: "cart_items", foreignKey: "idProduct"});
  order_detail.belongsTo(product, { as: "idProduct_product", foreignKey: "idProduct"});
  product.hasMany(order_detail, { as: "order_details", foreignKey: "idProduct"});
  product_comments.belongsTo(product, { as: "idProduct_product", foreignKey: "idProduct"});
  product.hasMany(product_comments, { as: "product_comments", foreignKey: "idProduct"});
  product_images.belongsTo(product, { as: "product_product", foreignKey: "product"});
  product.hasMany(product_images, { as: "product_images", foreignKey: "product"});

  return {
    account,
    cart,
    cart_items,
    category,
    order_detail,
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
