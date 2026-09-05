@echo off
title Elite Portfolio - Live Server
echo.
echo  ==> تشغيل معرض الاعمال Elite مع المعاينة الحية لكل المشاريع...
echo  ==> سيفتح على http://localhost:3000
echo.
cd /d "%~dp0"
npm run dev
pause
