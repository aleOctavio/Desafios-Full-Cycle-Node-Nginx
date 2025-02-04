FROM node:22

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.9.2

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN apt-get install npm -y && \
    npm install express --save

RUN npm install mysql --save

RUN npm install --save sequelize && \
    npm install --save mysql2

RUN npm install --save express-handlebars

RUN npm install --save body-parser

EXPOSE 3000