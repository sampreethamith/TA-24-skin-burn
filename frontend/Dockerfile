FROM node:14.2.0-alpine as build
# Working Directory
WORKDIR /app
#Copying package.json file to working directory
COPY package*.json /app/
#Installing app dependency
RUN npm install
#copy all the code
COPY . /app/
#EXPOSE PORT
EXPOSE 3000
# Run server
RUN npm run build

#Nginx server
FROM nginx:1.16.0-alpine
# Copying the react build to nginx server
COPY --from=build /app/build /usr/share/nginx/html
# remove the default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# Copy nginx configuration to nginx server
COPY nginx/nginx.conf /etc/nginx/conf.d

# Fire up nginx
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]

