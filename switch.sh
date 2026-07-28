#!/bin/bash

TARGET=$1

if [ "$TARGET" = "blue" ]; then
    echo "Switching traffic to BLUE..."

    cat > proxy/active_backend.conf <<EOF
server {
    listen 80;

    location / {
        proxy_pass http://frontend-blue;

        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}
EOF

elif [ "$TARGET" = "green" ]; then
    echo "Switching traffic to GREEN..."

    cat > proxy/active_backend.conf <<EOF
server {
    listen 80;

    location / {
        proxy_pass http://frontend-green;

        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}
EOF

else
    echo "Usage: ./switch.sh blue|green"
    exit 1
fi

docker cp proxy/active_backend.conf deployflow-proxy:/etc/nginx/conf.d/active_backend.conf
docker exec deployflow-proxy nginx -s reload

echo "Traffic switched successfully."