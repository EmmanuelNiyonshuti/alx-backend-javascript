#use ubuntu 18.04 as the base image
FROM ubuntu:18.04

#update and install necessary tools
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y curl git vim

# Install NodeJS 12.x and npm
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs

#set the working directory inside the container
WORKDIR /usr/src/app

#copy files
COPY package.json babel.config.js .eslintrc.js ./

#install npm dependencies
RUN npm install

#copy the rest of the project files
COPY . .

# Command to start a shell session when the container starts
CMD ["bash"]

