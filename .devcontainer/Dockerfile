FROM node:18.15.0

# update npm
RUN npm install -g npm@9.6.1

# install docker by using the convenience script
RUN curl -fsSL https://get.docker.com -o get-docker.sh
RUN sh get-docker.sh

# install docker-compose
RUN curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose
RUN ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
