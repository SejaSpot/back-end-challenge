const express = require('express');
const router = express.Router();

//importando as funções do Autor
const AutorController = require('../controllers/AutorController');

//Rota da listar todos os autores
router.get("/", AutorController.listarAutores);

//Rota para salvar autor.
router.post("/", AutorController.salvarAutor);

//Rota para buscar autor.
router.get("/:autorId", AutorController.buscarAutorPorId);

//Rota para atualizar autor.
router.put("/:autorId", AutorController.atualizarAutor);

//Rota para deletar autor.
router.delete("/:autorId", AutorController.deletarAutor);

module.exports = router;