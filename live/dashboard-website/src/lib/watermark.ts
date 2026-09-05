/**
 * Encodes a string into zero-width characters (ZWCs)
 * Uses Zero Width Space (U+200B), Zero Width Non-Joiner (U+200C), Zero Width Joiner (U+200D), and Word Joiner (U+2060)
 */
export function encodeSteganography(text: string): string {
  const binaryString = Array.from(text)
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');

  return Array.from(binaryString)
    .map(bit => (bit === '1' ? '\u200B' : '\u200C')) // Zero-width space and non-joiner map to 1 and 0
    .join('') + '\u200D'; // Add a terminator
}

export function applyWatermark(visibleText: string, hiddenPayload: string): string {
  return visibleText + encodeSteganography(hiddenPayload);
}

export function decodeSteganography(stegoText: string): string {
  const zwcs = stegoText.match(/[\u200B\u200C]+/g);
  if (!zwcs) return '';
  
  const binaryString = Array.from(zwcs[0])
    .map(char => (char === '\u200B' ? '1' : '0'))
    .join('');

  const chars = [];
  for (let i = 0; i < binaryString.length; i += 8) {
    const byte = binaryString.slice(i, i + 8);
    if (byte.length === 8) {
      chars.push(String.fromCharCode(parseInt(byte, 2)));
    }
  }

  return chars.join('');
}
