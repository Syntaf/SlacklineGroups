#!/usr/bin/env sh
set -eu

envsubst '${DOMAIN}' < /etc/nginx/conf.d/reverse-proxy.conf.template > /etc/nginx/conf.d/reverse-proxy.conf

exec "$@"