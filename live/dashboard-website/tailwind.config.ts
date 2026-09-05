import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:    '#121212',
        gold: {
          DEFAULT: '#C9A96E',  // Champagne Gold — warm & bright
        },
        burgundy: {
          DEFAULT: '#800020',  // Deep Burgundy (Luxury Alert)
        },
        // Aliases used via text-burg / border-burg / bg-burg-dim etc.
        burg: '#800020',
        dim:  'rgba(255,255,255,0.45)',
      },
      fontFamily: {
        sans:           ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        montserrat:     ['Montserrat', 'Inter', 'sans-serif'],
        'serif-luxury': ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
