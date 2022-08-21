FROM node:18-alpine

RUN npm install -g npm@8.18.0

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i --legacy-peer-deps

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
