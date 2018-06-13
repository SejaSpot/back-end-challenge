const knex = require('../config/knex')
const md5 = require('md5')

exports.getAll = async() => {
    
    const data = await knex
        //.select('nome', 'sobre')
        .select('*')
        .from('Category')
        
    return data

}

exports.get = async(id) => {

    const data = await knex
        .select('*')
        .from('Category')
        .where('id',id)

    return data[0]

}

exports.create = async(category) => {

    const data = await knex
        .insert({
            nome : category.nome,
            categoriaPai: category.categoryPai 
        })
        .into('Category')

    return data

}

exports.update = async(id, Category) => {

    var objectToUpdate = {}
     
    if(Category.nome) objectToUpdate.nome = Category.nome
    if(Category.sobre) objectToUpdate.sobre = Category.sobre
    if(Category.usuario) objectToUpdate.usuario = Category.usuario
    if(Category.senha) objectToUpdate.senha = md5(Category.senha+global.SALT_KEY)

    const data = await knex('Category')
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
    
    const data = await knex('Category')
        .where('id', '=', id)
        .del()
    
    return data

}