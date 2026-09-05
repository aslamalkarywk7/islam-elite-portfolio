export type CategoryType = 'all' | 'cassette' | 'equipment' | 'vinyl' | 'camera' | 'radio';
export type DecadeType = 'all' | '1960s' | '1970s' | '1980s';

export interface TrackInfo {
  trackNumber: number;
  title: string;
  duration: string;
  artist: string;
  side: 'A' | 'B';
}

export interface ProductItem {
  id: string;
  title: string;
  category: CategoryType;
  decade: DecadeType;
  price: number;
  originalYear: number;
  conditionRating: string;
  badge: string;
  imageUrl: string;
  description: string;
  provenance: string;
  specs: Record<string, string>;
  sideATracks?: TrackInfo[];
  sideBTracks?: TrackInfo[];
  tapeId?: string; // Links to audio player tape if available
  featured?: boolean;
}

export interface TapeArchiveItem {
  id: string;
  title: string;
  artist: string;
  year: number;
  genre: string;
  tapeColor: string;
  labelColor: string;
  synthPreset: 'synthwave' | 'funk' | 'lofi' | 'moog';
  sideATracks: string[];
  sideBTracks: string[];
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTape: TapeArchiveItem | null;
  side: 'A' | 'B';
  tapeSpeed: number; // 0.8 to 1.2
  tapeNoiseEnabled: boolean;
  volume: number;
  currentTrackIndex: number;
  isRewinding: boolean;
  isFastForwarding: boolean;
  vuLevelLeft: number; // 0 to 100 for VU meter needle
  vuLevelRight: number;
}
