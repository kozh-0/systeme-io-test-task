FROM node:20.17-alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "start"]