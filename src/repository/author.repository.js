const knex = require('../config/knex')

exports.getAll = async() => {
    
    const data = await knex.select('*').from('Author')
    return data;

}

exports.get = (id) => {

}

exports.create = async (author) => {
    
    const data = await knex
        .insert({ 
            nome: author.nome,
            sobre: author.sobre,
            usuario: author.usuario,
            senha: author.senha
        })
        .into('Author')
    return data;
}

exports.update = (id) => {
    
}

exports.delete = (id) => {
    
}