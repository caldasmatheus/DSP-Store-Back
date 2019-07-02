var Sequelize = require('sequelize');
var sequelize = require("../../database/db_connect");

//CREATE TABLE USUARIOS
const Usuarios = sequelize.define('usuarios', {
    categoria: Sequelize.STRING,
    nome: Sequelize.STRING,
    sobrenome: Sequelize.STRING,
    email: Sequelize.STRING,
    sexo: Sequelize.CHAR(1), //DEFINE UM VARCHAR DE TAMANHO 1 OU M OU F.
    cpf: Sequelize.DECIMAL(11,0),
    senha: Sequelize.STRING,

})

Usuarios.sync();
module.exports = Usuarios;