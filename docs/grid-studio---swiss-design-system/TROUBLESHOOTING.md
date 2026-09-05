# Troubleshooting & Problem Solving Guide

This guide provides solutions for common issues that may arise during local development, build pipeline execution, or deployment of **Grid Studio**.

---

## 🚨 Common Development & Build Issues

### 1. Dev Server or Container Port Errors (`EADDRINUSE` or Connection Timeout)

**Symptom**:
- The application preview fails to load or shows "Please wait while your application starts..." indefinitely.
- Console error: `Error: listen EADDRINUSE: address already in use :::3000`.

**Root Cause**:
- The infrastructure strictly routes external container traffic through **Port 3000**. If another Node process or stale instance is occupying port 3000, the dev server cannot bind to host `0.0.0.0:3000`.

**Solution**:
1. Restart the development server using the server manager or kill existing Node processes on port 3000:
   ```bash
   # On Unix/Linux environments
   fuser -k 3000/tcp
   ```
2. Ensure `server.ts` or `vite.config.ts` maintains binding to host `0.0.0.0` and port `3000`.
3. Do **not** attempt to change the `PORT` environment variable to 3001 or 5173, as port 3000 is hardcoded in the Cloud Run reverse proxy layer.

---

### 2. Vite WebSocket HMR Connection Warnings in Browser Console

**Symptom**:
- Browser console displays: `[vite] failed to connect to websocket` or `WebSocket connection to 'ws://...' failed`.

**Root Cause**:
- Hot Module Replacement (HMR) is intentionally disabled (`DISABLE_HMR=true`) in the AI Studio container environment to prevent preview flickering while code edits are performed incrementally.

**Solution**:
- This warning is **completely benign** and can be safely ignored. The preview automatically reloads once code modifications are completed.

---

### 3. TypeScript Compilation Errors during `npm run lint` or `npm run build`

**Symptom**:
- Build fails with `tsc --noEmit` errors like `Cannot find module '...'` or `Property '...' does not exist on type '...'`.

**Root Cause**:
- Missing dependency packages, stale type definitions, or mismatched interface fields in `/src/types.ts`.

**Solution**:
1. Re-install all dependencies from `package.json`:
   ```bash
   npm install
   ```
2. Verify that all shared interfaces (`GridConfig`, `PosterConfig`, `ProjectItem`, `PrincipleItem`) in `/src/types.ts` match the properties passed across components.
3. If importing external packages, ensure corresponding `@types/*` devDependencies are installed.

---

### 4. Image Generation or Unsplash Image Load Failures

**Symptom**:
- Background studio photography or portfolio project images show blank grey placeholders or fail to load.

**Root Cause**:
- Network restrictions or missing `referrerPolicy="no-referrer"` attribute on `<img>` elements rendered inside sandboxed iFrames.

**Solution**:
1. All `<img>` tags MUST include `referrerPolicy="no-referrer"`:
   ```tsx
   <img
     src={imageUrl}
     alt="Description"
     referrerPolicy="no-referrer"
     className="..."
   />
   ```
2. Local fallback background images in `/src/assets/images/` are stored relative to the workspace root and serve as reliable offline fallbacks.

---

### 5. Tailwind CSS v4 Utility Classes Not Applying

**Symptom**:
- Styles appear unstyled, or utility classes like `bg-[#E30613]` or `grid-cols-12` fail to take effect.

**Root Cause**:
- Tailwind v4 uses `@import "tailwindcss";` inside `/src/index.css` via `@tailwindcss/vite`. Traditional `@tailwind utilities;` or `tailwind.config.js` files are deprecated in v4.

**Solution**:
1. Ensure `/src/index.css` contains:
   ```css
   @import "tailwindcss";
   ```
2. Verify `vite.config.ts` includes the Tailwind Vite plugin:
   ```ts
   import tailwindcss from '@tailwindcss/vite';
   export default defineConfig({
     plugins: [react(), tailwindcss()],
   });
   ```

---

### 6. ESM Relative Import / CommonJS Server Build Errors

**Symptom**:
- Server fails on launch with `ERR_MODULE_NOT_FOUND` or `Cannot use import statement outside a module`.

**Root Cause**:
- Node.js ESM strict module resolution checks when executing server TypeScript directly in production.

**Solution**:
- The build script uses `esbuild` to compile `server.ts` into a bundled, standalone CommonJS file at `dist/server.cjs`:
  ```json
  "build": "vite build && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs",
  "start": "node dist/server.cjs"
  ```
- This completely bypasses runtime ES module path resolution errors in production containers.

---

## 🛠️ Diagnostics & Verification Commands

Run these standard verification tools to diagnose codebase health:

```bash
# 1. Type check and syntax validation
npm run lint

# 2. Complete production bundle check
npm run build
```

If issues persist beyond these solutions, verify Node environment version (`node -v` >= 18.0.0) and re-check package versions in `package.json`.
