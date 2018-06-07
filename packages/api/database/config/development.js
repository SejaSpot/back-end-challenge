'use strict';

const debug = require ('debug') ('sequelize');

module.exports = {
  username: process.env.BLOG_DB_USER || 'postgres',
  password: process.env.BLOG_DB_PASS || 'postgres',
  database: process.env.BLOG_DB_NAME || 'spot_challenge_dev',
  host: process.env.BLOG_DB_HOST || 'localhost',
  port: process.env.BLOG_DB_PORT || '5432',
  dialect: process.env.BLOG_DB_DRIVER || 'postgres',
  native: false,
  ssl: false,
  dialectOptions: { ssl: false },
  logging: debug,
  operatorsAliases: false
};
