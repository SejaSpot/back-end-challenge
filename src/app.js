const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')


const app = express()
const authorController = require('./controller/author.controller')
const blogController = require('./controller/blog.controller')
const categoryController = require('./controller/category.controller')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/autores', authorController.getAll);
app.get('/autores/:id', authorController.get);
app.post('/autores', authorController.create);
app.put('/autores/:id', authorController.update);
app.delete('/autores/:id', authorController.delete);

app.get('/blog', blogController.get);
app.post('/blog', blogController.create);
app.put('/blog', blogController.update);
app.delete('/blog', blogController.delete);

app.get('/categoria', categoryController.getAll);
app.get('/categoria', categoryController.get);
app.post('/categoria', categoryController.create);
app.put('/categoria', categoryController.update);
app.delete('/categoria', categoryController.delete);

module.exports = app;