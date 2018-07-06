const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo de interação com o MongoDB
const schema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type:String,
        required: true,
        trim:true,
        index: true,
        unique: true
    },
    conteudo: {
        type: String,
        required: true,
        trim:true
    },
    data_p: {
        type: Date,
        required: true,
        trim:true
    },
    visualizacoes: {
        type: Number
    },
    autor:{
        type: mongoose.Schema.ObjectId,
        ref: 'Autor',
        required:true
    },
    categoria: [{
        type: mongoose.Schema.ObjectId,
        ref: 'cat_postagem'
    }]

});

module.exports = mongoose.model('Postagem', schema);