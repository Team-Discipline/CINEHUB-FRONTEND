FROM node:14-alpine as builder

WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","run","build"]
EXPOSE 3000
CMD ["npm","run","start"]