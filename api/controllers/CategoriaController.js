const express = require('express');
const mongoose = require('mongoose');

//importando o modelo de Categoria
const CategoriaModel = require('../models/CategoriaModel');

module.exports = {

    //Listando todas as categorias
    listarCategorias: (req, res, next) => {
        CategoriaModel.find()
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
    //Savando a categoria
    salvarCategoria: (req, res, next) => {
        const autor = new CategoriaModel({
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            subcategoria: req.body.subcategoria
        });
        autor.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "Categoria criada com sucesso",
                    Categoria: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },

    //Bucando a categoria pro id
    buscarCategoriaPorId: (req, res, next) => {
        const id = req.params.categoriaId;
        CategoriaModel.findById(id)
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

    //Atualizando a categoria.
    atualizarCategoria: (req, res, next) => {
        const id = req.params.categoriaId;
        // const updateOpc = {};
        // for (const opc of req.body) {
        //     updateOpc[opc.propParam] = opc.value;
        // }
        CategoriaModel.update({ _id: id }, {
            $set:
            {
                nome: req.body.nome,
                subcategoria: req.body.subcategoria
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

    //Excluir a categoria
    deletarCategoria: (req, res, next) => {
        const id = req.params.categoriaId;
        CategoriaModel.remove({ _id: id })
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Categoria removida com sucesso',
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