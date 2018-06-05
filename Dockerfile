FROM node:8.11

LABEL io.github.marcoonroad.name="spot-challenge"
LABEL io.github.marcoonroad.maintainer="marcoonroad at gmail dot com"
LABEL io.github.marcoonroad.description="Spot Challenge - Blog API"
LABEL io.github.marcoonroad.docker.dockerfile="Dockerfile"
LABEL io.github.marcoonroad.license="MIT"
LABEL io.github.marcoonroad.version="0.0.1"

COPY package*.json ./
COPY yarn.lock ./

COPY packages/sdk/package*.json packages/sdk/
COPY packages/sdk/yarn.lock packages/sdk/

COPY packages/api/package*.json packages/api/
COPY packages/api/yarn.lock packages/api/

RUN npm install
ENV PATH="./node_modules/.bin:$PATH"

COPY . .
RUN yarn test

EXPOSE 3000
EXPOSE 3001
EXPOSE 3002

ENTRYPOINT ["yarn"]
CMD ["start:dev:debug"]
