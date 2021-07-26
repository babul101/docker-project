FROM node:14.17.0-alpine3.12

WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .


