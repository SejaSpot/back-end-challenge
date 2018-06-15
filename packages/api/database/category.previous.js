"use strict";

const { paginate } = require("./helper");
const { Category } = require("./models");

const previous = (last, before) => paginate(Category, { last, before });

module.exports = previous;
