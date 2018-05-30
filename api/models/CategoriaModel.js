const mongoose = require('mongoose');

//Arquitetura do documento de Categoria
const CategoriaModel = mongoose.Schema({
    nome: { type: String, required: true },
    subcategoria: { type: String, required: true },
});

//exportando o modelo
module.exports = mongoose.model('CategoriaModel', CategoriaModel);