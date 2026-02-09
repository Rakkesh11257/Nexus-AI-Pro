@echo off
REM NEXUS AI Pro - Setup Script for Windows

echo.
echo ========================================
echo   NEXUS AI Pro - Setup
echo ========================================
echo.

REM Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo [OK] Node.js found

REM Install backend dependencies
echo.
echo Installing backend dependencies...
call npm install --include=optional

REM Ensure sharp is built for this platform
echo.
echo Configuring sharp for your system...
call npm rebuild sharp 2>nul
if %errorlevel% neq 0 (
    echo Reinstalling sharp...
    call npm install sharp
)

REM Verify sharp works
node -e "require('sharp')" 2>nul
if %errorlevel% neq 0 (
    echo [!] Sharp issue detected - doing full reinstall...
    rmdir /s /q node_modules\sharp 2>nul
    rmdir /s /q node_modules\@img 2>nul
    call npm install sharp
)

echo [OK] Sharp configured

REM Install and build frontend
echo.
echo Installing frontend dependencies...
cd frontend
call npm install

echo.
echo Building frontend...
call npm run build
cd ..

REM Check for .env
if not exist ".env" (
    echo.
    echo Creating .env from template...
    copy .env.example .env
    echo [!] Please edit .env and add your API keys!
)

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Edit .env and add your REPLICATE_API_KEY
echo 2. Run: npm start
echo 3. Open: http://localhost:3000
echo.
pause
