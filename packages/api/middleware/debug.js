"use strict";

const debug = require("express-debug");
const options = {
  path: "/meta/debug"
};

module.exports = app => {
  if (process.env.NODE_ENV !== "production") {
    debug(app, options);
  }

  return app;
};
