'use strict';

const Sequelize = require ('sequelize');
const config = require ('../config');
const author = require ('./author');
const cls = require('continuation-local-storage');

const namespace = cls.createNamespace('spot-challenge-sequelize-namespace');

Sequelize.useCLS (namespace);

const connect = ( ) => {
  const DATABASE_URL = process.env.DATABASE_URL;

  if ((DATABASE_URL === null) || (DATABASE_URL === undefined)) {
    const NODE_ENV = process.env.NODE_ENV || "development";

    return new Sequelize (
      config[ NODE_ENV ].database,
      config[ NODE_ENV ].username,
      config[ NODE_ENV ].password,
      config[ NODE_ENV ]
    );
  }
  else {
    return new Sequelize (DATABASE_URL);
  }
};

const sequelize = connect ( );

const transaction = (procedure) => sequelize.transaction (procedure);

const models = {
  Author: author (sequelize, Sequelize),
};

models.Author.associate (models);

module.exports = models;
module.exports.connection = sequelize;
module.exports.connect = connect;
module.exports.namespace = namespace;
module.exports.transaction = transaction;

module.exports.authorAttrs = [
  'id', 'name', 'bio', 'createdAt', 'updatedAt', 'version'
];
