FROM node:16.19.0-alpine3.17

WORKDIR /usr/src/app
COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]