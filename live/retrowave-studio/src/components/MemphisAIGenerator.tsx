import React, { useState } from 'react';
import { Sparkles, X, Wand2, Copy, Check, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MemphisAIGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemphisAIGenerator: React.FC<MemphisAIGeneratorProps> = ({
  isOpen,
  onClose
}) => {
  const [topic, setTopic] = useState('80s Retro Arcade Bar');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    headline: string;
    subtitle: string;
    palette: string[];
    vibeKeywords?: string[];
  } | null>({
    headline: 'MAKE IT LOUD & UNSTOPPABLE!',
    subtitle: 'Bold geometry meets high-voltage creative expression.',
    palette: ['#FF007A', '#FFE600', '#0047FF', '#39FF14', '#FF5C00'],
    vibeKeywords: ['Maximalist', 'Eclectic', 'Vibrant']
  });
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate-tagline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ promptTopic: topic })
      });
      const data = await res.json();
      if (data.headline) {
        setResult(data);
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.5 },
          colors: data.palette || ['#FF007A', '#FFE600', '#0047FF']
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyPalette = () => {
    if (result) {
      navigator.clipboard.writeText(result.palette.join(', '));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border-4 border-black max-w-2xl w-full p-6 sm:p-8 shadow-[16px_16px_0px_0px_#FFE600] relative my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b-3 border-black mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF007A] border-2 border-black flex items-center justify-center font-black text-white">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <h3 className="font-lexend font-black text-2xl uppercase text-black">
                Gemini Memphis AI
              </h3>
              <p className="font-space font-bold text-xs text-slate-500 uppercase">
                AI Tagline & Neon Palette Generator
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="bg-[#FF007A] text-white p-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-black"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Input Form */}
        <div className="space-y-4 mb-8 font-space">
          <div>
            <label className="font-extrabold text-xs uppercase text-black block mb-1">
              Project Vibe or Industry Prompt
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                placeholder="e.g. Electric Cyberpub, Synthpop Vinyl Album, Skate Brand..."
                className="flex-1 bg-slate-100 border-2 border-black p-3 font-bold text-sm shadow-[2px_2px_0px_0px_#000]"
              />
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="bg-[#FF007A] text-white font-black text-sm uppercase px-5 py-3 border-2 border-black shadow-[3px_3px_0px_0px_#FFE600] hover:bg-[#0047FF] flex items-center gap-2 disabled:opacity-50"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                <span>{loading ? 'AI Thinking...' : 'Generate Chaos'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Generated Result Card */}
        {result && (
          <div className="bg-slate-50 border-3 border-black p-6 shadow-[6px_6px_0px_0px_#000] space-y-4 font-space">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold bg-black text-white px-2 py-0.5 border border-black mb-2 inline-block">
                AI Headline Concept
              </span>
              <h4 className="font-lexend font-black text-3xl uppercase text-black bg-[#FFE600] p-3 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                "{result.headline}"
              </h4>
            </div>

            <p className="font-space font-bold text-sm text-slate-800 bg-white p-3 border-2 border-black">
              {result.subtitle}
            </p>

            {/* Color Swatch Row */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-extrabold text-xs uppercase text-black">
                  Recommended Neon Hex Palette
                </span>
                <button
                  onClick={copyPalette}
                  className="font-bold text-xs uppercase text-black flex items-center gap-1 hover:underline"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Hex!' : 'Copy Hex Codes'}</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {result.palette.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className="w-full h-12 border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-mono text-[10px] font-bold text-slate-700 mt-1">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
