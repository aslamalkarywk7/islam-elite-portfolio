import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "RetroWave Studio" });
  });

  // AI Memphis Tagline & Color Palette Generator endpoint
  app.post("/api/generate-tagline", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({
          error: "GEMINI_API_KEY environment variable is missing",
          fallback: {
            headline: "EMBRACE THE NEON CHAOS!",
            subtitle: "Unapologetically bold graphic design & electric branding.",
            palette: ["#FF007A", "#FFE600", "#0047FF", "#39FF14", "#FF5C00"]
          }
        });
      }

      const { promptTopic } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const promptText = `You are a world-class creative director at a 1980s-inspired Memphis Design studio called RetroWave Studio.
Given the creative topic or project vibe: "${promptTopic || 'Maximalist digital branding'}", generate a json response with:
1. "headline": A punchy, bold 2-5 word Memphis style slogan (all caps energy, e.g. "BREAK THE GRID", "MAXIMALISM REIGN", "CHAOS IS MAGIC").
2. "subtitle": A 1-sentence energetic tagline describing the design vision.
3. "palette": An array of 5 hex codes representing electric, clashing neon Memphis colors (e.g. electric pink, vivid yellow, bright orange, lime green, cobalt blue, stark cyan).
4. "vibeKeywords": Array of 3 short keywords (e.g., ["Radical", "Geometric", "Unfiltered"]).

Return strictly raw JSON format without markdown code fences.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: promptText,
      });

      const responseText = response.text || "";
      let jsonResult;
      try {
        const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        jsonResult = JSON.parse(cleanedText);
      } catch {
        jsonResult = {
          headline: "MAKE IT LOUD & UNSTOPPABLE!",
          subtitle: "Bold geometry meets high-voltage creative expression.",
          palette: ["#FF007A", "#FFE600", "#FF5C00", "#0047FF", "#39FF14"],
          vibeKeywords: ["Maximalist", "Eclectic", "Vibrant"]
        };
      }

      return res.json(jsonResult);
    } catch (err: any) {
      console.error("Gemini API error:", err);
      return res.status(500).json({
        error: "Failed to generate Memphis AI campaign",
        details: err?.message || "Unknown error"
      });
    }
  });

  // Vite middleware for development vs production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`RetroWave Studio Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
