#!/bin/bash

cd backend

echo "Starting project!"

mvn spring-boot:run > ./mvn-logs.txt&

wait -n

echo "backend started"

cd ../frontend

npm run dev > ./vite-logs.txt&

wait -n

echo "frontend started"

cd ..

sudo tailscale up&

wait -n

echo "tailscale set up!"

echo "completed!"

trap "./clear.sh" SIGINT

wait
