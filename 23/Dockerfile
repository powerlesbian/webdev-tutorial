# Helpful docker cmds
# docker image list
# docker ps -a or docker container list
# docker system prune
# docker build -t node-express-demo .
# docker run -dp 3000:3000 --name node-express  node-express-demo
# docker stop node-express

FROM node:lts-alpine

WORKDIR /app

COPY . .
RUN npm install --only=prod

EXPOSE 3000
CMD [ "node", "server.js" ]
