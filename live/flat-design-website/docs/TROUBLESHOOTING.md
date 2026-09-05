# Troubleshooting & Issue Solutions Guide 🛠️

This document outlines common errors, diagnostic steps, and step-by-step solutions for issues that might occur during installation, local development, building, or deploying **Connective Digital Agency**.

---

## 🔍 Quick Diagnostic Checklist

When encountering an issue, perform these basic diagnostic steps first:

1. Verify Node.js version: `node -v` (must be `>= 18.0.0`).
2. Verify dependencies are installed: `npm list`.
3. Check for TypeScript errors: `npm run lint`.
4. Check browser developer console (`F12` -> Console tab) for runtime errors.

---

## 🚨 Common Issues & Solutions

### Issue 1: Port `3000` is Already in Use

#### Symptom
When running `npm run dev`, you see an error:
`Error: listen EADDRINUSE: address already in use 0.0.0.0:3000` or Vite fails to bind to port `3000`.

#### Cause
Another process (such as another running node instance, web server, or background service) is currently using port 3000.

#### Solution
- **Linux / macOS**: Identify and terminate the process using port 3000:
  ```bash
  lsof -i :3000
  kill -9 <PID>
  ```
- **Windows (Command Prompt)**:
  ```cmd
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```
- Alternatively, if testing locally outside Cloud Run, update the `--port` argument in `package.json` or run `npx vite --port 3001`.

---

### Issue 2: `vite: command not found` or Missing Node Modules

#### Symptom
Running `npm run dev` or `npm run build` fails with:
`sh: vite: command not found` or `Cannot find module 'react'`.

#### Cause
Dependencies were not installed, or `node_modules/` was deleted or corrupted during switching branches.

#### Solution
Reinstall dependencies completely:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Issue 3: TypeScript Compilation Errors (`tsc --noEmit`)

#### Symptom
Running `npm run lint` or `npm run build` outputs type checking errors (e.g., `Type 'X' is not assignable to type 'Y'`).

#### Cause
Mismatched component prop types, missing imports, or obsolete interfaces.

#### Solution
1. Open the file indicated in the error output.
2. Ensure top-level named imports are used (e.g. `import React, { useState } from 'react';`).
3. Verify that new data fields added to `src/data/agencyData.ts` conform to the interfaces in `src/types.ts`.
4. Re-run `npm run lint` to verify all types pass.

---

### Issue 4: Environment Variables Not Loading

#### Symptom
Features relying on environment variables (like `GEMINI_API_KEY` or `APP_URL`) fail silently or return `undefined`.

#### Cause
Missing `.env` file or variable name mismatch.

#### Solution
1. Ensure `.env` exists in the project root directory (copied from `.env.example`).
2. For server-side code (Node.js / Express), access variables via `process.env.GEMINI_API_KEY`.
3. For client-side Vite code, ensure variables exposed to the browser are prefixed with `VITE_` (e.g., `VITE_APP_TITLE`) and accessed via `import.meta.env.VITE_APP_TITLE`.
4. Restart the development server after making changes to `.env`.

---

### Issue 5: Tailwind CSS Styles Not Rendering or Styles Missing

#### Symptom
The UI looks unstyled, white, or standard plain text without colors or margins.

#### Cause
Vite failed to import Tailwind CSS or the `@tailwindcss/vite` plugin is missing in `vite.config.ts`.

#### Solution
1. Check `src/index.css` to confirm `@import "tailwindcss";` is present at line 1.
2. Inspect `vite.config.ts` to confirm `@tailwindcss/vite` is included:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   });
   ```
3. Clear Vite cache and restart:
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

---

### Issue 6: WebSocket Disconnect / HMR Errors in Console

#### Symptom
Browser DevTools console displays warning:
`[vite] failed to connect to websocket` or `WebSocket connection failed`.

#### Cause
In sandboxed cloud development environments or proxy setups, Hot Module Replacement WebSockets may be restricted.

#### Solution
This error is harmless in sandboxed preview environments and does not impact application functionality or production builds. If developing locally, ensure no firewall or security software is blocking local WebSocket connections on port `3000`.

---

## 🆘 Getting Further Help

If you encounter an issue not covered in this guide:
1. Open a issue on GitHub with your system specs and error log.
2. Review the [Installation Guide](INSTALLATION.md) and [Tech Stack Architecture](TECH_STACK.md) for reference.
