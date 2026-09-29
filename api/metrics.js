/**
 * Vercel serverless endpoint: GET/POST /api/metrics
 * Restores the Oman Luxury Dash backend on static hosting.
 * Logic: api/_engine.js (port of the demo's _source route + libs).
 */
import { createStore } from "./_engine.js";

const store = createStore();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const out = store.get();
    return res.status(out.status).json(out.body);
  }
  if (req.method === "POST") {
    let payload = req.body;
    if (typeof payload === "string") {
      try { payload = JSON.parse(payload); } catch { /* handled below */ }
    }
    const out = store.post(payload ?? {});
    return res.status(out.status).json(out.body);
  }
  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ error: "Method not allowed" });
}
