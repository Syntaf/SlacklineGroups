FROM nginx:latest

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
COPY reverse-proxy.conf.template /etc/nginx/conf.d/reverse-proxy.conf.template

EXPOSE 8020
STOPSIGNAL SIGTERM

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
