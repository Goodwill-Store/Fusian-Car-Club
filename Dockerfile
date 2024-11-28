# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set environment variable
ENV NODE_ENV=development

# Set the working directory to /usr/src/fusian-car-club
WORKDIR /usr/src/docker-fusian

# Copy package.json and package-lock.json from the root
COPY package.json package-lock.json ./

# Copy the server and client directories
COPY server ./server
COPY client ./client

# Copy the .env file from the root (this is important for DB credentials)
COPY .env ./

# Install dependencies for the root-level package.json
RUN npm install

# Install dependencies for the client
WORKDIR /usr/src/docker-fusian/client
RUN npm install  # This should install Vite and other client dependencies

# Install dependencies for the server (if needed)
WORKDIR /usr/src/docker-fusian/server
RUN npm install  # Install server dependencies

# Expose the port that the app runs on (replace 3005 with relevant)
EXPOSE 3006 5173

# Run the app with npm run dev from the root
WORKDIR /usr/src/docker-fusian
CMD ["npm", "run", "dev"]
