[![Build Status](https://travis-ci.org/unsegnor/new-app.svg?branch=master)](https://travis-ci.org/unsegnor/new-app)

# new-app
New application schema with:
- Cucumber tests
- Integration tests
- Unit tests
- Mutation testing
- Ports and adapters templates
- Github actions for CI
- Component tests using docker containers

## Getting started
1. Rename the product name on package.json
2. Set the repository, bugs and homepage urls
3. Set the keywords, description and author
4. Set the dockerHubUsername property if you want to automatically publish your docker images
4. Set repository secrets in GitHub:
    4.1 One named NPM_TOKEN with an automation token to publish the package to NPM
    4.2 One named DOCKERHUB_TOKEN with a token from DockerHub to publish the images

## Run all tests

    npm test