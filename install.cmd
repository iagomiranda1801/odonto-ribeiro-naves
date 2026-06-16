@echo off
setlocal
set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "PNPM_CLI=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs"
if not exist "%NODE_EXE%" (
  echo Node.js nao encontrado em "%NODE_EXE%".
  echo Instale Node.js ou ajuste este arquivo com o caminho correto do node.exe.
  exit /b 1
)
if not exist "%PNPM_CLI%" (
  echo pnpm nao encontrado em "%PNPM_CLI%".
  echo Instale pnpm globalmente ou ajuste este arquivo com o caminho correto.
  exit /b 1
)
"%NODE_EXE%" "%PNPM_CLI%" install %*
