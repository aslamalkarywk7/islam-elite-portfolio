import React, { useState } from 'react';
import { GlassConfig, MetricNode } from '../types';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Terminal, 
  Play, 
  RotateCw, 
  Copy, 
  Check, 
  Activity, 
  Cpu, 
  Sliders,
  Sparkles,
  Zap
} from 'lucide-react';

interface LiveInteractiveDemosProps {
  config: GlassConfig;
  setConfig: React.Dispatch<React.SetStateAction<GlassConfig>>;
}

const initialMetrics: MetricNode[] = [
  { time: '00:00', throughput: 112, latency: 0.42, refraction: 98.4 },
  { time: '04:00', throughput: 128, latency: 0.38, refraction: 99.1 },
  { time: '08:00', throughput: 145, latency: 0.35, refraction: 99.7 },
  { time: '12:00', throughput: 132, latency: 0.40, refraction: 98.9 },
  { time: '16:00', throughput: 168, latency: 0.31, refraction: 99.9 },
  { time: '20:00', throughput: 185, latency: 0.28, refraction: 100.0 },
  { time: '24:00', throughput: 198, latency: 0.25, refraction: 100.0 },
];

export const LiveInteractiveDemos: React.FC<LiveInteractiveDemosProps> = ({
  config,
  setConfig,
}) => {
  const [metrics, setMetrics] = useState<MetricNode[]>(initialMetrics);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'AETHERIA Refraction Engine v2.4 initialized.',
    'Sub-pixel matte grain filter bound to GPU canvas [0.035 opacity].',
    'Backdrop-filter backdrop-saturate(180%) active across 4 layers.',
    'Type "help" or "boost" to execute node commands.',
  ]);
  const [copiedCode, setCopiedCode] = useState(false);

  const simulateNodePulse = () => {
    const updated = metrics.map((m) => ({
      ...m,
      throughput: Math.min(220, Math.floor(m.throughput + (Math.random() * 20 - 8))),
      latency: Math.max(0.18, parseFloat((m.latency + (Math.random() * 0.06 - 0.03)).toFixed(2))),
    }));
    setMetrics(updated);
    addLog(`[Node Cluster] Real-time metrics updated. Avg Latency: ${updated[updated.length - 1].latency}ms`);
  };

  const addLog = (text: string) => {
    setTerminalLogs((prev) => [...prev.slice(-7), text]);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    addLog(`> ${terminalInput}`);

    if (cmd === 'help') {
      addLog('Available commands: boost, blur, theme, clear, status');
    } else if (cmd === 'boost') {
      simulateNodePulse();
      addLog('🚀 GPU Specular Boost active! Refraction throughput maxed out at 220 TFLOPS.');
    } else if (cmd === 'blur') {
      setConfig((prev) => ({ ...prev, blur: prev.blur === 40 ? 16 : 40 }));
      addLog(`Backdrop blur updated.`);
    } else if (cmd.startsWith('theme')) {
      const parts = cmd.split(' ');
      if (parts[1] && ['electric', 'magenta', 'emerald', 'cyberpunk'].includes(parts[1])) {
        setConfig((prev) => ({ ...prev, themeColor: parts[1] as any }));
        addLog(`Theme color switched to: ${parts[1]}`);
      } else {
        addLog('Valid themes: electric, magenta, emerald, cyberpunk');
      }
    } else if (cmd === 'clear') {
      setTerminalLogs(['Terminal buffer cleared.']);
    } else if (cmd === 'status') {
      addLog(`Status: OK | Blur: ${config.blur}px | Opacity: ${config.opacity} | Frame: ${config.studioFrame ? 'Studio' : 'Clean'}`);
    } else {
      addLog(`Command not recognized: "${cmd}". Type "help" for options.`);
    }

    setTerminalInput('');
  };

  return (
    <section id="interactive-demo" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Glass Analytics Recharts Chart (7 cols) */}
        <div className="lg:col-span-7 glass-surface rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-300 uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4 text-purple-400" />
                <span>Live Refraction Benchmarks</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Cluster Performance
              </h3>
            </div>

            <button
              onClick={simulateNodePulse}
              className="px-3.5 py-1.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 text-purple-200 text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Refresh Metrics</span>
            </button>
          </div>

          {/* Metrics Quick Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-slate-900/60 p-3 rounded-2xl border border-white/10 font-mono">
              <div className="text-[10px] text-slate-400">FPS Stability</div>
              <div className="text-base sm:text-lg font-bold text-emerald-400">120 FPS</div>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-2xl border border-white/10 font-mono">
              <div className="text-[10px] text-slate-400">Mean Latency</div>
              <div className="text-base sm:text-lg font-bold text-cyan-300">
                {metrics[metrics.length - 1].latency}ms
              </div>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-2xl border border-white/10 font-mono">
              <div className="text-[10px] text-slate-400">Refraction Index</div>
              <div className="text-base sm:text-lg font-bold text-purple-300">
                {metrics[metrics.length - 1].refraction}%
              </div>
            </div>
          </div>

          {/* Recharts Area Chart */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metrics} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="purpleGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="cyanGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#94a3b8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(16px)',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="throughput"
                  stroke="#a855f7"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#purpleGlow)"
                />
                <Area
                  type="monotone"
                  dataKey="refraction"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#cyanGlow)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column: Quantum Terminal / Command Runner (5 cols) */}
        <div className="lg:col-span-5 glass-surface rounded-3xl p-6 border border-white/15 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Quantum Terminal CLI
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
            </div>

            {/* Terminal Output Log Window */}
            <div className="bg-slate-950/90 rounded-2xl p-4 font-mono text-xs h-56 overflow-y-auto space-y-2 border border-white/10 text-slate-300">
              {terminalLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed ${
                    log.startsWith('>')
                      ? 'text-cyan-300 font-bold'
                      : log.includes('🚀') || log.includes('OK')
                      ? 'text-emerald-300'
                      : 'text-slate-300'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Input Bar */}
          <form onSubmit={handleTerminalSubmit} className="mt-4 flex gap-2">
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Type 'help', 'boost', 'blur', 'theme magenta'..."
              className="flex-1 bg-slate-900/80 border border-white/15 rounded-xl px-3.5 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-200 text-xs font-mono font-medium flex items-center gap-1 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-cyan-200" />
              <span>Run</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
