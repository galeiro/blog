# Set image from base on offical node lts alpine
ARG VERSION=18
FROM node:$VERSION

# Set working directory
WORKDIR /app

# Copy all files
COPY . /app

# Install dependencies
RUN yarn install

# Build app
#RUN yarn build

# Expose the listening port
COPY . /app

EXPOSE 3000

# Run yarb start script when container starts
CMD ["yarn", "dev"]