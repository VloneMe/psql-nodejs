const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://vlone:root@123@localhost:5432/dev');

async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log('[server]: Database Connection has been established successfully.');
  } catch (error) {
    console.error('[server]: Unable to connect to the database:', error);
  }
}

module.exports = dbConnection;