#!/bin/sh

# Replace environment variables in nginx.template and generate nginx.conf
envsubst '${PORT}' < /etc/nginx/nginx.template > /etc/nginx/nginx.conf

# Start Nginx
nginx -g "daemon off;"
