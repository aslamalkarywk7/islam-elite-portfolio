import { ProductItem } from '../types';

import heroCassetteImg from '../assets/images/hero_cassette_recorder_1785274936860.jpg';
import boomboxImg from '../assets/images/vintage_boombox_1785274948568.jpg';
import turntableImg from '../assets/images/classic_turntable_1785274960152.jpg';
import cameraImg from '../assets/images/vintage_camera_1785274971898.jpg';
import cassetteStackImg from '../assets/images/cassette_tapes_stack_1785274984864.jpg';

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'item-01',
    title: 'Restored 1978 Sony TC-138SD Stereo Cassette Deck',
    category: 'equipment',
    decade: '1970s',
    price: 340,
    originalYear: 1978,
    conditionRating: '9.8 / 10 Mint',
    badge: 'RESTORED HI-FI',
    imageUrl: heroCassetteImg,
    description: 'Fully recapped audiophile cassette deck featuring dual analog needle VU meters, solid walnut cabinet trim, and ferrite heads.',
    provenance: 'Acquired from a studio engineer in Portland, Oregon. Belts replaced with genuine Japanese rubber belts, demagnetized heads, and calibrated pitch control.',
    specs: {
      'Tape Heads': '1 x Record/Playback, 1 x Erase (Ferrite)',
      'Frequency Response': '30Hz to 16kHz (Chrome Tape)',
      'Wow & Flutter': '0.06% WRMS',
      'Signal to Noise': '62 dB (Dolby B NR)',
      'Power Input': '120V AC, 60Hz, 18W'
    },
    featured: true,
    tapeId: 'tape-01'
  },
  {
    id: 'item-02',
    title: 'Hi-Fi Stereo Twin-Speaker Boombox JVC RC-M70',
    category: 'equipment',
    decade: '1980s',
    price: 480,
    originalYear: 1981,
    conditionRating: '9.5 / 10 Excellent',
    badge: 'KING OF BOOMBOXES',
    imageUrl: boomboxImg,
    description: 'The holy grail of portable 80s boomboxes. Boasts dual 6.5-inch woofers, 5-band equalizer, and line-in input for modern audio jacks.',
    provenance: 'Preserved in original box by a radio DJ in Oakland, CA. Clean battery compartment, serviced tape motor drive, and re-greased volume pots.',
    specs: {
      'Speakers': '2 x 16cm Woofers, 2 x 5cm Tweeters',
      'Power Output': '30W Max Peak',
      'Radio Bands': 'AM/FM Stereo with Fine Tuning LED',
      'Weight': '8.2 kg (18 lbs)'
    },
    featured: true,
    tapeId: 'tape-02'
  },
  {
    id: 'item-03',
    title: 'Classic 1975 Marantz 6300 Direct Drive Turntable',
    category: 'vinyl',
    decade: '1970s',
    price: 620,
    originalYear: 1975,
    conditionRating: '9.9 / 10 Pristine',
    badge: 'AUDIOPHILE VAULT',
    imageUrl: turntableImg,
    description: 'Heavyweight direct-drive turntable featuring a real wood veneer plinth, strobescope platter speed control, and Shure M95ED cartridge.',
    provenance: 'Single-owner estate in Carmel-by-the-Sea. Platter motor oiled, new acrylic dust cover installed, and custom gold-plated RCA cables attached.',
    specs: {
      'Drive System': 'Direct Drive DC Servo Motor',
      'Speeds': '33-1/3 and 45 RPM Pitch Adjustable',
      'Tonearm': 'S-shaped Static Balance Arm',
      'Platter Weight': '1.6 kg Die-cast Aluminum'
    },
    featured: true
  },
  {
    id: 'item-04',
    title: '1968 Canon Canonet QL17 35mm Rangefinder Camera',
    category: 'camera',
    decade: '1960s',
    price: 215,
    originalYear: 1968,
    conditionRating: '9.2 / 10 Fully Functional',
    badge: 'ANALOG PHOTOGRAPHY',
    imageUrl: cameraImg,
    description: 'Sharp 40mm f/1.7 fixed lens street camera with Quick Loading (QL) film mechanism and mechanical shutter.',
    provenance: 'Sourced from a photojournalist archive in San Francisco. Viewfinder cleaned, light seals replaced with fresh velvet foam.',
    specs: {
      'Lens': 'Canon 40mm f/1.7 (6 elements in 4 groups)',
      'Shutter Speeds': '1/4 sec to 1/500 sec + Bulb',
      'Film Type': 'Standard 35mm Film',
      'Focusing': 'Coupled Rangefinder'
    },
    featured: true
  },
  {
    id: 'item-05',
    title: 'Limited 1978 Midnight Synthwaves Tape Collection',
    category: 'cassette',
    decade: '1970s',
    price: 45,
    originalYear: 1978,
    conditionRating: '10 / 10 Sealed / Unplayed',
    badge: 'RARE ARCHIVE',
    imageUrl: cassetteStackImg,
    description: 'A box set of 3 high-bias Chrome Type II magnetic audio tapes preserved in clear jewel cases with gold foil embossed covers.',
    provenance: 'Vault discovery from a defunct recording studio in Berkeley. Zero tape degradation or magnetic bleed through.',
    specs: {
      'Tape Formulation': 'High Bias Chrome Type II',
      'Duration': '60 Minutes per Cassette (C-60)',
      'Shell Type': 'Precision Screw-Assembled Transparent Shell'
    },
    featured: true,
    tapeId: 'tape-01',
    sideATracks: [
      { trackNumber: 1, title: 'Neon Horizon', duration: '04:12', artist: 'The Sunset Analog Band', side: 'A' },
      { trackNumber: 2, title: 'Tape Deck Solitude', duration: '03:45', artist: 'The Sunset Analog Band', side: 'A' },
      { trackNumber: 3, title: 'Analog Dreams', duration: '05:10', artist: 'The Sunset Analog Band', side: 'A' }
    ],
    sideBTracks: [
      { trackNumber: 4, title: 'Chrome Cassette', duration: '04:00', artist: 'The Sunset Analog Band', side: 'B' },
      { trackNumber: 5, title: 'Midnight Cruiser', duration: '03:30', artist: 'The Sunset Analog Band', side: 'B' }
    ]
  },
  {
    id: 'item-06',
    title: '1972 Zenith Vacuum Tube Amber Illuminating Radio',
    category: 'radio',
    decade: '1970s',
    price: 165,
    originalYear: 1972,
    conditionRating: '9.4 / 10 Warm Glow',
    badge: 'WARM TUBE AUDIO',
    imageUrl: heroCassetteImg,
    description: 'A iconic mid-century radio featuring 5 glowing vacuum tubes, warm amber backlit glass dial, and rich wooden enclosure.',
    provenance: 'Fully recapped with modern high-voltage capacitors for noise-free AM radio reception and rich resonant tone.',
    specs: {
      'Tubes': '5-Tube Superheterodyne Circuit',
      'Tuning Range': 'AM 540kHz to 1600kHz',
      'Enclosure': 'Solid American Walnut'
    },
    featured: true
  },
  {
    id: 'item-07',
    title: 'San Francisco Soul & Funk Vault Mixtape (1974)',
    category: 'cassette',
    decade: '1970s',
    price: 28,
    originalYear: 1974,
    conditionRating: '10 / 10 Brand New Batch',
    badge: 'STORE EXCLUSIVE',
    imageUrl: cassetteStackImg,
    description: 'Mastered directly from original 1/2 inch studio reel-to-reel master tapes onto high-grade ferric magnetic cassette tapes.',
    provenance: 'Dubbed individually in our Haight Street workshop using a modified Nakamichi Dragon cassette deck.',
    specs: {
      'Tape Formulation': 'Normal Bias Type I Ferric',
      'Length': 'C-45 (45 Minutes)'
    },
    featured: false,
    tapeId: 'tape-02'
  },
  {
    id: 'item-08',
    title: '1965 Leica M3 Rangefinder Silver Chrome Camera',
    category: 'camera',
    decade: '1960s',
    price: 1450,
    originalYear: 1965,
    conditionRating: '9.9 / 10 Museum Quality',
    badge: 'COLLECTOR GRADE',
    imageUrl: cameraImg,
    description: 'The pinnacle of mechanical rangefinder precision. Complete with Summicron 50mm f/2 Dual Range lens and original leather case.',
    provenance: 'Private estate in Zurich, Switzerland. Shutter times tested and accurate within 2% margin across all speeds.',
    specs: {
      'Mount': 'Leica M-Bayonet Mount',
      'Viewfinder Magnification': '0.91x Brightframe',
      'Shutter': 'Horizontal Cloth Focal Plane Shutter'
    },
    featured: false
  }
];
