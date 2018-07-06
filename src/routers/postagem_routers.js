const express = require('express');
const router = express.Router();
const controller = require('../controller/postagem_controller');

//rotas de acesso para metodos da postagem

router.post('/', controller.post); //acesso ao metodo post
router.get('/', controller.get); //acesso ao metodo get
router.get('/:slug', controller.getBySlug); //acesso ao metodo getBySlug
router.get('/admin/:id', controller.getById); //acesso ao metodo getById
router.get('/categoria/:tag', controller.getByCat); //acesso ao metodo getByCat
router.get('/autor/:id', controller.getByAutor); //acesso ao metodo getByAutor
router.put('/admin/:id', controller.put); //acesso ao metodo put
router.put('/:slug', controller.putBySlug); //acesso ao metodo putBySlug
router.delete('/', controller.del); //acesso ao metodo del

module.exports = router;