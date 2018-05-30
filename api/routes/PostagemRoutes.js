const express = require('express');
const router = express.Router();

//importando as funções da Postagem
const PostagemController = require('../controllers/PostagemController');

//Rota da listar todas as postagens
router.get("/", PostagemController.listarPostagens);

//Rota para salvar a postagem
router.post("/", PostagemController.salvarPostagem);

//Rota para buscar a postagem
router.get("/:postagemId", PostagemController.buscarPostagemPorId);

//Rota para atualizar a postagem
router.put("/:postagemId", PostagemController.atualizarPostagem);

//Rota para deletar a postagem
router.delete("/:postagemId", PostagemController.deletarPostagem);

//Rota para buscar as postagens, pelo nome do autor
router.get("/buscarPostagemPorNome/:nome", PostagemController.listaPostagemDoAutor);

//Rota para vizualizar a postagem. (contando as views da postagem);
router.get("/verPost/:postagemId", PostagemController.verPostagem);

module.exports = router;