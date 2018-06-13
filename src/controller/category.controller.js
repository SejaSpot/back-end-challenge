const repository = require('../repository/category.repository')


exports.getAll = async(req,res,next) => {

    try {
        const data = await repository.getAll()
        res.status(200).send(data)

    } catch(e) {

        res.status(500).send({
            message: "error", 
            error: e
        })

    }
    

}

exports.get = async(req,res,next) => {

    try {
        
        const data = await repository.get(req.params.id)
        res.status(200).send(data);
    
    } catch(e) {

        res.status(404).send({ 
            message: "Esta categoria não existe", 
            error: e
        })

    }

}

exports.create = async(req,res,next) => {

    try {

        const data = await repository.create(req.body)

        res.status(200).send({
            message: "Categoria criada com sucesso",
            data: data
        })

    } catch(e) {

        res.status(500).send({
            message: "Não foi possível cadastrar categoria",
            error: e
        })

    }
}

exports.update = (req,res,next) => {
    
}

exports.delete = (req,res,next) => {
    
}

