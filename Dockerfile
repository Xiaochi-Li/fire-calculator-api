# Use an official Node.js runtime as the base image
FROM node:21.4.0

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the image
COPY package*.json ./


# Install the application's dependencies inside the Docker image
RUN npm install

# Copy the rest of the application into the Docker image
COPY ./dist .

RUN pwd

RUN ls -la

# Expose the port the app runs on
EXPOSE 8241

# Define the command to run the application
CMD [ "node", "app.js" ]