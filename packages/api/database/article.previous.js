"use strict";

const { paginate } = require("./helper");
const { Article } = require("./models");

const previous = (last, before) => paginate(Article, { last, before });

module.exports = previous;
