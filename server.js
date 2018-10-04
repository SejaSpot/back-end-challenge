const mongoose = require("mongoose");
const app = require('./app');

const port = process.env.PORT || '3000';
app.set('port', port);

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