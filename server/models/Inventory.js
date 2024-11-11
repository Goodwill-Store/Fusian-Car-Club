const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Inventory extends Model { }

Inventory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        count: {
            type: DataTypes.INTEGER,  // The count might be float if fractional quantities are allowed
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),  // DECIMAL for precise pricing (supports 10 digits, 2 after the decimal point)
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inventory',
    }
);

module.exports = Inventory;
