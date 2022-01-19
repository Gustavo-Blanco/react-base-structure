FROM node:14-buster

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY . ./

RUN npm install

CMD ["npm", "start"]