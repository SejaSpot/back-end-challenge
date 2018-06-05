'use strict';

const debug = require ('debug') ('sequelize');

module.exports = {
  username: 'postgres',
  password: 'postgres',
  database: 'spot_challenge_dev',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
  native: false,
  ssl: true,
  dialectOptions: { ssl: true },
  logging: debug,
  operatorsAliases: false
};
