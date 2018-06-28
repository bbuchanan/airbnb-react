#! /bin/bash
yarn build:server
heroku container:push web
heroku container:release web
# docker build -t bbuchanan/abb:latest .
# docker push bbuchanan/abb:latest
# ssh root@178.128.34.223 "docker pull bbuchanan/abb:latest && docker tag bbuchanan/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"