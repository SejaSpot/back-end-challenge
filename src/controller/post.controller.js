const repository = require('../repository/post.repository')
const util = require('../utils/paginate.util')


exports.getAll = async(req,res,next) => {

    try {

        const paginate = await util.paginate(req.query.p, req.query.total)

        const data = await repository.getAll(paginate)
        
        res.status(200).send(data)

    } catch(e) {

        res.status(500).send({
            message: "Não foi possivel efetuar sua requisição.", 
            error: e
        })

    }
    
}

exports.get = async(req,res,next) => {

    try {
        
        const data = await repository.get(req.params.id)

        //Exibe as categorias de cada post
        const cats = await repository.fetchCategoryFromPost(data.id)
        data.categorias = cats


        const counter = await repository.counterView(data.id)


        res.status(200).send(data);
    
    } catch(e) {

        res.status(404).send({ 
            message: "Post não encontrado.", 
            error: e
        })

    }

    
}


exports.getPostsFromCategory = async(req, res, next) => {

    try {

        const data = await repository.getPostsFromCategory(req.params.id)

        res.status(200).send(data);

    } catch(e) {

        res.status(404).send({ 
            message: "Posts não encontrados.", 
            error: e
        })

    }
    
}

exports.getPostsFromAuthor = async(req, res, next) => {

    try {

        const data = await repository.getPostsFromAuthor(req.params.id)

        res.status(200).send(data)

    } catch(e) {

        res.status(404).send({ 
            message: "Posts não encontrados.", 
            error: e
        })

    }

}


exports.create = async(req,res,next) => {

    try {

        const idPost = await repository.create(req.body)
        const categorias = req.body.categorias
        
        //Adiciona categorias nos posts inserindo os valores na tabela PostCategory
        categorias.map(idCat => repository.attachPostCategory(idPost, idCat))

        

        res.status(200).send({
            message : "Post cadastrado com Sucesso.",
        })

    } catch(e) {

        res.status(500).send({
            message: "Não foi possivel efetuar sua requisição.", 
            error: e
        })

    }
}

exports.update = async(req,res,next) => {

    try {
        const data = await repository.update(req.params.id, req.body)

        res.status(200).send({
            message : "Post atualizado com Sucesso.",
        })

    } catch(e) {

        res.status(500).send({
            message: "Não foi possivel efetuar sua requisição.", 
            error: e
        })

    }

}

exports.delete = async(req,res,next) => {
    
    try {
        const data = await repository.delete(req.params.id)

        res.status(200).send({
            message: "Registro Excluido com Sucesso."
        })

    } catch(e) {

        res.status(500).send({
            message: "Registro não pode ser excluido.",
            error: e
        })
        
    }

}

