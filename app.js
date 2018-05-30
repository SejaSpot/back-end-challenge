//Intânciando as libs/framwork externos
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const conexaoUrl = require('./config/urlConnectMongo');

//Conexão com MongoDb
mongoose.connect(conexaoUrl.link);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Instanciando o modulo de rotas
const Autor = require("./api/routes/AutorRoutes");
const Categoria = require("./api/routes/CategoriaRoutes");
const Postagem = require("./api/routes/PostagemRoutes");

//Aplicando as rotas no servidor;
app.use("/autor", Autor);
app.use("/categoria", Categoria);
app.use("/postagem", Postagem);

//exportando
module.exports = app;