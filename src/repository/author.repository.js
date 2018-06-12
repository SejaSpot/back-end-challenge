const knex = require('../config/knex')

exports.getAllAuthors = async() => {

    const authors = [
        {
            nome : 'teste', 
            descricao: 'testetsettsetsetsetsts'
        },

        {
            nome : 'teste1', 
            descricao: 'testetsettsetsetsetsts'
        },

        {
            nome : 'teste2', 
            descricao: 'testetsettsetsetsetsts'
        }

        
    ]

    return await authors;

}

exports.get = (id) => {

}

exports.create = (author) => {

}

exports.update = (id) => {
    
}

exports.delete = (id) => {
    
}