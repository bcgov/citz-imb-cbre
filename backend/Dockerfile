FROM node:18.15.0 as build

WORKDIR /monorepo

COPY ["package*.json", ".eslintrc.json", ".prettierrc", "tsconfig.base.json", "./"]

COPY /backend/package*.json ./backend/

RUN npm install

COPY ./backend ./backend

WORKDIR /monorepo/backend

RUN npm run test

RUN npm run build


FROM node:18.15.0-alpine3.17

WORKDIR /app

# RUN chown -R node:node /app

# USER node

COPY --from=build /monorepo/backend/dist/src .

EXPOSE 3000

# CMD [ "ls", "-l" ]
CMD [ "node", "index.js" ]
