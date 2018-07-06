const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo de interação com o MongoDB
const schema = new Schema({
    nome: {
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
    subcategorias: [{
        type: String
    }],
    postagem: [{
        type: mongoose.Schema.ObjectId,
        ref: 'cat_postagem'
    }]
});

module.exports = mongoose.model('Categoria', schema);