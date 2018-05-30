const express = require('express');
const mongoose = require('mongoose');

//importando o modelo de Postagem
const PostagemModel = require('../models/PostagemModel');

module.exports = {

    //Listando todas as postagens.
    listarPostagens: (req, res, next) => {
        PostagemModel.find()
            .exec()
            .then(docs => {
                console.log(docs);
                res.status(200).json(docs);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },

    //Savando a postagem.
    salvarPostagem: (req, res, next) => {
        const postagem = new PostagemModel({
            _id: new mongoose.Types.ObjectId(),
            titulo: req.body.titulo,
            conteudo: req.body.conteudo,
            data: req.body.data,
            categoria: req.body.categoria,
            autor: req.body.autor,
            views: req.body.views

        });
        postagem.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "A postagem foi criada com sucesso.",
                    postagem: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },

    //Bucando por id.
    buscarPostagemPorId: (req, res, next) => {
        const id = req.params.postagemId;
        PostagemModel.findById(id)
            .exec()
            .then(doc => {
                console.log(`Buscando no banco ${doc}`);
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res
                        .status(404)
                        .json({ message: "Nenhum documento encontrado com o ID" });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });
    },

    //Atualizando a postagem.
    atualizarPostagem: (req, res, next) => {
        const id = req.params.postagemId;
        // const updateOpc = {};
        // for (const opc of req.body) {
        //     updateOpc[opc.propParam] = opc.value;
        // }
        PostagemModel.update({ _id: id }, {
            $set:
            {
                titulo: req.body.titulo,
                conteudo: req.body.conteudo,
                data: req.body.data,
                categoria: req.body.categoria,
                autor: req.body.autor,
                views: req.body.views
            }
        })
            .exec()
            .then(result => {
                console.log(result);
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },

    //Excluindo a postagem
    deletarPostagem: (req, res, next) => {
        const id = req.params.postagemId;
        PostagemModel.remove({ _id: id })
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'A postagem foi removida',
                    result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },

    //Lista a postagem pelo autor passado por parametro
    listaPostagemDoAutor: (req, res, next) => {
        const nome = req.params.nome;

        PostagemModel.find({ 'autor.nome': nome }, "")
            .exec()
            .then(doc => {
                console.log(`Buscando no banco ${doc}`);
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res
                        .status(404)
                        .json({ message: "Não foi encontrado documento com o nome do parametro" });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });
    },

    //Ver a postagem (contando as views)
    verPostagem: (req, res, next) => {
        var id = req.params.postagemId;

        PostagemModel.findByIdAndUpdate({ _id: id }, {
            $inc: {
                views: 1
            }
        })
            .exec()
            .then(doc => {
                console.log(`Buscando no banco ${doc.views}`);
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res
                        .status(404)
                        .json({ message: "Não foi encontrado documento com o nome do parametro" });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });

    }
}