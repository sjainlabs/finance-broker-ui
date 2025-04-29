# Step 1: Use the Node.js image to build the app
FROM node:alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

#COPY . /app
# Install dependencies
#RUN npm install -g @angular/cli
RUN npm install

# Copy the app source code
COPY . .

# Build the Angular app for production
ARG configuration=production
RUN npm run build -- --configuration $configuration
#RUN npm run build --prod

# Step 2: Use Nginx to serve the app
FROM nginx:stable-alpine

# Copy the Angular build files to Nginx's HTML directory
COPY --from=build /app/dist/browser /usr/share/nginx/html


# Expose port 80 to allow access to the app
EXPOSE 80


# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
#CMD ["ng", "serve", "--host", "0.0.0.0"]
