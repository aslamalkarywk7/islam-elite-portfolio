# Troubleshooting & Solutions Guide

This guide provides solutions to common issues, runtime errors, and environment setup challenges that may arise when developing or deploying **BAUHAUS 1919**.

---

## 🛠 Table of Contents
1. [Installation & Dependency Issues](#1-installation--dependency-issues)
2. [Development Server & Port Issues](#2-development-server--port-issues)
3. [TypeScript & Compilation Errors](#3-typescript--compilation-errors)
4. [Tailwind CSS & Styling Issues](#4-tailwind-css--styling-issues)
5. [Performance & Animation Lag](#5-performance--animation-lag)
6. [Asset & Image Loading Failures](#6-asset--image-loading-failures)
7. [Building & Container Deployment](#7-building--container-deployment)

---

## 1. Installation & Dependency Issues

### Symptom: `npm install` fails with `ERESOLVE unable to resolve dependency tree`
- **Root Cause**: Node.js or NPM peer dependency mismatch between React 19 and older third-party packages.
- **Solution**:
  Execute `npm install` with legacy peer dependencies or clean cache:
  ```bash
  npm install --legacy-peer-deps
  ```
  Or perform a complete package reset:
  ```bash
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install
  ```

### Symptom: Missing packages or `Cannot find module 'motion/react'`
- **Root Cause**: Uninstalled or cached package definitions.
- **Solution**:
  Install required missing packages explicitly:
  ```bash
  npm install motion lucide-react @google/genai
  ```

---

## 2. Development Server & Port Issues

### Symptom: `Error: listen EADDRINUSE: address already in use 0.0.0.0:3000`
- **Root Cause**: Port `3000` is locked by another instance of Vite, Node, or system background process.
- **Solution**:
  - **Option A (Terminate process on Linux/macOS)**:
    ```bash
    lsof -i :3000
    kill -9 <process_id>
    ```
  - **Option B (Terminate process on Windows PowerShell)**:
    ```powershell
    Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
    ```

### Symptom: `[vite] failed to connect to websocket` console logs
- **Root Cause**: In containerized, sandboxed, or cloud environments, Hot Module Replacement (HMR) WebSockets may be intentionally intercepted or disabled.
- **Solution**:
  This error is harmless and does not affect normal application rendering. If needed, refresh the preview iframe manually.

---

## 3. TypeScript & Compilation Errors

### Symptom: `npm run lint` fails with `Property '...' does not exist on type '...'`
- **Root Cause**: Stale interface properties or incomplete type definitions in `src/types.ts`.
- **Solution**:
  1. Open `src/types.ts` and inspect the interface corresponding to the component.
  2. Ensure all props passed to components match declared types.
  3. Re-run `npm run lint` to confirm zero output:
     ```bash
     npm run lint
     ```

---

## 4. Tailwind CSS & Styling Issues

### Symptom: CSS classes like `bg-red-600` or grid utilities do not apply
- **Root Cause**: Tailwind CSS v4 directive or Vite plugin configuration issue.
- **Solution**:
  1. Verify `src/index.css` contains `@import "tailwindcss";` at line 1.
  2. Verify `vite.config.ts` includes `@tailwindcss/vite`:
     ```ts
     import { defineConfig } from 'vite';
     import react from '@vitejs/plugin-react';
     import tailwindcss from '@tailwindcss/vite';

     export default defineConfig({
       plugins: [react(), tailwindcss()],
     });
     ```

---

## 5. Performance & Animation Lag

### Symptom: FPS drop when interacting with the Generative SVG Poster Lab or Geometric Sandbox
- **Root Cause**: Excessive component re-renders triggered by continuous range slider inputs.
- **Solution**:
  1. Leverage Framer Motion's hardware-accelerated transforms (`transform`, `opacity`, `scale`).
  2. Ensure key states (e.g., SVG export markup generator) compute on demand rather than on every mouse movement tick.

---

## 6. Asset & Image Loading Failures

### Symptom: Photographic assets in the Showcase or Sandbox appear blank or throw 403 Forbidden errors
- **Root Cause**: Cross-origin referrer header restrictions from external CDN hosts (e.g. Unsplash).
- **Solution**:
  Ensure all `<img>` tags declare `referrerPolicy="no-referrer"`:
  ```tsx
  <img 
    src={imageUrl} 
    alt="Architectural detail" 
    referrerPolicy="no-referrer"
    className="w-full h-full object-cover" 
  />
  ```

---

## 7. Building & Container Deployment

### Symptom: `npm run build` succeeds, but production preview shows blank screen
- **Root Cause**: Incorrect base path or relative asset paths in `vite.config.ts`.
- **Solution**:
  Check `vite.config.ts` and set `base: './'` or `/` depending on your deployment environment:
  ```ts
  export default defineConfig({
    base: '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  });
  ```

---

## 🆘 Need Further Assistance?

If your issue is not listed above:
1. Run `npm run lint` and inspect console trace output.
2. Search or open a detailed ticket on our GitHub Issues repository.
