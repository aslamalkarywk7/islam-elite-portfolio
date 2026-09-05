# Installation & Build Guide — Studio Chroma

This document provides step-by-step instructions for setting up, configuring, building, running, and deploying the **Studio Chroma** application across various environments.

---

## 📋 System Requirements

Before starting, ensure your system meets the following requirements:

| Component | Minimum Version | Recommended Version |
| :--- | :--- | :--- |
| **Node.js** | `v18.17.0` | `v20.x.x` LTS or higher |
| **npm** | `v9.0.0` | `v10.x.x` |
| **Operating System** | macOS, Linux, or Windows 10/11 | macOS / Linux |
| **Browser** | Chrome 100+, Firefox 100+, Safari 15+ | Latest Chrome or Edge |

---

## 🛠️ Installation Steps

### Step 1: Clone the Project
Clone the repository from source control and navigate into the root directory:
```bash
git clone https://github.com/your-org/studio-chroma.git
cd studio-chroma
```

### Step 2: Install Package Dependencies
Install all required Node modules declared in `package.json`:

Using **npm**:
```bash
npm install
```

Using **bun**:
```bash
bun install
```

Using **pnpm**:
```bash
pnpm install
```

---

## ⚙️ Environment Configuration

1. Copy the sample environment file to create `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and configure optional keys if backend AI features are used:
   ```env
   # Server-side Gemini API Key (Optional)
   GEMINI_API_KEY=your_gemini_api_key_here

   # Client-side configuration flags
   VITE_APP_TITLE="Studio Chroma"
   ```

> [!CAUTION]
> Never commit actual secret API keys to public source control repositories.

---

## 🚀 Running the Development Server

Start Vite in development mode. The app is configured to serve on host `0.0.0.0` and port `3000`:

```bash
npm run dev
```

Output:
```text
  VITE v6.2.3  ready in 280 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://0.0.0.0:3000/
  ➜  press h + enter to show help
```

Navigate to `http://localhost:3000` in your web browser.

---

## 🔨 Building for Production

### Step 1: Type Checking & Linting
Run the TypeScript compiler in non-emitting mode to ensure all types are valid:
```bash
npm run lint
```

### Step 2: Bundle Production Build
Execute the Vite build script:
```bash
npm run build
```

This compiles optimized client assets into the `/dist` directory:
- HTML minification
- JS bundling & tree-shaking
- CSS extraction and purge via Tailwind CSS v4

### Step 3: Preview the Built Application
To test the generated production output locally:
```bash
npm run preview
```

---

## 🐳 Docker Container Deployment (Optional)

If you wish to containerize Studio Chroma using Docker:

### Dockerfile
Create a `Dockerfile` at the root of the project:

```dockerfile
# Build Stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000

CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
```

### Build & Run Container
```bash
# Build Docker image
docker build -t studio-chroma:latest .

# Run Docker container on port 3000
docker run -d -p 3000:3000 --name studio-chroma-app studio-chroma:latest
```

---

## 📜 Available NPM Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches Vite local dev server on port `3000` |
| `npm run build` | Compiles optimized production bundle in `/dist` |
| `npm run preview` | Runs a local server pointing to `/dist` |
| `npm run lint` | Runs `tsc --noEmit` to verify type integrity |
| `npm run clean` | Removes generated `/dist` build outputs |
