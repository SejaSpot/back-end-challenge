module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename:  './src/config/database/dev.sqlite3'
    },

    migrations: {
      directory: './src/config/database/migrations'
    },

    seeds: {
      directory:  './src/config/database/seeds'
    },

    "useNullAsDefault": false
  },

};
