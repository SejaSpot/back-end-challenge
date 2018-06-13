const repository = require('../repository/author.repository')


exports.getAll = async(req,res,next) => {

    try {
        const authors = await repository.getAll();
        res.status(200).send(authors)

    } catch(e) {

        res.status(500).send("error", e)

    }
    

}

exports.get = (req,res,next) => {
    
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
            message : "Autor Cadastrado com Sucesso",
            data: data
        })

    } catch(e) {

        res.status(500).send({
            message: "Não foi possivel efetuar sua requisição", 
            rrror: e
        })

    }
}

exports.update = (req,res,next) => {
    
}

exports.delete = (req,res,next) => {
    
}

