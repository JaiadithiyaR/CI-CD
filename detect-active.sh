#!/bin/bash
set -e

echo "Current directory:"
pwd

echo "Proxy folder:"
ls -la proxy

echo "Current active_backend.conf:"
cat proxy/active_backend.conf

if grep -q "frontend-blue" proxy/active_backend.conf; then
    echo "blue"
else
    echo "green"
fi