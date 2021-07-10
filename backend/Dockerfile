FROM node:14

RUN mkdir -p /backend

WORKDIR /backend

COPY package*.json /backend/

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","server.js"]