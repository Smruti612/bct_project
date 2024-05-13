# Stage 1 - Build the React app
FROM node:16 AS build
WORKDIR /app
COPY ./client/package*.json ./client/
RUN cd ./client && npm install
COPY ./client/. ./client/
RUN cd ./client && npm run build

# Stage 2 - Build the Solidity contracts
FROM node:16 AS solidity
WORKDIR /app
COPY ./contracts ./contracts
COPY ./migrations ./migrations
COPY truffle-config.js .
RUN npm install -g truffle
RUN truffle compile

# Stage 3 - Final image
FROM node:16
WORKDIR /app
COPY --from=build /app/client/build ./client
COPY --from=solidity /app/build/contracts ./contracts
COPY ./package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
