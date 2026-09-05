import React, { useEffect, useRef } from 'react';

interface VuMeterProps {
  label: string;
  levelDb: number; // -20 to +3 dB
  powerOn: boolean;
  width?: number;
  height?: number;
}

export const VuMeter: React.FC<VuMeterProps> = ({
  label,
  levelDb,
  powerOn,
  width = 180,
  height = 110,
}) => {
  const needleAngleRef = useRef<number>(-45); // -45 deg (-20dB) to +45 deg (+3dB)
  const needleVelocityRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Convert dB (-20 to +3) to Angle (-45 deg to +45 deg)
  const dbToAngle = (db: number) => {
    const clamped = Math.max(-20, Math.min(3, db));
    const norm = (clamped - (-20)) / (3 - (-20));
    return -45 + norm * 90;
  };

  useEffect(() => {
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const targetAngle = powerOn ? dbToAngle(levelDb) : -45;

      // Needle Physics Ballistics (Spring-Damper system)
      const force = (targetAngle - needleAngleRef.current) * 35;
      needleVelocityRef.current += force * dt;
      needleVelocityRef.current *= 0.82; // damping factor
      needleAngleRef.current += needleVelocityRef.current;

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          drawVuMeter(ctx, canvas.width, canvas.height, needleAngleRef.current, powerOn, label);
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [levelDb, powerOn, label]);

  const drawVuMeter = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    needleAngle: number,
    isPowered: boolean,
    title: string
  ) => {
    ctx.clearRect(0, 0, w, h);

    // 1. Meter Outer Beveled Frame
    const frameGradient = ctx.createLinearGradient(0, 0, 0, h);
    frameGradient.addColorStop(0, '#1a1c20');
    frameGradient.addColorStop(0.5, '#2e323b');
    frameGradient.addColorStop(1, '#0e1012');

    ctx.fillStyle = frameGradient;
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#050607';
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, 8);
    ctx.fill();
    ctx.stroke();

    // Inset bezel drop shadow
    ctx.fillStyle = '#08090b';
    ctx.beginPath();
    ctx.roundRect(5, 5, w - 10, h - 10, 6);
    ctx.fill();

    // 2. Dial Faceplate (Warm Vintage Cream / Amber illuminated when ON)
    const dialX = 8;
    const dialY = 8;
    const dialW = w - 16;
    const dialH = h - 16;

    const dialBg = ctx.createRadialGradient(
      w / 2,
      h * 0.9,
      10,
      w / 2,
      h * 0.9,
      w
    );

    if (isPowered) {
      dialBg.addColorStop(0, '#fff4cc'); // Warm incandescent backlight center
      dialBg.addColorStop(0.4, '#ffe082');
      dialBg.addColorStop(0.85, '#d4a338');
      dialBg.addColorStop(1, '#a67c1e');
    } else {
      dialBg.addColorStop(0, '#595243'); // Dark unpowered faceplate
      dialBg.addColorStop(1, '#2e2a22');
    }

    ctx.fillStyle = dialBg;
    ctx.beginPath();
    ctx.roundRect(dialX, dialY, dialW, dialH, 4);
    ctx.fill();

    // 3. Dial Scale Arc Markings & Numbers
    const pivotX = w / 2;
    const pivotY = h * 1.05;
    const radius = h * 0.72;

    // Draw Arc Line
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = isPowered ? '#1a1813' : '#222';

    // Black arc section (-20 to 0 dB)
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, radius, (-135 * Math.PI) / 180, (-90 * Math.PI) / 180);
    ctx.stroke();

    // Red clip arc section (0 to +3 dB)
    ctx.strokeStyle = isPowered ? '#cc1100' : '#441111';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, radius, (-90 * Math.PI) / 180, (-45 * Math.PI) / 180);
    ctx.stroke();

    // Calibration Tick Marks
    const ticks = [
      { db: -20, label: '-20' },
      { db: -10, label: '-10' },
      { db: -7, label: '-7' },
      { db: -5, label: '-5' },
      { db: -3, label: '-3' },
      { db: -1, label: '-1' },
      { db: 0, label: '0' },
      { db: 1, label: '+1' },
      { db: 2, label: '+2' },
      { db: 3, label: '+3' },
    ];

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ticks.forEach((t) => {
      const angleDeg = -45 + ((t.db - (-20)) / (3 - (-20))) * 90;
      const angleRad = ((angleDeg - 90) * Math.PI) / 180;

      const innerR = radius - 4;
      const outerR = radius + 4;
      const textR = radius - 14;

      const x1 = pivotX + innerR * Math.cos(angleRad);
      const y1 = pivotY + innerR * Math.sin(angleRad);
      const x2 = pivotX + outerR * Math.cos(angleRad);
      const y2 = pivotY + outerR * Math.sin(angleRad);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = t.db >= 0 ? (isPowered ? '#cc1100' : '#551111') : isPowered ? '#111' : '#333';
      ctx.lineWidth = t.db === 0 || t.db === -20 || t.db === 3 ? 2 : 1;
      ctx.stroke();

      // Labels
      if ([' -20', '-10', '-5', '0', '+3'].includes(t.label)) {
        const tx = pivotX + textR * Math.cos(angleRad);
        const ty = pivotY + textR * Math.sin(angleRad);
        ctx.font = 'bold 9px sans-serif';
        ctx.fillStyle = t.db >= 0 ? (isPowered ? '#b30000' : '#441111') : isPowered ? '#222' : '#444';
        ctx.fillText(t.label, tx, ty);
      }
    });

    // Subtitle VU Label
    ctx.font = '900 11px sans-serif';
    ctx.fillStyle = isPowered ? '#2b2313' : '#444';
    ctx.fillText('VU', pivotX, h * 0.45);

    ctx.font = 'bold 8px sans-serif';
    ctx.fillStyle = isPowered ? '#594a30' : '#444';
    ctx.fillText(title, pivotX, h * 0.58);
    ctx.restore();

    // 4. Moving Physical Needle
    ctx.save();
    const rad = ((needleAngle - 90) * Math.PI) / 180;
    const needleLen = radius + 6;

    const nx = pivotX + needleLen * Math.cos(rad);
    const ny = pivotY + needleLen * Math.sin(rad);

    // Needle shadow
    ctx.beginPath();
    ctx.moveTo(pivotX + 3, pivotY);
    ctx.lineTo(nx + 3, ny + 3);
    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // Needle line
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(nx, ny);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Pivot Cap
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#1e2126';
    ctx.fill();
    ctx.strokeStyle = '#3a3d45';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#444';
    ctx.fill();
    ctx.restore();

    // 5. Glass Reflection Overlay Glare
    const glareGradient = ctx.createLinearGradient(0, 0, w, h);
    glareGradient.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
    glareGradient.addColorStop(0.35, 'rgba(255, 255, 255, 0.08)');
    glareGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    glareGradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');

    ctx.fillStyle = glareGradient;
    ctx.beginPath();
    ctx.roundRect(dialX, dialY, dialW, dialH, 4);
    ctx.fill();
  };

  return (
    <div className="flex flex-col items-center select-none shadow-2xl rounded-lg overflow-hidden border border-gray-800">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full h-full block"
      />
    </div>
  );
};
