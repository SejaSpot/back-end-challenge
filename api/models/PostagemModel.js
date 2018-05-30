const mongoose = require('mongoose');
const Autor = require('./AutorModel');
const Categoria = require('./CategoriaModel');

//Arquitetura do documento de Postagem
const PostagemModel = mongoose.Schema({
    titulo: { type: String, required: true },
    conteudo: { type: String, required: true },
    data: { type: Date, required: true },
    categoria: [mongoose.model('CategoriaModel').schema],
    autor: mongoose.model('AutorModel').schema,
    views: { type: Number, min: 0, max: 0, required: true }
});

//exportando o modelo
module.exports = mongoose.model('PostagemModel', PostagemModel);