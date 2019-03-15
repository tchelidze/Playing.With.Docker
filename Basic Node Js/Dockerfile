FROM node:alpine
WORKDIR /web

COPY src/package.json ./
RUN npm install

COPY ./src ./

LABEL name="sample-node-js"
CMD ["npm", "start"]