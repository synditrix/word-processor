FROM node:10.15.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install && npm install -g nodemon && npm install react-scripts@3.0.1 -g --silent

EXPOSE 3000
CMD [ "npm", "start" ]