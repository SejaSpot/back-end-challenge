"use strict";

const { paginate } = require("./helper");
const { Article } = require("./models");

const next = (first, after) => paginate(Article, { first, after });

module.exports = next;
