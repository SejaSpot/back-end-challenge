## Instructions to replicate the Database environment.

---

**NOTE:** All the commands here are assumed to run under `packages/api`.

---

We're using the Postgres database. For the development and testing environments,
we have a fixed configuration for each. Nevertheless, it is also possible to run
them inside a container to not break any existing configuration in your local
host machine.

#### Development / Test databases

See the file `database/config/index.js` for the full configuration. You
can even edit that file manually to configure yourself that environment.
Nevertheless, we assume the following things for an active connection:
- Port at `$BLOG_DB_PORT`, default `5432`
- Host at `$BLOG_DB_HOST`, default `localhost`
- User `$BLOG_DB_USER`, default `postgres`
- Password `$BLOG_DB_PASS`, default `postgres`
- The database `spot_challenge_dev` for the development environment, or
- The database `spot_challenge_test` for the test environment

(Note: you can override the database names with `$BLOG_DB_NAME`.)

---

Actually, the database names aren't needed. You can create them by just typing:
```shell
$ NODE_ENV=development npm run db:create # for development
$ NODE_ENV=testing npm run db:create # for test environment
```

Migrations are performed with:
```shell
$ NODE_ENV=development npm run db:migrate
$ NODE_ENV=testing npm run db:migrate
```

A short alias to initialize everything (including database creation, migration &
seeds):
```shell
$ NODE_ENV=development npm run db:spawn
$ NODE_ENV=testing npm run db:spawn
```

#### Production database

The production database assumes an environment variable called `$DATABASE_URL`.

#### Additional commands

There's also the `db:kill` NPM script, but I don't recommend its usage on
production, only in development or test to clean up some garbage around (it
reverts all the seeds and data, and after, all the migrations to finally drop
the database name). So,
there are the commands:
```shell
$ NODE_ENV=testing npm run db:kill
$ NODE_ENV=development npm run db:kill
$ NODE_ENV=production npm run db:kill # don't use that, you have been warned!
```

And the following ones which drop and reinitialize the database:
```shell
$ NODE_ENV=development npm run db:respawn
$ NODE_ENV=testing npm run db:respawn
$ NODE_ENV=production npm run db:respawn # don't use this one as well :)
```
