## Why/Rationales

#### Why NodeJS?

NodeJS has a strong ecosystem and tooling for web development. Despite its
lack of parallelism and distributed support, it fits well for a simple
micro-service. Also, it contains tools for a good integration between the
front-end and back-end. It also has some really good performance due the
asynchronous nature.

#### Why GraphQL?

GraphQL is a typed DSL for the web. Despite still being a specification draft,
it has many tools for caching, cursor-based pagination, real-time subscriptions,
and so on. There's no much sense in use REST nowadays for complex data, cause
it obliges us to type-check and validate every user input sent on request.

#### Why Postgres?

Postgres is a mature database. It is fully open-source, and our project demands
CRUD-alike features. If such project was something like a Big Data one,
Cassandra could be a good replacement. Also, all the functional requirements
have a clear data specification for relation normalization (1st, 2nd & 3rd ones).
