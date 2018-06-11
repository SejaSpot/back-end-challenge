const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()
const authorController = require('./controller/author.controller')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/autores', authorController.getAll);

module.exports = app;