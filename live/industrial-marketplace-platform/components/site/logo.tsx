import { cn } from "@/lib/utils"

/**
 * AGMAIS Smart Investment Platform Logo
 *
 * Concept:
 * - An upward-pointing "A" monogram formed by two beveled slabs -> growth / investment
 * - A rising circuit/chart line inside -> smart AI-driven platform
 * - A node/dot at the top -> a data point / target / opportunity
 * - Star of Morocco (pentagram) subtly embedded inside the "A" -> Moroccan identity
 *
 * Colors are token-driven:
 *  - primary = gold
 *  - foreground = dark navy (light theme) / near-white (dark theme)
 */
export function Logo({
  className,
  variant = "mark",
  monochrome = false,
}: {
  className?: string
  variant?: "mark" | "full"
  /** If true, uses currentColor everywhere (useful on dark hero sections). */
  monochrome?: boolean
}) {
  const gold = monochrome ? "currentColor" : "var(--primary)"
  const ink = monochrome ? "currentColor" : "var(--background)"

  if (variant === "full") {
    return (
      <svg
        viewBox="0 0 200 64"
        className={cn("h-10 w-auto", className)}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="AGMAIS - منصة الاستثمار الصناعي الذكية"
      >
        <Mark x={0} y={0} size={64} gold={gold} ink={ink} />
        <g fontFamily="var(--font-display, 'Cairo'), sans-serif">
          <text x={76} y={30} fill={ink} fontSize={22} fontWeight={900} letterSpacing="1">
            AGMAIS
          </text>
          <text x={76} y={48} fill={gold} fontSize={9} fontWeight={700} letterSpacing="4">
            SMART · INDUSTRIAL
          </text>
        </g>
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-10 w-10", className)}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AGMAIS"
    >
      <Mark x={0} y={0} size={64} gold={gold} ink={ink} />
    </svg>
  )
}

function Mark({
  x,
  y,
  size,
  gold,
  ink,
}: {
  x: number
  y: number
  size: number
  gold: string
  ink: string
}) {
  // All coordinates are inside a 64x64 frame, then scaled.
  const s = size / 64
  const tx = x
  const ty = y
  return (
    <g transform={`translate(${tx} ${ty}) scale(${s})`}>
      {/* Rounded tile background */}
      <rect
        x={2}
        y={2}
        width={60}
        height={60}
        rx={14}
        fill={ink}
        stroke={gold}
        strokeOpacity={0.35}
        strokeWidth={1}
      />

      {/* Subtle inner grid (smart-platform hint) */}
      <g stroke={gold} strokeOpacity={0.12} strokeWidth={0.5}>
        <line x1={2} y1={22} x2={62} y2={22} />
        <line x1={2} y1={42} x2={62} y2={42} />
        <line x1={22} y1={2} x2={22} y2={62} />
        <line x1={42} y1={2} x2={42} y2={62} />
      </g>

      {/* A-monogram left slab */}
      <path
        d="M 14 52 L 26 12 L 34 12 L 22 52 Z"
        fill={gold}
      />
      {/* A-monogram right slab (slightly darker tone through opacity) */}
      <path
        d="M 30 12 L 38 12 L 50 52 L 42 52 Z"
        fill={gold}
        fillOpacity={0.75}
      />
      {/* A crossbar */}
      <rect x={22} y={34} width={20} height={4} fill={gold} />

      {/* Rising chart line through the A (smart / AI signal) */}
      <polyline
        points="12,48 22,40 30,44 40,28 52,18"
        fill="none"
        stroke="white"
        strokeOpacity={0.95}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Data node / target at the peak */}
      <circle cx={52} cy={18} r={2.8} fill="white" />
      <circle cx={52} cy={18} r={1.2} fill={gold} />

      {/* Tiny Moroccan star accent (bottom-right) */}
      <MoroccanStar cx={50} cy={50} r={4} stroke={gold} />
    </g>
  )
}

function MoroccanStar({
  cx,
  cy,
  r,
  stroke,
}: {
  cx: number
  cy: number
  r: number
  stroke: string
}) {
  // Pentagram built from 5 points
  const pts: string[] = []
  for (let i = 0; i < 5; i++) {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5
    const px = cx + r * Math.cos(angle)
    const py = cy + r * Math.sin(angle)
    pts.push(`${px.toFixed(2)},${py.toFixed(2)}`)
  }
  // Connect every other point to draw a pentagram
  const order = [0, 2, 4, 1, 3, 0]
  const d = order.map((idx, i) => `${i === 0 ? "M" : "L"} ${pts[idx]}`).join(" ")
  return <path d={d} fill="none" stroke={stroke} strokeWidth={0.9} strokeLinejoin="round" opacity={0.9} />
}
