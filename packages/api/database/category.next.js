"use strict";

const { paginate } = require("./helper");
const { Category } = require("./models");

const next = (first, after) => paginate(Category, { first, after });

module.exports = next;
