FROM node:18.14.0 as build

WORKDIR /home/app

COPY ./package*.json /home/app

RUN npm install

COPY . .

# RUN npm run build

FROM node:18.14.0

WORKDIR /home/app

RUN chown -R node:node /home/app

USER node

COPY --from=build /home/app/dist/src /home/app

CMD [ "node", "server.js" ]
