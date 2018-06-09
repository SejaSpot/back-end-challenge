"use strict";

const path = require("path");
const here = __dirname;

module.exports = {
  config: path.join(here, "database", "config", "index.js"),
  "models-path": path.join(here, "database", "models"),
  "migrations-path": path.join(here, "database", "migrations"),
  "seeders-path": path.join(here, "database", "seeds")
};
