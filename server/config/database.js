const Sequelize = require('sequelize');
const mysql = require("mysql2/promise");
require('dotenv').config();
console.log('DB_NAME:', process.env.DB_NAME); // Log to check if values are loaded

init();

async function init()
{
  const connection = await mysql.createConnection({
    host: 'db',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  })
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
}

// Create a connection object
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // Database location
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT_PUBLIC || 3306,
  }
);

//test connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

//create tables and schema if don't already exist
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = sequelize;
