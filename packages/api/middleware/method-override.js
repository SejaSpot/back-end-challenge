"use strict";

const methodOverride = require("method-override");

const apply = app => app.use(methodOverride());

module.exports = apply;
