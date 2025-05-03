# Step 1: Use the Node.js image to build the app
FROM node:alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

#COPY . /app
# Install dependencies
# Install dependencies
# Install dependencies
#RUN npm install -g @angular/cli
RUN npm install

# Copy the app source code
COPY . /app

# Build the Angular app for production
ARG configuration=production
RUN npm run build -- --configuration=production
#RUN npm run build --prod

# Step 2: Use Nginx to serve the app
FROM nginx:stable-alpine

# Copy the Angular build files to Nginx's HTML directory
COPY --from=build /app/dist/browser /usr/share/nginx/html


COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
