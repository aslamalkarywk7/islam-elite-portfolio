import { TapeArchiveItem } from '../types';

export const ARCHIVE_TAPES: TapeArchiveItem[] = [
  {
    id: 'tape-01',
    title: 'Midnight Synthwaves (Vol. I)',
    artist: 'The Sunset Analog Band',
    year: 1978,
    genre: 'Synthwave / Warm Ambient',
    tapeColor: '#C85A32',
    labelColor: '#F5EBE0',
    synthPreset: 'synthwave',
    sideATracks: ['1. Neon Horizon (04:12)', '2. Tape Deck Solitude (03:45)', '3. Analog Dreams (05:10)'],
    sideBTracks: ['4. Chrome Cassette (04:00)', '5. Midnight Cruiser (03:30)']
  },
  {
    id: 'tape-02',
    title: 'Funk & Groove Vault (Restored)',
    artist: 'San Francisco Sound System',
    year: 1974,
    genre: '70s Jazz Funk & Soul',
    tapeColor: '#D4A328',
    labelColor: '#2B2118',
    synthPreset: 'funk',
    sideATracks: ['1. Haight Street Funk (03:50)', '2. Brass & Bassline (04:15)'],
    sideBTracks: ['3. Velvet Groove (04:40)', '4. Sunset Wah-Wah (05:02)']
  },
  {
    id: 'tape-03',
    title: 'Lo-Fi Rain & Coffee Memories',
    artist: 'Preserved Tape Master #402',
    year: 1981,
    genre: 'Chilled Acoustic Lo-Fi',
    tapeColor: '#4A6B82',
    labelColor: '#F5EBE0',
    synthPreset: 'lofi',
    sideATracks: ['1. Rainy Afternoon (03:20)', '2. Dusty Vinyl Crackle (04:05)'],
    sideBTracks: ['3. Tape Saturation Study (03:55)', '4. Goodbye 1981 (04:30)']
  },
  {
    id: 'tape-04',
    title: 'Cosmic Moog Oddity',
    artist: 'Modular Synth Pioneer Archive',
    year: 1969,
    genre: 'Experimental Vintage Synth',
    tapeColor: '#4B5838',
    labelColor: '#EEDCC6',
    synthPreset: 'moog',
    sideATracks: ['1. Transistor Orbit (05:12)', '2. Oscillating Moon (04:45)'],
    sideBTracks: ['3. Vacuum Tube Journey (06:01)', '4. Zero Gravity Drift (04:20)']
  }
];
