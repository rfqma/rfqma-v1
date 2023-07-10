FROM node:16-alpine

WORKDIR /app/maru-website

COPY package*.json /app/maru-website/
# COPY package.json /app/maru-website/
# COPY package-lock.json /app/maru-website/

RUN npm install

COPY . /app/maru-website/

CMD ["npm", "run", "start"]