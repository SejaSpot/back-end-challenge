const express = require('express');
const mongoose = require('mongoose');

//importando o modelo de Autor
const AutorModel = require('../models/AutorModel');

module.exports = {

    //Listando todos os autores
    listarAutores: (req, res, next) => {
        AutorModel.find()
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

    //Savando o autor
    salvarAutor: (req, res, next) => {
        const autor = new AutorModel({
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            descricao: req.body.descricao
        });
        autor.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "O Autor foi criado com sucesso.",
                    autor: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },

    //Bucando por id 
    buscarAutorPorId: (req, res, next) => {
        const id = req.params.autorId;
        AutorModel.findById(id)
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

    //Atualizar Autor
    atualizarAutor: (req, res, next) => {
        const id = req.params.autorId;
        // const updateOpc = {};
        // for (const opc of req.body) {
        //     updateOpc[opc.propParam] = opc.value;
        // }
        AutorModel.update({ _id: id }, {
            $set:
            {
                nome: req.body.nome,
                descricao: req.body.descricao
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

    //Excluir autor
    deletarAutor: (req, res, next) => {
        const id = req.params.autorId;
        AutorModel.remove({ _id: id })
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Autor removido com sucesso',
                    result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    }
}