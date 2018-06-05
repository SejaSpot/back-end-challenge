'use strict';

const debug = require ('debug') ('sequelize');
const parse = require('parse-database-url');

const config = parse (process.env.DATABASE_URL);

module.exports = {
  username: config.user,
  password: config.password,
  host: config.host,
  port: config.port,
  database: config.database,
  native: true,
  ssl: true,
  dialect: config.driver,
  dialectOptions: {
    ssl: { require: true }
  },
  logging: debug,
  operatorsAliases: false
};
