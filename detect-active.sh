#!/bin/bash

if grep -q "frontend-blue" proxy/active_backend.conf; then
    echo "blue"
else
    echo "green"
fi