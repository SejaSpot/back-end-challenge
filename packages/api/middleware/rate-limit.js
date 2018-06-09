"use strict";

const limiter = require("connect-ratelimit");

const limits = {
  whitelist: [],
  blacklist: [],
  end: process.env.NODE_ENV === "production",
  categories: {
    whitelist: {
      totalRequests: -1,
      every: 60 * 60 * 1000
    },
    blacklist: {
      totalRequests: 0,
      every: 60 * 60 * 1000
    },
    normal: {
      totalRequests: 500,
      every: 60 * 60 * 1000
    }
  }
};

module.exports = app => app.use(limiter(limits));
