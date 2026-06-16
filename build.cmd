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
"%NODE_EXE%" "%~dp0node_modules\next\dist\bin\next" build %*
