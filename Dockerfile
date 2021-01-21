FROM node:12 
WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

EXPOSE 80

CMD node server.js 

