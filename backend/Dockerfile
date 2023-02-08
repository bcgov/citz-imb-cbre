FROM node:19.5.0-alpine3.17 as build

WORKDIR /home/app

COPY ./package*.json /home/app

RUN npm install

COPY . .

# RUN npm run build

FROM node:19.5.0-alpine3.17

WORKDIR /home/app

RUN chown -R node:node /home/app

USER node

COPY --from=build /home/app/dist/src /home/app

CMD [ "node", "server.js" ]
