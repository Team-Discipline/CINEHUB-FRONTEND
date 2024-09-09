FROM node:14-alpine as builder

WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
#RUN npx next build
EXPOSE 3000
CMD ["npm","run","dev"]