FROM node:lts-alpine3.19
WORKDIR /swetha
COPY . .
RUN npm install
CMD ["node", "app.js"]