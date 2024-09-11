FROM node:20.17-alpine

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

# Add environment argument to differentiate between production and development
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# In development use nodemon, in production use the compiled code
CMD if [ $NODE_ENV = "development" ]; \
    then yarn dev --host 0.0.0.0; \
    else yarn build && yarn start; \
    fi