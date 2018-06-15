## Spot Back-end JR Challenge

GitLab CI: [![pipeline status](https://gitlab.com/marcoonroad/back-end-challenge/badges/marcoonroad_2018-06-02/pipeline.svg)](https://gitlab.com/marcoonroad/back-end-challenge/commits/marcoonroad_2018-06-02) <br/>
Travis CI: [![Build Status](https://travis-ci.com/marcoonroad/back-end-challenge.svg?branch=marcoonroad_2018-06-02)](https://travis-ci.com/marcoonroad/back-end-challenge)

---

- Candidate: Marco Aurélio da Silva
- On-line Site: https://spot-back-end-challenge.herokuapp.com/query/playground

#### Further Documentation

- [Challenge description/requirements](docs/CHALLENGE.md)
- [Rationale comments](docs/COMMENTS.md)
- [Database setup](docs/DATABASE.md)
- [Server setup](docs/INSTRUCTIONS.md)
- [Routes specification](docs/ROUTES.md)

TLDR,
- `$ docker-compose up --build --scale test=0` (development server)
- `$ docker-compose up --build --scale dev=0` (testing suite)

#### Performed Steps:

- [x] Template project setup
- [x] Web interface with mocked persistence (i.e, in-memory)
- [x] Data persistence ft. migrations

#### Used concepts/features:

- [x] Cursor-based pagination (Relay-compliant)
- [x] BDD/E2E/Integration tests
- [ ] Multi-stage Docker builds (see [Dockerfile](Dockerfile))
- [x] Rate-limit & resource-limit for endpoints & GraphQL
- [x] Process-manager
- [x] Health-checking
- [ ] Transactional control for multiple related queries
- [ ] Circuit-breaker + Health-checking for fail-fast connections (no timeouts)

#### Tools:

- [x] NodeJS (runtime)
- [x] CUID (offline ID generator)
- [x] Lerna (monorepo / multiproject tool)
- [ ] TypeScript (language)
- [x] Yarn (package manager)
- [ ] Babel (compiler)
- [x] Express (framework for back-end)
- [x] Husky (pre-commit/push git hooks setup)
- [x] Lint-Staged (git index linter)
- [ ] Webpack (package release)
- [x] Apollo (GraphQL toolkit)
- [x] Prettier (code formatter)
- [x] ESLint (linter)
- [x] Heroku (platform deploy)
- [x] Postgres (relational database)
- [x] Sequelize (ORM framework)
- [x] Jest (testing & coverage)
- [x] Docker (reproducible builds)
- [x] Docker Compose (containers linker)
