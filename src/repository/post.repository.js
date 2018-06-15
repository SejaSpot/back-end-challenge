const knex = require('../config/knex')



exports.getAll = async() => {
    /*
    const data = await knex
        //.select('nome', 'sobre')
        .select('titulo', 'conteudo', 'dataPublicacao')
        .from('Post')
      */  

     const data = await knex
     //.select('nome', 'sobre')
     .select('*')
     .from('PostCategory')

    return data

}

exports.get = async(id) => {

    const data = await knex
        .select('*')
        .from('Post')
        .where('id',id)

    return data[0]

}


exports.create = async(post) => {

    const data = await knex
        .insert({
            titulo : post.titulo,
            conteudo: post.conteudo,
            dataPublicacao: new Date().toLocaleString(),
            idAutor: post.idAutor
        })
        .into('Post')
        .then( response => {
            publishCategoriesInPost(post.categorias, response[0])
        })
        
        
    return data[0]

}


const publishCategoriesInPost = (idsCategories, idPost) => {
    idsCategories.map( idCat => {
        knex.insert({
            idPost : idPost,
            idCategory : idCat
        }).into('PostCategory')
    })
}

/*

exports.update = async(id, post) => {

    var objectToUpdate = {}
     
    if(post.nome) objectToUpdate.nome = post.nome
    if(post.categoriaPai) objectToUpdate.categoriaPai = post.categoriaPai

    const data = await knex('Post')
        .where('id', '=', id)
        .update({
           nome: objectToUpdate.nome,
           categoriaPai: objectToUpdate.categoriaPai
        })

    return data

}

exports.delete = async(id) => {
    
    const data = await knex('post')
        .where('id', '=', id)
        .del()
    
    return data

}

*/