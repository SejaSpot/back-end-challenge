'use strict';

module.exports = {
  username: 'postgres',
  password: 'postgres',
  database: 'spot_challenge_test',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
  native: false,
  ssl: true,
  dialectOptions: { ssl: true },
  logging: false,
  operatorsAliases: false
};
