# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=16.19.1
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Install node modules
COPY package*.json ./
RUN npm install
COPY . .

# Start the server by default, this can be overwritten at runtime
EXPOSE 3001
CMD [ "npm", "run", "start" ]
