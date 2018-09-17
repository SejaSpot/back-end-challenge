const express = require("express");
const bodyParser = require('body-parser');
const author = require("./components/author");
const category = require("./components/category");
const post = require("./components/post");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/author", author.router);
app.use("/category", category.router);
app.use("/post", post.router);

module.exports = app;