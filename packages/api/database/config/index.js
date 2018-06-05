'use strict';

const NODE_ENV = process.env.NODE_ENV;
module.exports[NODE_ENV] = require (`./${NODE_ENV}`);
