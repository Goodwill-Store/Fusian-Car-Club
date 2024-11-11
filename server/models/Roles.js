const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Roles extends Model {
}

Roles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'roles',
    }
);

module.exports = Roles;
