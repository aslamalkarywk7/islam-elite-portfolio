# Build & Deployment Guide 🚢

This document describes how to compile, bundle, containerize, and deploy **Connective Digital Agency** to production hosting platforms such as Google Cloud Run, Vercel, Netlify, or custom Linux Docker servers.

---

## 🛠️ Building for Production

To create an optimized production build of the application, execute:

```bash
npm run build
```

### What Happens During Build?

1. **TypeScript Type Checking**: Vite verifies that all TypeScript types in `src/` are valid.
2. **Asset Bundling**: Vite compiles React components, optimizes images/SVGs, and tree-shakes unused JavaScript code.
3. **Tailwind CSS Compilation**: `@tailwindcss/vite` scans the template files and outputs a minified, lightweight CSS bundle.
4. **Output Directory**: The built distribution assets are generated in the `/dist` directory.

### Build Output Structure

```text
dist/
├── index.html              # Minified HTML entry file
└── assets/
    ├── index-[hash].js     # Bundled and tree-shaken JavaScript
    └── index-[hash].css    # Minified Tailwind CSS styles
```

---

## 🧪 Testing the Production Build Locally

Before deploying to live servers, always test the production bundle locally:

```bash
npm run preview
```

This starts Vite's local static server previewing the generated `/dist` assets at `http://localhost:3000`.

---

## 🐳 Containerized Deployment (Docker & Cloud Run)

The application is fully compatible with containerized environments like Google Cloud Run or Docker.

### Sample `Dockerfile`

To containerize the application for production deployment:

```dockerfile
# Step 1: Build Phase
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Step 2: Serve Phase
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy built assets
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install static server or light express server
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Deploying to Google Cloud Run

1. **Build Container Image**:
   ```bash
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/connective-agency
   ```

2. **Deploy Service**:
   ```bash
   gcloud run deploy connective-agency \
     --image gcr.io/YOUR_PROJECT_ID/connective-agency \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --port 3000
   ```

---

## 🌐 Static Host Deployment (Vercel / Netlify / GitHub Pages)

Because **Connective Digital Agency** can run as a high-performance Single Page Application (SPA):

### Vercel Deployment
1. Connect your repository to Vercel.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Install Command: `npm install`

### Netlify Deployment
1. Connect repository in Netlify console.
2. Set Build Command to `npm run build`.
3. Set Publish Directory to `dist`.
4. Add a `_redirects` file in `public/_redirects` for SPA routing fallback:
   ```text
   /* /index.html 200
   ```

---

## 🔒 Security Best Practices

- **Never Commit Secrets**: Keep `.env` files out of source control. Always verify `.gitignore` contains `.env`.
- **API Keys Handling**: Store backend keys like `GEMINI_API_KEY` in environment secret managers (e.g., Cloud Secret Manager, Vercel Environment Variables).
