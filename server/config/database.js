const Sequelize = require('sequelize');
require('dotenv').config();
console.log('DB_NAME:', process.env.DB_NAME); // Log to check if values are loaded

// Create a connection object
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  },
);

//test connection
(async  () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;
