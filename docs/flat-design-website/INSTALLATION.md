# Installation & Setup Guide ⚙️

This document provides complete step-by-step instructions for installing, configuring, and running **Connective Digital Agency** on your local workstation.

---

## 📌 Prerequisites

Before installing the project, verify that your development machine satisfies the following software dependencies:

| Tool | Required Version | Recommended | Notes |
| :--- | :--- | :--- | :--- |
| **Node.js** | `>= 18.0.0` | `v20.x` LTS | JavaScript runtime |
| **npm** | `>= 9.0.0` | Latest | Comes bundled with Node.js |
| **Git** | `>= 2.30.0` | Latest | For source control |
| **Browser** | Modern Evergreen | Chrome / Firefox / Safari / Edge | Supports modern CSS & ES2022+ |

---

## 📥 Installation Steps

### Step 1: Clone the Repository

Clone the project repository from GitHub (or download the source archive) and navigate into the project directory:

```bash
git clone https://github.com/your-username/connective-digital-agency.git
cd connective-digital-agency
```

### Step 2: Install Project Dependencies

Install all required production and development dependencies specified in `package.json`:

```bash
npm install
```

If you prefer using **Bun**:
```bash
bun install
```

*(Note: The process will populate the `node_modules/` directory with necessary packages including React 19, Vite, Tailwind CSS v4, Motion, Lucide React, and Express).*

---

## 🔑 Environment Configuration

The application uses environment variables for optional backend integrations, port bindings, and API keys.

1. **Create Local Environment File**:
   Duplicate the provided `.env.example` file to create your active `.env` configuration file:

   ```bash
   cp .env.example .env
   ```

2. **Understand Key Environment Variables**:

   ```env
   # GEMINI_API_KEY: Optional API key for Google Gemini generative AI features.
   # In Cloud Run / AI Studio environments, this is automatically injected.
   GEMINI_API_KEY="your_gemini_api_key_here"

   # APP_URL: Base URL of the application. Defaults to http://localhost:3000 in dev.
   APP_URL="http://localhost:3000"
   ```

---

## 🚀 Running the Local Development Server

Start the Vite development server on host `0.0.0.0` and port `3000`:

```bash
npm run dev
```

### Accessing the Web Application

Once the server has initialized, open your favorite web browser and navigate to:
```text
http://localhost:3000
```

The Vite dev server features **Instant Hot Module Replacement (HMR)**, so any edits you make in `src/` will instantly update the browser without losing state.

---

## 🧪 Verifying the Installation

To verify that your installation is complete and error-free:

1. **Run TypeScript Verification**:
   ```bash
   npm run lint
   ```
   *This checks for any missing imports or type mismatches.*

2. **Test Production Build Locally**:
   ```bash
   npm run build
   ```
   *This builds the production static bundle in `dist/` to verify bundling succeeds.*
