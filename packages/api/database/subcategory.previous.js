"use strict";

const { paginate } = require("./helper");
const { Subcategory } = require("./models");

const previous = (last, before) => paginate(Subcategory, { last, before });

module.exports = previous;
