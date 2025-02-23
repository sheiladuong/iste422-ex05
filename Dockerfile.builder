# Use Node.js to build app
FROM node:18-alpine AS builder
WORKDIR /ex05

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the app and build it
COPY . .
RUN npm run build
