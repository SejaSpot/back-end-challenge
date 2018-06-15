"use strict";

const { paginate } = require("./helper");
const { Author } = require("./models");

const next = (first, after) => paginate(Author, { first, after });

module.exports = next;
