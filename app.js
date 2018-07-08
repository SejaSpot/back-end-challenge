const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require("./routes");
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);

mongoose
  .connect("mongodb://mongo/")
  .then(() => {
    app.listen(port, () => {
      console.log(`Aplicação ouvindo na porta ${port}!`);
    });
  })
  .catch((err) => {
    console.error(err);
  });