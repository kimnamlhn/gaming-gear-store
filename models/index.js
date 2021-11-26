const {Sequelize} = require('sequelize');
const initModels = require('./init-models');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 5, // Maximum number of connection in pool
        min: 0, // Minimum number of connection in pool
        acquire: 30000, // Maximum time in ms that pool will try to get a connection before throwing error
        idle: 10000 // Maximum time in ms that a connection can be idle before being released
    }
});

module.exports = {
    sequelize,
    models: initModels(sequelize),
}
