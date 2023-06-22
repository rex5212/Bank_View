FROM node:latest
WORKDIR /bankview
COPY package*.json ./
COPY . .
EXPOSE 3000
CMD ["npm", "start"]