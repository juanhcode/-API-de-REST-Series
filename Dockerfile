FROM node:16.14.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#MONGO_Host

CMD [ "npm","start" ]