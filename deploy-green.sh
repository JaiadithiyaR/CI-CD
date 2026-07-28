#!/bin/bash

set -e

echo "Deploying GREEN environment..."

docker compose -f docker-compose.green.yml down || true
docker compose -f docker-compose.green.yml up -d --build

echo "Waiting for frontend-green to become healthy..."

until [ "$(docker inspect -f '{{.State.Health.Status}}' frontend-green)" = "healthy" ]; do
    echo "Waiting..."
    sleep 2
done

echo "GREEN environment is healthy."