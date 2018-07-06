const express = require('express');
const router = express.Router();
const controller = require('../controller/categoria_controller');

//rotas de acesso para metodos da Categoria

router.post('/', controller.post); //acesso ao metodo post
router.get('/', controller.get); //acesso ao metodo get
router.get('/:slug', controller.getBySlug); //acesso ao metodo getBySlug
router.get('/admin/:id', controller.getById); //acesso ao metodo getById
router.get('/tags/:tag', controller.getBySub); //acesso ao metodo getBySub
router.put('/admin/:id', controller.put); //acesso ao metodo put
router.put('/:slug', controller.putBySlug); //acesso ao metodo putBySlug
router.delete('/', controller.del); //acesso ao metodo del

module.exports = router;