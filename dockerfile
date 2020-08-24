FROM node:12.18.3 as builder
SHELL ["/bin/bash", "-c"]
WORKDIR /opt/app-root/src/
COPY . .
RUN npm install --dev --verbose
RUN npm run build
#================================#
FROM nginx as runtime
COPY --from=builder opt/app-root/src/dist opt/app-root/src
SHELL ["/bin/bash", "-c"]
WORKDIR /opt/app-root/src/
EXPOSE 8085
COPY nginx.conf /etc/nginx/
CMD ["nginx", "-g", "daemon off;"]