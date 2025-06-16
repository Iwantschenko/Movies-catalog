#!/bin/sh

# Підставляємо змінну API_URL у конфіг nginx
envsubst '$VITE_API_URL' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf.tmp
mv /etc/nginx/conf.d/default.conf.tmp /etc/nginx/conf.d/default.conf

exec "$@"
