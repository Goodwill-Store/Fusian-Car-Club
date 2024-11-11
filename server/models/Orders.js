const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const User = require('./User');  // Direct reference to the User model
const Inventory = require('./Inventory');  // Direct reference to the Inventory model

class Orders extends Model { }

Orders.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,  // User ID references User table
            allowNull: false,
            references: {
                model: User,  // Direct reference to the User model
                key: 'id',  // The key in the User model to reference
            },
        },
        product_id: {
            type: DataTypes.INTEGER,  // Product ID references Inventory table
            allowNull: false,
            references: {
                model: Inventory,  // Direct reference to the Inventory model
                key: 'id',  // The key in the Inventory model to reference
            },
        },
        payment_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_status: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        shipping_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'orders',
    }
);

module.exports = Orders;
