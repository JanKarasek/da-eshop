#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p static/images

# Download sample garage images
curl -o static/images/garage-1.jpg "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop"
curl -o static/images/garage-2.jpg "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&h=600&fit=crop"
curl -o static/images/garage-3.jpg "https://images.unsplash.com/photo-1567449304062-0e65ed0f6a97?w=800&h=600&fit=crop" 