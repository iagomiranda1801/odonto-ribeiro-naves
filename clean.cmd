@echo off
setlocal
if exist "%~dp0.next" (
  echo Removendo cache .next...
  rmdir /s /q "%~dp0.next"
)
echo Cache limpo.
