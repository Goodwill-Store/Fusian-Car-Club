const User = require('./User');
const Events = require('./Events');
const Inventory = require('./Inventory');
const Orders = require('./Orders');
const Post = require('./Post');

// One-to-many relationship: A user can have many orders
User.hasMany(Orders, {
  foreignKey: 'user_id',
});
Orders.belongsTo(User, {
  foreignKey: 'user_id',
});

// One-to-many relationship: An order can contain a single product (inventory)
Orders.belongsTo(Inventory, {
  foreignKey: 'product_id',
});

module.exports = {
  User,
  Events,
  Inventory,
  Orders,
  Post
};
