const knex = require('../config/knex')


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
        .where('id', id)

    return data[0]

}

exports.create = async(category) => {

    const data = await knex
        .insert({
            nome : category.nome,
            categoriaPai: category.categoriaPai 
        })
        .into('Category')

    return data

}

exports.update = async(id, category) => {

    var objectToUpdate = {}
     
    if(category.nome) objectToUpdate.nome = category.nome
    if(category.categoriaPai) objectToUpdate.categoriaPai = category.categoriaPai

    const data = await knex('Category')
        .where('id', '=', id)
        .update({
           nome: objectToUpdate.nome,
           categoriaPai: objectToUpdate.categoriaPai
        })

    return data

}

exports.delete = async(id) => {
    
    const data = await knex('Category')
        .where('id', '=', id)
        .del()
    
    return data

}