@echo off
cd /d "%~dp0"
echo Engegant Joieria Comas...
start "Joieria Comas server" cmd /c "node server.mjs"
timeout /t 2 >nul
start "" http://localhost:4321
echo.
echo La web s'ha obert al navegador (localhost:4321).
echo Deixa oberta la finestra negra del servidor mentre la miris.
echo Per aturar-la, tanca aquella finestra.
