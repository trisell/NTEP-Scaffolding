# smart people already figured out how to install node
FROM node:19-alpine
# create a work directory inside the container
RUN mkdir /app
WORKDIR /app

# install utilities. I currently like yarn
RUN npm install -g nodemon @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript eslint ts-node jest ts-jest
