# Analog Antiques — Troubleshooting Guide

This document provides step-by-step solutions for common setup, build, audio playback, and runtime issues.

---

## 🔊 1. Web Audio API / Tape Player Audio Issues

### Problem: No audio plays when clicking "Play" on the Cassette Tape Deck.

**Possible Causes:**
1. **Browser Autoplay Restrictions:** Modern web browsers (Chrome, Safari, Firefox, Edge) block audio playback until the user performs a physical click or tap gesture on the page.
2. **System Muted / Volume Zero:** Master volume slider in the player deck or system sound is muted.

**Solutions:**
- Click anywhere on the tape deck mechanical buttons (Play, Rewind, F.FWD) to resume the browser's `AudioContext`.
- Ensure the **Master Volume** slider in the Cassette Player Deck is turned up (default 70%).
- Check if your browser tab is muted.

---

## 🌐 2. Development Server & Network Issues

### Problem: `npm run dev` fails or cannot connect on port 3000.

**Possible Causes:**
- Another process (e.g. background Node or React process) is already listening on port `3000`.

**Solutions:**
- Terminate any running Node processes on port 3000:
  ```bash
  # Linux / macOS
  lsof -i :3000
  kill -9 <PID>
  
  # Or restart dev server
  npm run dev
  ```
- Do NOT change the port setting in `package.json` or `vite.config.ts`, as port 3000 is required by the Cloud Run container reverse proxy environment.

---

## 📦 3. Build & Compilation Errors (`npm run build`)

### Problem: `compile_applet` or `npm run build` fails with `module not found` or `tsc` type errors.

**Possible Causes:**
- Stale `node_modules` or missing dependency declaration in `package.json`.
- Incorrect relative path in component import.

**Solutions:**
1. Clean local node modules and build cache:
   ```bash
   rm -rf node_modules dist
   npm install
   ```
2. Verify TypeScript type checking:
   ```bash
   npm run lint
   ```
3. Ensure image asset imports match existing files in `src/assets/images/`.

---

## 🖼️ 4. Broken Images or Image Referrer Warnings

### Problem: Product images fail to load in preview or iframe.

**Solution:**
Every `<img>` tag in the codebase incorporates `referrerPolicy="no-referrer"`, which prevents third-party referrer blockades.
If adding custom images, ensure the tag includes:
```tsx
<img
  src={imageUrl}
  alt={title}
  referrerPolicy="no-referrer"
/>
```

---

## ❓ Need Further Help?

If you encounter an issue not covered in this guide:
1. Open the in-app **Project Docs** modal by clicking `[Project Docs]` in the top header.
2. Submit an issue on the project GitHub repository with complete error logs.
