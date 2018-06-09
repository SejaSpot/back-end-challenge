"use strict";

const cookieParser = require("cookie-parser");

module.exports = app => app.use(cookieParser());
