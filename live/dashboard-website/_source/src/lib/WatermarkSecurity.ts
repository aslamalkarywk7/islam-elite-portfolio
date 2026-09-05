/**
 * WatermarkSecurity.ts
 * ─────────────────────────────────────────────────────────────────────
 * Bespoke Anti-Leak Security Module — Oman Luxury Dash
 *
 * Strategy (multi-layer):
 *  1. Steganographic ZWC payload  — embedded in title text (survives copy/paste)
 *  2. Hidden DOM subtree          — deeply nested invisible elements carrying an
 *     encrypted hash of the authorization string and session context
 *  3. <meta> tag injection        — persists in DOM exports / HTML snapshots
 *  4. Print / PDF watermark node  — zero-opacity at screen, visible at print
 *  5. MutationObserver guard      — re-injects all layers if they are removed
 *
 * All injected nodes carry `data-wm` attributes for forensic identification.
 * ─────────────────────────────────────────────────────────────────────
 */

// ── helpers ──────────────────────────────────────────────────────────

/** Simple non-reversible hash (djb2) → hex string */
function djb2Hash(str: string): string {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
    hash = hash & 0xffffffff; // keep 32-bit
  }
  return (hash >>> 0).toString(16).toUpperCase().padStart(8, '0');
}

/** XOR-obfuscate a string using a repeating key */
function xorObfuscate(text: string, key: string): string {
  return Array.from(text)
    .map((ch, i) =>
      String.fromCharCode(ch.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    )
    .join('');
}

/** Encode string to zero-width chars (binary steganography) */
function encodeZWC(text: string): string {
  const binary = Array.from(text)
    .map(c => c.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');
  return Array.from(binary)
    .map(b => (b === '1' ? '\u200B' : '\u200C'))
    .join('') + '\u200D'; // ZWJ terminator
}

// ── public API ────────────────────────────────────────────────────────

const AUTHORIZATION_STRING =
  'Authorized for Oman Luxury Dash - Architecture by Nashar Studio';

const XOR_KEY = 'NasharStudio2025';

const SESSION_TAG = `OLX-${djb2Hash(AUTHORIZATION_STRING)}-${Date.now()}`;

/** Injects all security watermark layers into the document */
export function injectWatermark(): void {
  if (typeof window === 'undefined') return; // SSR guard
  _injectAll();
  _watchMutations(); // Guard against DOM manipulation
}

/** Returns the ZWC-encoded payload (for embedding in visible text) */
export function getZWCPayload(): string {
  return encodeZWC(SESSION_TAG);
}

// ── private: layer builders ───────────────────────────────────────────

const WM_ROOT_ID  = 'wm-security-root';
const WM_PRINT_ID = 'wm-print-overlay';
const WM_META_ID  = 'wm-meta-auth';

function _injectAll() {
  _injectMeta();
  _injectDomTree();
  _injectPrintLayer();
}

/**
 * Layer 1: <meta> tag — survives "Save As HTML" exports.
 */
function _injectMeta() {
  if (document.getElementById(WM_META_ID)) return;

  const obfuscated = Array.from(xorObfuscate(AUTHORIZATION_STRING, XOR_KEY))
    .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('');

  const meta = document.createElement('meta');
  meta.id      = WM_META_ID;
  meta.name    = 'x-document-auth';
  meta.content = `${SESSION_TAG}::${obfuscated}`;
  meta.setAttribute('data-wm', 'true');
  document.head.appendChild(meta);
}

/**
 * Layer 2: Deeply nested, zero-opacity DOM subtree.
 * Persists through normal UI element removal because it
 * is appended directly to <body> and not within any React tree.
 *
 * Structure:
 *  div[style=opacity:0;height:0;overflow:hidden;position:absolute;top:-9999px]
 *   └─ div → div → div → div → span (ZWC payload)
 *                              └─ span (hash)
 *                              └─ span (auth string, 0-width)
 */
function _injectDomTree() {
  if (document.getElementById(WM_ROOT_ID)) return;

  const root = document.createElement('div');
  root.id = WM_ROOT_ID;
  root.setAttribute('data-wm', SESSION_TAG);
  root.setAttribute('aria-hidden', 'true');
  Object.assign(root.style, {
    opacity:   '0',
    height:    '0',
    overflow:  'hidden',
    position:  'absolute',
    top:       '-99999px',
    left:      '-99999px',
    userSelect:'none',
    pointerEvents: 'none',
  });

  // Nest 5 levels deep to survive superficial DOM scraping
  let node: HTMLElement = root;
  for (let i = 0; i < 5; i++) {
    const child = document.createElement('div');
    child.setAttribute('data-wm-depth', String(i));
    node.appendChild(child);
    node = child;
  }

  // Leaf: embed the ZWC payload + hash + auth string
  const leaf = document.createElement('span');
  leaf.setAttribute('data-wm-payload', SESSION_TAG);
  leaf.textContent =
    getZWCPayload() +
    ` [${djb2Hash(AUTHORIZATION_STRING)}] ` +
    encodeZWC(AUTHORIZATION_STRING);
  node.appendChild(leaf);

  document.body.appendChild(root);
}

/**
 * Layer 3: Print / PDF overlay.
 * visibility=hidden on screen, wm-print-show CSS makes it
 * appear as a diagonal watermark when printing to PDF.
 */
function _injectPrintLayer() {
  if (document.getElementById(WM_PRINT_ID)) return;

  const overlay = document.createElement('div');
  overlay.id = WM_PRINT_ID;
  overlay.className = 'wm-print-show'; // activated in globals.css @media print
  overlay.setAttribute('data-wm', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  Object.assign(overlay.style, {
    display:        'none',  // hidden on screen; @media print overrides
    visibility:     'hidden',
    pointerEvents:  'none',
    userSelect:     'none',
  });
  overlay.textContent = AUTHORIZATION_STRING.toUpperCase();
  document.body.appendChild(overlay);
}

// ── private: MutationObserver guard ──────────────────────────────────
let _observer: MutationObserver | null = null;

/** Watches the document for watermark node removal and re-injects. */
function _watchMutations() {
  if (_observer) return; // already watching

  _observer = new MutationObserver((mutations) => {
    let needsRestore = false;
    for (const m of mutations) {
      if (m.type === 'childList') {
        m.removedNodes.forEach((node) => {
          if (
            node instanceof HTMLElement &&
            (node.id === WM_ROOT_ID ||
              node.id === WM_PRINT_ID ||
              node.getAttribute('data-wm') === 'true')
          ) {
            needsRestore = true;
          }
        });
      }
    }
    if (needsRestore) {
      // Debounced re-inject — avoid thrashing
      setTimeout(_injectAll, 60);
    }
  });

  _observer.observe(document.documentElement, {
    childList: true,
    subtree:   true,
  });
}
