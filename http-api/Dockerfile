FROM node:21.7.2

# Update npm
RUN npm i -g npm@9.6.5

# Copy logic and http-api files
COPY ./http-api ./http-api
COPY ./domain ./domain
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

# Install dependencies
RUN npm i

# Change to a non root user
USER node

# Start api on run
CMD [ "node", "./http-api/start.js" ]

HEALTHCHECK --interval=1s --timeout=1s --retries=5 CMD [ "node", "healthcheck.js" ]
