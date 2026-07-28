#!/bin/bash

set -e

echo "Deploying BLUE environment..."

docker rm -f backend-blue frontend-blue 2>/dev/null || true

docker compose -f docker-compose.blue.yml up -d --build

echo "Waiting for frontend-blue to become healthy..."

until [ "$(docker inspect -f '{{.State.Health.Status}}' frontend-blue)" = "healthy" ]; do
    echo "Waiting..."
    sleep 2
done

echo "BLUE environment is healthy."