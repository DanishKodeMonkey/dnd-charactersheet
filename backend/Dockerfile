# Use an official MongoDB image as base image
FROM mongo:latest

# Set working directory in container
WORKDIR /usr/src/app

#Copy content of the local  src directory to the working directory
COPY . .

# Expose default MongoDB port
EXPOSE 27017

# Start MongoDB
CMD ["mongod"]