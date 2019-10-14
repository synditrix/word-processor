FROM node:10.15.3
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package*.json /usr/src/app/
RUN npm install -g nodemon && npm install
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]