#!/bin/bash

TARGET=$1

if [ "$TARGET" = "blue" ]; then
    CONTAINER="frontend-blue"
elif [ "$TARGET" = "green" ]; then
    CONTAINER="frontend-green"
else
    echo "Usage: ./health_check.sh blue|green"
    exit 1
fi

echo "Checking $TARGET environment..."

docker exec "$CONTAINER" wget --spider -q http://localhost

if [ $? -eq 0 ]; then
    echo "✅ Health Check Passed!"
    exit 0
else
    echo "❌ Health Check Failed!"
    exit 1
fi