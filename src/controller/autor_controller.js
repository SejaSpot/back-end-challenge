const mongoose = require('mongoose');
const Autor = mongoose.model('Autor');
const Postagem = mongoose.model('Postagem');
const Validator =require('../fluent-validator');

//inserção de Autores na base
exports.post = (req,res, next)=>{
    let validar = new Validator();
    validar.hasMinLen(req.body.nome, 3, 'O nome deve ter no minimo 3 caracteres');

    if(!validar.isValid()){
        res.status(400).send(validar.errors()).end();
        return;
    }
    let autor = new Autor();
    autor.nome = req.body.nome;
    autor.descricao = req.body.descricao;
    autor.slug = req.body.slug;
    autor.tags = req.body.tags;
    autor.save().then( x=>{
        res.status(201).send({message: 'Cadastrado com sucesso.'
        })
    }).catch(e =>{
        res.status(400).send({message: 'Erro ao cadastrar',
        data: e
        })
    });
};

//busca de Autores
exports.get = (req, res, next) =>{
    Autor.find().then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//busca de Autores pelo Slug
exports.getBySlug = (req, res, next) =>{
    Autor.findOne({
        slug: req.params.slug
    }).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//busca de Autores pelo ID
exports.getById = (req, res, next) =>{
    Autor.findById(req.params.id).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//busca de Autores pela Tag
exports.getByTag = (req, res, next) =>{
    Autor.find({
        tags: req.params.tag}).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//alteração de dados do Autor pela ID
exports.put = (req, res, next) => {
    Autor.findByIdAndUpdate(req.params.id,{
        $set:{
            nome : req.body.nome,
            descricao : req.body.descricao,
            tags : req.body.tags
        }
    }).then( x=>{
        res.status(200).send({message: 'Atualizado com sucesso.'
        })
    }).catch(e =>{
        res.status(400).send({message: 'Erro ao atualizar',
            data: e
        })
    });
};

//alteração de dados do Autor pela Slug
exports.putBySlug = (req, res, next) => {
    Autor.findOneAndUpdate(req.params.id,{
        $set:{
            nome : req.body.nome,
            descricao : req.body.descricao,
            tags : req.body.tags
        }
    }).then( x=>{
        res.status(200).send({message: 'Atualizado com sucesso.'
        })
    }).catch(e =>{
        res.status(400).send({message: 'Erro ao atualizar',
            data: e
        })
    });
};

//Exclusão de Autores pelo ID
exports.del = (req, res, next) => {
   Autor.findByIdAndRemove(req.body.id).then( x => {
       res.status(200).send({
           message: "Autor Removido"
       });
   }).catch(e =>{
       res.status(400).send({
           message: "Erro ao deletar",
           data: e
       });
   });
};