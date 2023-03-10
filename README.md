# citz-imb-cbre

## Dev Environment

### Setup

install:
- VS Code with Dev Containers Extension
- Docker Desktop

After cloning locally and opening in VS Code you will be prompted to open in container - Accept this.

The container will have all necessary extensions and environments needed to work on this project.  After creating the container,
the npm packages will be installed with clean install so that your node_modules will be up to date.

### running the applications

```node
npm run dev
```

this will start the database, backend, and frontend in containers - in development mode (ie autorestart on changes)

to stop the containers:
```node
npm run dev:down
```

