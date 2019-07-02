var Sequelize = require('sequelize');

var sequelize = require("../../database/db_connect");

// CREATE TABLE PRODUTOS
const Produto = sequelize.define('produto', {
    categoria: Sequelize.STRING,
    marca: Sequelize.STRING,
    nome: Sequelize.STRING,
    tamanho: Sequelize.STRING,
    valor: Sequelize.STRING,
    descricao: Sequelize.STRING,
    imagem: Sequelize.STRING,
    estoque: Sequelize.STRING,
    referencia: Sequelize.STRING
})

Produto.sync();

module.exports = Produto;