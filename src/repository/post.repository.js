const knex = require('../config/knex')



exports.getAll = async() => {
    
    const data = await knex
        .select('p.id', 'p.titulo', 'p.conteudo', 'p.dataPublicacao as publicado', 'p.visualizacoes', 'Author.nome as autor')
        .from('Post AS p')
        .innerJoin('Author', 'p.idAutor', 'Author.id')

    return data

}

exports.get = async(id) => {

    const data = await knex
        .select('p.id', 'p.titulo', 'p.conteudo', 'a.nome as autor', 'p.dataPublicacao', 'p.visualizacoes')
        .from('Post as p')
        .where('p.id',id)
        .innerJoin('Author as a', 'p.idAutor', 'a.id')

    return data[0]

}

exports.getPostsFromCategory = async(idCategory) => {

    const data = await knex
        .select('p.id', 'p.titulo', 'p.conteudo', 'a.nome as autor', 'p.dataPublicacao', 'p.visualizacoes')
        .from('PostCategory as pg')
        .where('pg.idCategoria', idCategory)
        .innerJoin('Category as c', 'pg.idCategoria', 'c.id')
        .innerJoin('Post as p', 'pg.idPost', 'p.id')
        .innerJoin('Author as a', 'p.idAutor', 'a.id')

    return data

}


exports.getPostsFromAuthor = async(idAuthor) => {

    const data = await knex
    .select('p.id', 'p.titulo', 'p.conteudo', 'p.dataPublicacao', 'p.visualizacoes')
    .from('Post as p')
    .where('p.idAutor', idAuthor)
    .innerJoin('Author as a', 'p.idAutor', 'a.id')

    return data
}


exports.create = async(post) => {

    const data = await knex
        .insert({
            titulo : post.titulo,
            conteudo: post.conteudo,
            dataPublicacao: new Date().toLocaleString(),
            idAutor: post.autor,
            visualizacoes: 0
        })
        .into('Post')
        .returning('id')
            
    return data[0]

}

exports.update = async(id, post) => {

    var objectToUpdate = {}
     
    if(post.titulo) objectToUpdate.titulo = post.titulo
    if(post.conteudo) objectToUpdate.conteudo = post.conteudo
    if(post.conteudo) objectToUpdate.autor = post.autor
    
    const data = await knex('Post')
        .where('id', '=', id)
        .update({
           titulo: objectToUpdate.titulo,
           conteudo: objectToUpdate.conteudo
        })

    return data

}


exports.delete = async(id) => {
    
    const data = await knex('Post')
        .where('id', '=', id)
        .del()
    
    return data

}


exports.attachPostCategory = async(idPost, idCategory) => {
    
    const data = await knex.insert({
        idPost : idPost,
        idCategoria : idCategory
    }).into('PostCategory')

    return data
    
}

exports.fetchCategoryFromPost = async(idPost) => {

    const data = await knex
        .select('cat.nome')
        .from('PostCategory as pg')
        .where('idPost', idPost)
        .innerJoin('Category as cat', 'pg.idCategoria', 'cat.id')
    return data

}

exports.counterView = async(idPost) => {
    
    const data = await knex('Post')
        .where('id', '=', idPost)
        .increment('visualizacoes', 1);
    return data

}
