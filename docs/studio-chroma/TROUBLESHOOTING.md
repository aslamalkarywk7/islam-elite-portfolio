# Troubleshooting Guide — Studio Chroma

This guide contains solutions and diagnostics for common issues encountered during local development, build steps, runtime execution, and environment setup for **Studio Chroma**.

---

## 🔍 Quick Diagnostics Checklist

Before diving into specific errors, run these basic sanity checks:

1. Confirm Node.js version is `v18.0.0` or higher (`node -v`).
2. Verify `node_modules` is installed (`ls node_modules` or `npm install`).
3. Check if Port `3000` is already in use by another process.
4. Verify TypeScript compilation produces no type errors (`npm run lint`).

---

## 🛑 Common Errors & Solutions

### 1. Port 3000 Already in Use
**Symptom:**
```text
Error: listen EADDRINUSE: address already in use 0.0.0.0:3000
```

**Cause:**
Another process (such as a previous Vite dev server or another app) is occupying port 3000.

**Solution:**
- **Linux / macOS:** Kill the process running on port 3000:
  ```bash
  lsof -i :3000
  kill -9 <PID>
  ```
- **Windows (PowerShell):**
  ```powershell
  Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
  ```
- Re-run `npm run dev`.

---

### 2. Missing Module or Package Errors
**Symptom:**
```text
Failed to resolve import "lucide-react" from "src/components/Header.tsx". Does the file exist?
```
or
```text
Cannot find module 'motion/react'
```

**Cause:**
Dependencies were not installed completely or `package-lock.json` / `node_modules` became corrupted.

**Solution:**
Clean install dependencies:
```bash
rm -rf node_modules package-lock.json bun.lock
npm install
```

---

### 3. Tailwind CSS v4 Styles Not Loading or Unstyled Components
**Symptom:**
The application renders plain HTML with no colors, padding, or Material Design rounded corners.

**Cause:**
Tailwind CSS v4 `@import "tailwindcss";` in `/src/index.css` is missing or the `@tailwindcss/vite` plugin is misconfigured in `vite.config.ts`.

**Solution:**
1. Ensure `/src/index.css` starts with:
   ```css
   @import "tailwindcss";
   ```
2. Verify `/src/main.tsx` imports `/src/index.css`:
   ```tsx
   import './index.css';
   ```
3. Check `vite.config.ts` includes the Tailwind plugin:
   ```ts
   import tailwindcss from '@tailwindcss/vite';
   import { defineConfig } from 'vite';

   export default defineConfig({
     plugins: [tailwindcss()],
   });
   ```

---

### 4. TypeScript Type Errors During Build (`npm run lint`)
**Symptom:**
```text
src/components/PortfolioGrid.tsx:105:15 - error TS2322: Type 'string' is not assignable to type 'Category'.
```

**Cause:**
Incompatible prop types or mismatch in interface definition (`src/types.ts`).

**Solution:**
1. Run `npm run lint` to identify the file and line number.
2. Ensure strict adherence to types defined in `src/types.ts`:
   - `ProjectCategory = 'All' | 'Product Design' | 'Brand Identity' | 'Spatial UI' | 'Design System'`
3. Correct the type mismatch and re-run `npm run lint`.

---

### 5. WebSocket Connection Warning in Browser Console
**Symptom:**
```text
[vite] failed to connect to websocket
```

**Cause:**
Hot Module Replacement (HMR) WebSocket connections are blocked or disabled in sandboxed container environments.

**Solution:**
This notice is benign and expected in sandboxed preview environments where HMR is disabled by infrastructure settings. Application functionality is unaffected.

---

### 6. Missing Environment Variables
**Symptom:**
AI Features or Gemini API calls fail with `401 Unauthorized` or `API key missing`.

**Cause:**
The `GEMINI_API_KEY` environment variable is not defined in `.env`.

**Solution:**
1. Check `.env.example` for required variables.
2. Create `.env` in the root folder and add:
   ```env
   GEMINI_API_KEY=your_actual_key
   ```
3. Restart the dev server (`npm run dev`).

---

## 🆘 Requesting Further Assistance

If you encounter an issue not covered in this guide:
1. Open a issue on the GitHub repository with step-by-step reproduction steps.
2. Include system information (`node -v`, `npm -v`, OS version).
3. Attach terminal logs and browser console error screenshots.
