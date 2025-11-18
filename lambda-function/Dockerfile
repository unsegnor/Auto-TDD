FROM public.ecr.aws/lambda/nodejs:24

# Update npm
RUN npm i -g npm@9.6.5

# Copy your function's source code and package.json into the container following indications from the AWS Lambda documentation
# https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-create-1
#TODO: could we use a command to reference the files when testing and copying them when running in production?
COPY ./domain ${LAMBDA_TASK_ROOT}/domain
COPY ./lambda-function/app.js package.json ${LAMBDA_TASK_ROOT}/

# Install NPM dependencies
RUN npm install

# Set the Lambda function handler as the entry point
CMD [ "app.handler" ]
