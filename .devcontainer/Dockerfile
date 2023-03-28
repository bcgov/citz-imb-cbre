FROM node:18.15.0

# update npm
RUN npm install -g npm@9.6.1

# install docker by using the convenience script
RUN curl -fsSL https://get.docker.com -o get-docker.sh
RUN sh get-docker.sh

# install docker-compose
RUN apt-get update
RUN apt-get install docker-compose-plugin
