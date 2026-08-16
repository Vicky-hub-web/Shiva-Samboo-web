@echo off
setlocal
cd /d "%~dp0"
echo.
echo ===============================
echo   Shiva Samboo - Setup
echo ===============================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not added to PATH.
  echo Install Node.js LTS, reopen Command Prompt, then run this file again.
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm is not available in PATH.
  pause
  exit /b 1
)

echo Node version:
node -v
echo npm version:
npm -v

if not exist node_modules (
  echo.
  echo Installing dependencies...
  call npm install --no-audit --no-fund
  if errorlevel 1 (
    echo.
    echo ERROR: npm install failed. Check internet connection and npm registry access.
    pause
    exit /b 1
  )
) else (
  echo.
  echo Dependencies already installed. Skipping npm install.
)

echo.
echo Starting website...
call npm run dev
endlocal
