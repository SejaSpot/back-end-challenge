var options = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/back-end-challenge',
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds/production',
          },
      },
  };

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = require('knex')(config);