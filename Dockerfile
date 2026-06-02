# Stage 1: Build the React application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# Using a wildcard ensures both package.json AND package-lock.json are copied
COPY package*.json ./

# Install dependencies
# If you are using yarn, you can use `yarn install` instead
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
