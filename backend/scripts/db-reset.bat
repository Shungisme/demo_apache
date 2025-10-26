@echo off
REM Database Reset Script for Windows
REM This script drops, recreates, and seeds the database

echo Resetting database...
echo.

REM Drop database
call npm run db:drop -- --force

REM Wait a moment
timeout /t 1 /nobreak >nul

REM Initialize database
call npm run db:init

REM Wait a moment
timeout /t 1 /nobreak >nul

REM Seed database
call npm run db:seed -- --clear

echo.
echo Database reset completed!
