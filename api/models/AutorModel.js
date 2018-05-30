const mongoose = require('mongoose');

//Arquitetura do documento do Autor
const AutorModel = mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
});

//exportando o modelo
module.exports = mongoose.model('AutorModel', AutorModel);