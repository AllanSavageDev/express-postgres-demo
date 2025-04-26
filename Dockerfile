# Use official Node image
FROM node:20-slim

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
RUN npm install

# Copy app source code
COPY . .

# Expose port 8000
EXPOSE 8000

# Run the server
CMD ["node", "index.js"]
