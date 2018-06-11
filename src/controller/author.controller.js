const authorRepository = require('../repository/author.repository')


exports.getAll = async(req,res,next) => {

    try {
        const authors = await authorRepository.getAllAuthors();
        res.status(200).send(authors)

    } catch(e) {

        res.status(500).send("error", e)

    }
    

}

exports.create = (req,res,next) => {

}

exports.update = (req,res,next) => {
    
}

exports.delete = (req,res,next) => {
    
}

