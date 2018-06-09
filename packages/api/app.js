"use strict";

var middleware = require("./middleware");
var express = require("express");
var path = require("path");

var indexRouter = require("./routes");

var app = express();

middleware(app);

app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);

module.exports = app;
