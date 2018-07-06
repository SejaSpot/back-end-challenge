const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo de interação com o MongoDB
const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Categoria',
        required: true
    },
    assignedTo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Postagem',
        required: true
    }],
    completed:{
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Cat_Postagem', schema);