const knex = require('../config/knex')
const md5 = require('md5')

exports.getAll = async() => {
    
    const data = await knex
        //.select('nome', 'sobre')
        .select('*')
        .from('Author')
        
    return data

}

exports.get = async(id) => {

    const data = await knex
        .select('nome','sobre')
        .from('Author')
        .where('id',id)

    return data[0]

}

exports.create = async (author) => {

    author.senha = md5(author.senha+global.SALT_KEY)
    
    const data = await knex
        .insert({ 
            nome: author.nome,
            sobre: author.sobre,
            usuario: author.usuario,
            senha: author.senha
        })
        .into('Author')

    return data

}

exports.update = async(id, author) => {

    var objectToUpdate = {}
     
    if(author.nome) objectToUpdate.nome = author.nome
    if(author.sobre) objectToUpdate.sobre = author.sobre
    if(author.usuario) objectToUpdate.usuario = author.usuario
    if(author.senha) objectToUpdate.senha = md5(author.senha+global.SALT_KEY)

    const data = await knex('Author')
        .where('id', '=', id)
        .update({
           nome: objectToUpdate.nome,
           sobre: objectToUpdate.sobre,
           usuario: objectToUpdate.usuario,
           senha: objectToUpdate.senha 
        })

    return data

}

exports.delete = async(id) => {
    
    const data = await knex('Author')
        .where('id', '=', id)
        .del()
    
    return data

}