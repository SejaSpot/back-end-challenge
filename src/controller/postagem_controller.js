const mongoose = require('mongoose');
const Postagem = mongoose.model('Postagem');
const Autor = mongoose.model('Autor');
const Validator =require('../fluent-validator');

//inserção de postagem na base
exports.post = (req,res, next)=>{
    let validar = new Validator();
    validar.hasMinLen(req.body.titulo, 5, 'O Titulo deve ter no minimo 5 caracteres');
    validar.hasMinLen(req.body.conteudo, 10, 'O Conteudo deve ter no minimo 10 caracteres');

    if(!validar.isValid()){
        res.status(400).send(validar.errors()).end();
        return;
    }
    let postagem = new Postagem();
    postagem.titulo = req.body.titulo;
    postagem.conteudo = req.body.conteudo;
    postagem.slug = req.body.slug;
    postagem.data_p = req.body.data_p;
    postagem.categoria = req.body.categoria;
    postagem.autor = req.body.autor;
    postagem.save().then( x=>{
        res.status(201).send({message: 'Cadastrado com sucesso.'
        })
    }).catch(e =>{
        res.status(400).send({message: 'Erro ao cadastrar',
            data: e
        })
    });
};

//busca de postagem
exports.get = (req, res, next) =>{
    Postagem.find().then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//busca de postagem pelo Slug
exports.getBySlug = (req, res, next) =>{
    Postagem.findOne({
        slug: req.params.slug
    }).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//busca de postagem pelo ID
exports.getById = (req, res, next) =>{
    Postagem.findById(req.params.id).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//busca de postagem pela categoria
exports.getByCat = (req, res, next) =>{
    Postagem.find({
        tags: req.params.tag}).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//busca de postagem pelo Autor
exports.getByAutor = (req, res, next) =>{
    Autor.find({
        tags: req.params.id}).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//alteração de dados da postagem pelo ID
exports.put = (req, res, next) => {
    Postagem.findByIdAndUpdate(req.params.id,{
        $set:{
            titulo : req.body.titulo,
            conteudo : req.body.conteudo,
            categoria : req.body.categoria,
            autor : req.body.autor
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

//alteração de dados da postagem pelo Slug
exports.putBySlug = (req, res, next) => {
    Postagem.findOneAndUpdate(req.params.id,{
        $set:{
            titulo : req.body.titulo,
            conteudo : req.body.conteudo,
            categoria : req.body.categoria,
            autor : req.body.autor
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

//Exclusão de postagens pelo ID
exports.del = (req, res, next) => {
    Postagem.findByIdAndRemove(req.body.id).then( x => {
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