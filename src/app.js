const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')

const app = express()
const authorController = require('./controller/author.controller')
const postController = require('./controller/post.controller')
const categoryController = require('./controller/category.controller')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/autores', authorController.getAll);
app.get('/autor/:id', authorController.get);
app.post('/autor', authorController.create);
app.put('/autor/:id', authorController.update);
app.delete('/autor/:id', authorController.delete);

app.get('/blog', postController.get);
app.post('/blog', postController.create);
app.put('/blog', postController.update);
app.delete('/blog/:id', postController.delete);

app.get('/categorias', categoryController.getAll);
app.get('/categoria/:id', categoryController.get);
app.post('/categoria', categoryController.create);
app.put('/categoria/:id', categoryController.update);
app.delete('/categoria/:id', categoryController.delete);


module.exports = app;