# use as option to tag this phase (builder)
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# Copy files from our previous stage to this new container
COPY --from=builder /app/build /usr/share/nginx/html

# The nginx container already has a default start command to start up
# So we don't have to specify an explicit startup cmd




