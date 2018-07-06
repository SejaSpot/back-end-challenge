const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao bd
mongoose.connect('mongodb://blog:desafio2018@ds121871.mlab.com:21871/m_blog');

//carrega os models
const autor = require('./models/autor');
const cat_postagem = require('./models/cat_postagem');
const categoria = require('./models/categoria');
const postagem = require('./models/postagem');

//Carrega as rotas
const autor_routers = require('./routers/autor_routers');
const categoria_routers = require('./routers/categoria_routers');
const postagem_routers = require('./routers/postagem_routers');

//define acesso as rotas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/autor', autor_routers);
app.use('/categoria', categoria_routers);
app.use('/postagem', postagem_routers);

module.exports = app;