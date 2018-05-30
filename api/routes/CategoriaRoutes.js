const express = require('express');
const router = express.Router();

//importando as funções da Categoria
const CategoriaController = require('../controllers/CategoriaController');

//listar todas as categorias
router.get("/", CategoriaController.listarCategorias);

//Rota para salvar categoria.
router.post("/", CategoriaController.salvarCategoria);

//Rota para buscar categoria.
router.get("/:categoriaId", CategoriaController.buscarCategoriaPorId);

//Rota para atualizar categoria.
router.put("/:categoriaId", CategoriaController.atualizarCategoria);

//Rota para deletar categoria.
router.delete("/:categoriaId", CategoriaController.deletarCategoria);

module.exports = router;