"use strict";

const axios = require("axios");

let PORT = process.env.PORT ? process.env.PORT - 0 : 3000;

if (process.env.NODE_ENV === "development") PORT += 1;
if (process.env.NODE_ENV === "testing") PORT += 2;
if (process.env.NODE_ENV === "coverage") PORT += 3;

const config = {
  baseURL: `http://localhost:${PORT}`,
  responseType: "json",
  responseEncoding: "utf8",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "accept-encoding": "gzip, deflate",
    Connection: "keep-alive"
  }
};

const translate = response => {
  return {
    statusCode: response.status,
    body: response.data
  };
};

const recover = error => {
  if (error.response) {
    return translate(error.response);
  } else {
    return {
      statusCode: 418,
      headers: { "Content-Type": "text/plain" },
      body: "Request/connection error!"
    };
  }
};

/*
const post = (url, params = {}) => {
  const delay = promise.delay(5);

  const request = delay.then(( ) =>
    axios.post(url, params, config).then(translate, recover));

  return promise.join(request);
};

const get = url => axios.get(url, config).then(translate, recover);
*/

const post = (url, params = {}) =>
  axios.post(url, params, config).then(translate, recover);

const query = (query, variables) => post("/query", { query, variables });

module.exports.query = query;
