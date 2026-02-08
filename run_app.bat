@echo off
cd /d "%~dp0"
echo ===================================================
echo       TripNest Application Launcher
echo ===================================================
echo.

REM Check backend dependencies
if not exist "backend\node_modules" (
    echo [INFO] Backend dependencies missing. Installing...
    cd backend
    call npm install
    cd ..
)

REM Check frontend dependencies (specifically vite)
if not exist "frontend\node_modules\.bin\vite.cmd" (
    echo [INFO] Frontend dependencies missing or broken. Installing now...
    echo [NOTE] This may take a few minutes. Please wait.
    cd frontend
    call npm install
    cd ..
    if errorlevel 1 (
        echo.
        echo [ERROR] npm install failed!
        echo Please open a terminal in 'frontend' folder and run 'npm install' manually.
        pause
        exit /b
    )
    echo [SUCCESS] Dependencies installed.
)

echo.
echo Starting Backend Server (Port 5000)...
start "TripNest Backend" cmd /k "cd backend && npm run dev"

echo.
echo Starting Frontend Server (Port 5173)...
start "TripNest Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ===================================================
echo Servers launched!
echo Access the app at: http://localhost:5173
echo ===================================================
pause
