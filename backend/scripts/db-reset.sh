#!/bin/bash

# Database Reset Script
# This script drops, recreates, and seeds the database

echo "🔄 Resetting database..."
echo ""

# Drop database
npm run db:drop -- --force

# Wait a moment
sleep 1

# Initialize database
npm run db:init

# Wait a moment
sleep 1

# Seed database
npm run db:seed -- --clear

echo ""
echo "✅ Database reset completed!"
