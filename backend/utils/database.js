const Sequelize = require("sequelize");

const sequelize = new Sequelize('medicords','root','Tanuj2002',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;