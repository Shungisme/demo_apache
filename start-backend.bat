@echo off
echo ================================
echo English Learning App - Backend
echo ================================
echo.
echo Checking MySQL connection...
echo.

cd backend

echo Starting NestJS backend server...
echo Backend will run at: http://localhost:3001
echo.
echo Press Ctrl+C to stop the server
echo.

npm run start:dev
