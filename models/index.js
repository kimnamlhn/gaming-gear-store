const {Sequelize} = require('sequelize');

// const sequelize = new Sequelize(process.env.DB_URL);
const sequelize = new Sequelize('mydb', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;