const repository = require('../repository/author.repository')


exports.getAll = async(req,res,next) => {

    try {
        const data = await repository.getAll();
        res.status(200).send(data)

    } catch(e) {

        res.status(500).send("error", e)

    }
    

}

exports.get = async(req,res,next) => {

    try {
        
        const data = await repository.get(req.params.id)
        res.status(200).send(data);
    
    } catch(e) {

        res.status(404).send({ 
            message: "Este autor não existe", 
            error: e
        })

    }

    
}

exports.create = async(req,res,next) => {

    try {

        const author = {
            nome: req.body.nome,
            sobre: req.body.sobre,
            usuario: req.body.usuario,
            senha: req.body.senha
        }

        const data = await repository.create(author)

        res.status(200).send({
            message : "Autor Cadastrado com Sucesso.",
            data: data
        })

    } catch(e) {

        res.status(500).send({
            message: "Não foi possivel efetuar sua requisição", 
            rrror: e
        })

    }
}

exports.update = async(req,res,next) => {

    try {
        const data = await repository.update(req.params.id, req.body)

        res.status(200).send({
            message : "Autor atualizado com Sucesso.",
            data: data
        })

    } catch(e) {

        res.status(500).send({
            message: "Não foi possivel efetuar sua requisição", 
            error: e
        })

    }

}

exports.delete = async(req,res,next) => {
    
    try {
        const data = await repository.delete(req.params.id)

        res.status(200).send({
            message: "Registro Excluido com Sucesso"
        })

    } catch(e) {

        res.status(500).send({
            message: "Registro não pode ser excluido",
            error: e
        })
        
    }

}

