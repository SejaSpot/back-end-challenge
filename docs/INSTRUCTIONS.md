## Instructions to replicate and configure the whole API service.

This project uses NodeJS and NPM/Yarn, so every dependency is managed. To install
the dependencies, either type:

```shell
$ npm install
```

Or, if you prefer Yarn:

```shell
$ yarn
```

#### Starting the server in foreground

To start the server in foreground (production mode), just type:

```shell
$ npm start # or yarn start
```

It assumes a `$PORT` environment variable, and listens on fixed `localhost`.
The default case when the port isn't given is `3000`. It also assumes a
`$DATABASE_URL` environment variable (it's only assumed on `$NODE_ENV` being
`production`).

To start in development mode (with live code reload), write `npm run start:dev`.

#### Testing the application

To run the tests, just type:

```shell
$ npm test # or yarn test
```

Tests start their own running server instance to send requests and check
responses in a Behavior Driven Development / End-to-end style. Tests also
inherit the existing servers variables, in the case, `$PORT` (to
be honest, the port which they listen will be `PORT.toNumber()` + 2, or 3002
otherwise - the development instance will be `PORT + 1`).
