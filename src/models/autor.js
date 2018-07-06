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
    descricao: {
        type: String,
        required: true,
        trim:true
    },
    tags: [{
        type: String
    }],
    postagem: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Post_autor'
    }]
});

module.exports = mongoose.model('Autor', schema);