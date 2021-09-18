FROM node:16-slim
WORKDIR /egg-app
ADD package.json /egg-app
RUN npm install --registry=https://registry.npm.taobao.org 
ADD . /egg-app

RUN chmod 700 /run
CMD npm run start
EXPOSE 7001
