"use strict";

const cors = require("cors");
const express = require("express");
const router = express.Router();

const schema = require("../schema");
const { graphqlExpress } = require("apollo-server-express");
const expressPlayground = require("graphql-playground-middleware-express");

// request -> options
const queryOptions = () => {
  return {
    schema,
    rootValue: null,
    tracing: true,
    cacheControl: true
  };
};

const queryHandler = graphqlExpress(queryOptions);

router.post("/", cors(), queryHandler);

if (
  process.env.NO_PLAYGROUND === null ||
  process.env.NO_PLAYGROUND === undefined
) {
  const playgroundHandler = expressPlayground.default({ endpoint: "/query" });

  router.get("/playground", playgroundHandler);
}

module.exports = router;
