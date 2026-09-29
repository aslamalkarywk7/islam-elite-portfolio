# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.0   | :white_check_mark: |
| < 2.0.0 | :x:                |

Only the latest release (see `version` in `package.json`) receives security updates.

## Reporting a Vulnerability

Please **do not** open a public issue for a suspected vulnerability.

1. Go to the repository's **Security** tab → **Report a vulnerability** (GitHub Security Advisories, private by default), or
2. If advisories are disabled, open a GitHub issue with minimal exploit detail and ask for a private contact channel.

Please include:

- Affected route/version/commit
- Steps to reproduce or proof of concept
- Impact assessment (what an attacker can do)

We will acknowledge receipt, investigate, and coordinate a fix and disclosure timeline with you.

## Notes

- The `/api/metrics` and `/api/v1/metrics` endpoints are **unauthenticated** demo backends (see `server.js`, `api/metrics.js`, `api/v1/metrics.js`). Do not expose a deployment of this repo to the public internet without a reverse proxy, authentication, or disabling those routes.
- Security headers (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`) are enforced in both `vercel.json` and `server.js`. The Express `/api/*` routes also have a minimal in-memory rate limit (120 req/min/IP).
