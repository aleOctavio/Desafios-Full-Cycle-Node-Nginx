const Sequelize = require('sequelize');

//Conexão com o MySQL
const sequelize = new Sequelize('nodedb', 'root', 'root', {
    host: 'mysql-db',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}