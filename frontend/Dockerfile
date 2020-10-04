FROM node:10-alpine

WORKDIR /usr/app

COPY ./frontend/package*.json ./

RUN npm install

COPY frontend .

EXPOSE 4444

CMD ["npm", "start"]
