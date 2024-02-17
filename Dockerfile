# Use an official Node runtime as a parent image
FROM node:18-alpine as BUILD_IMAGE

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package.json .

# Install app dependencies
RUN npm install

# Copy the local Vite React app files to the container at /app
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "dev"]