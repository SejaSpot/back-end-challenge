"use strict";

const { connection } = require("../../database");

const setUp = async () => {
  await connection.sync({ force: true, match: /_test$/ });
};

const tearDown = async () => {
  await connection.drop();
  await connection.close();
};

module.exports.setUp = setUp;
module.exports.tearDown = tearDown;

const sandbox = closure => async () => {
  const transaction = await connection.transaction();

  try {
    return await closure();
  } finally {
    await transaction.rollback();
  }
};

module.exports.sandbox = sandbox;
