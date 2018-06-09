"use strict";

const helmet = require("./helmet");
const idempotency = require("./idempotency");
const debug = require("./debug");
const compression = require("./compression");
const logger = require("./logger");
const rateLimit = require("./rate-limit");
const bodyParser = require("./body-parser");
const cookieParser = require("./cookie-parser");
const methodOverride = require("./method-override");

module.exports = app => {
  helmet(app);
  idempotency(app);
  debug(app);
  compression(app);
  logger(app);
  rateLimit(app);
  bodyParser(app);
  cookieParser(app);
  methodOverride(app);
};
