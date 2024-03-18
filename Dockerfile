FROM node:20.11-slim

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

# ARG FRONTEND_ENV=production

# ENV VUE_APP_ENV=${FRONTEND_ENV}

# ENV NODE_OPTIONS="--openssl-legacy-provider"

# Comment out the next line to disable tests
# RUN npm run test:unit

EXPOSE 8883

# RUN npm run build
