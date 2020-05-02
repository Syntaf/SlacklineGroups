FROM nginx:latest

ARG MODE=production

COPY reverse-proxy.conf.$MODE /etc/nginx/conf.d/reverse-proxy.conf
EXPOSE 8020
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
