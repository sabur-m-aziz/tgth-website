# FROM node:18.20.4-alpine 
FROM node:18-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json .
COPY yarn.lock .
RUN yarn

# Copying source files
COPY . .

# Building app
RUN yarn build

# Running the app
# CMD ["yarn", "start"]

# Build stage
# FROM node:18.14.2-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN yarn install
# COPY . .