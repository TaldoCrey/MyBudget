#!/bin/bash

cd backend

echo "Starting project!"

mvn spring-boot:run&

echo "backend started"

cd ../frontend

npm run dev&

echo "frontend started"

cd ..

sudo tailscale up

echo "tailscale set up!"

echo "completed!"


