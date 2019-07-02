var Sequelize = require('sequelize');

let sequelize = new Sequelize('db_dsp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;