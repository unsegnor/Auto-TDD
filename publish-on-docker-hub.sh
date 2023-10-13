#!/bin/bash

build_and_push_image() {
  FOLDER=$1
  VERSION=$(node -p "require('./package.json').version")
  APP_NAME=$(node -p "require('./package.json').name")
  DOCKERHUB_USERNAME=$(node -p "require('./package.json').dockerHubUsername")
  IMAGE_NAME="$DOCKERHUB_USERNAME/$APP_NAME-$FOLDER:$VERSION"
  docker build -t $IMAGE_NAME -f ./$FOLDER/Dockerfile . 
  docker push $IMAGE_NAME
}

build_and_push_image "$1"
