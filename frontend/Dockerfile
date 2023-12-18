# Fetch the latest node image on alpine linux
FROM node:14-alpine AS development

# Set up the work directory
WORKDIR /usr/src/app

# Install dependencies
# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install 
RUN npm install

# Copy all files into the project
COPY . . 

#Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm","start"]