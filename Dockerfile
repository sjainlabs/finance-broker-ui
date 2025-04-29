# Step 1: Use the Node.js image to build the app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app source code
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Step 2: Use Nginx to serve the app
FROM nginx:stable-alpine

# Copy the Angular build files to Nginx's HTML directory
COPY --from=build /app/dist/finance-broker-ui /usr/share/nginx/html

# Expose port 80 to allow access to the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
