const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Events extends Model { }

Events.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // Short string for title
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Text field for larger body content
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // Date format without time
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        // Location as a Google Maps URL
        location: {
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
        modelName: 'events',
    }
);

module.exports = Events;
