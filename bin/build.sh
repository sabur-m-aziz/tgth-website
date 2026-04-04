#!/usr/bin/env bash

. ./bin/parse_env.sh

docker build --no-cache -t "${CONTAINER_NAME}" -f ./docker/Dockerfile.production . 
docker tag ${CONTAINER_NAME}:latest naimsiddiqui/${CONTAINER_NAME}:latest
docker push naimsiddiqui/${CONTAINER_NAME}:latest

