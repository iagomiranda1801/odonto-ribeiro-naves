@echo off
setlocal
set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE_EXE%" (
  echo Node.js nao encontrado em "%NODE_EXE%".
  echo Instale Node.js ou ajuste este arquivo com o caminho correto do node.exe.
  exit /b 1
)
if not exist "%~dp0node_modules\next\dist\bin\next" (
  echo Dependencias nao encontradas. Rode install.cmd primeiro.
  exit /b 1
)
powershell -NoProfile -ExecutionPolicy Bypass -Command "$connections = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue; foreach ($connection in $connections) { $process = Get-Process -Id $connection.OwningProcess -ErrorAction SilentlyContinue; if ($process) { Write-Host ('Encerrando servidor antigo na porta 3000: PID ' + $connection.OwningProcess); Stop-Process -Id $connection.OwningProcess -Force -ErrorAction SilentlyContinue } }"
if exist "%~dp0.next" (
  echo Limpando cache local do Next.js...
  rmdir /s /q "%~dp0.next"
)
"%NODE_EXE%" "%~dp0node_modules\next\dist\bin\next" dev -p 3000 %*
