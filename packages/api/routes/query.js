"use strict";

const cors = require("cors");
const express = require("express");
const router = express.Router();

const schema = require("../schema");
const { graphqlExpress } = require("apollo-server-express");
const expressPlayground = require("graphql-playground-middleware-express");
const depthLimit = require("graphql-depth-limit");
const costAnalysis = require("graphql-cost-analysis").default;

// request -> options
const queryOptions = req => {
  return {
    schema,
    rootValue: null,
    tracing: true,
    cacheControl: true,
    validationRules: [
      depthLimit(7),
      costAnalysis({
        variables: req.body.variables,
        maximumCost: 1000
      })
    ]
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
