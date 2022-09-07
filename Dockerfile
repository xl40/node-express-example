FROM coding-public-docker.pkg.coding.net/public/docker/nodejs:8

WORKDIR /usr/src/app

COPY . .

CMD [ "npm", "start" ]