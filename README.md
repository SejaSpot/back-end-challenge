## Spot Back-end JR Challenge

[![pipeline status](https://gitlab.com/marcoonroad/back-end-challenge/badges/marcoonroad_2018-06-02/pipeline.svg)](https://gitlab.com/marcoonroad/back-end-challenge/commits/marcoonroad_2018-06-02)

---

- Candidate: Marco Aurélio da Silva
- On-line Site: https://spot-back-end-challenge.herokuapp.com/

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

- [ ] Cursor-based pagination (Relay-compliant)
- [x] BDD/E2E/Integration tests
- [ ] Multi-stage Docker builds (see [Dockerfile](Dockerfile))
- [x] Rate-limit & resource-limit for endpoints & GraphQL
- [x] Process-manager
- [x] Health-checking
- [ ] Transactional control for multiple related queries

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
