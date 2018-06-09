"use strict";

const { connection } = require("../models");

const sync = async () => {
  await connection.authenticate();
  await connection.sync();
};

const notFound = (Model, id) => `${Model} not found for given id ${id}!`;

const check = (value, reason) => {
  if (value === null || value === undefined) {
    throw reason;
  }

  return value;
};

const project = (input, selectors) => {
  const output = {};

  for (const selector of selectors) {
    output[selector] = input[selector];
  }

  return output;
};

const failedCreation = (Model, id) => `Failed to create ${Model} for ID ${id}!`;

module.exports.sync = sync;
module.exports.notFound = notFound;
module.exports.check = check;
module.exports.project = project;
module.exports.failedCreation = failedCreation;
