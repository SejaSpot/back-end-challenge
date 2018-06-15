"use strict";

const { paginate } = require("./helper");
const { Subcategory } = require("./models");

const next = (first, after) => paginate(Subcategory, { first, after });

module.exports = next;
