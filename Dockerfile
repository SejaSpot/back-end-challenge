FROM node:8.11

COPY lerna.json .
COPY package*.json ./
COPY yarn.lock ./

COPY packages/sdk/package*.json packages/sdk/
COPY packages/sdk/yarn.lock packages/sdk/

COPY packages/api/package*.json packages/api/
COPY packages/api/yarn.lock packages/api/

RUN yarn \
  --network-concurrency 1 \
  --non-interactive \
  --network-timeout 60000 \
  --check-files \
  --verbose

COPY .eslintignore .prettierignore ./
COPY .eslintrc.js .prettierrc ./
COPY . .

ENV PATH="./node_modules/.bin:$PATH"

### Bug:
#
# It's not possible to give privileged access during Dockerfile image build,
# only during container running. Due that, we can't run prettier cause it
# tries to access /proc to find the Current Working Directory for the globs,
# failing with:
#   [error] Unable to expand glob patterns: ./**/*.js !**/node_modules/** !./node_modules/**
#   [error] EACCES: permission denied, scandir '/proc/1/cwd'
#
# Our workaround is to move the tests into the Docker Compose services, and thus
# test there. So, we aren't using Multi-stage builds here. Docker is pretty
# strange in this sense. Multi-stage builds would only make sense for compiled
# languages, where the production image drops the Compiler toolkit and copies
# only the generated binaries, e.g, as is the case of Go, OCaml and Java.
#

LABEL io.github.marcoonroad.name="marcoonroad/spot-challenge"
LABEL io.github.marcoonroad.maintainer="marcoonroad at gmail dot com"
LABEL io.github.marcoonroad.description="Spot Challenge - Blog API"
LABEL io.github.marcoonroad.docker.dockerfile="Dockerfile"
LABEL io.github.marcoonroad.license="MIT"
LABEL io.github.marcoonroad.version="0.0.1"

EXPOSE 3000
EXPOSE 3001
EXPOSE 3002
