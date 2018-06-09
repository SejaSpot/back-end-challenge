"use strict";

const idempotency = require("@optimuspay/express-idempotency");

module.exports = app => app.use(idempotency());
