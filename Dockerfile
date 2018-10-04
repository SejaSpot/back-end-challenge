FROM node:10.6.0
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

EXPOSE 3000

CMD ["npm", "nodemon"]