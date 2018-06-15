"use strict";

const { paginate } = require("./helper");
const { Author } = require("./models");

const previous = (last, before) => paginate(Author, { last, before });

module.exports = previous;
