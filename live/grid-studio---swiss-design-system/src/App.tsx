import React, { useState } from 'react';
import { ViewMode, GridConfig, RedVariant } from './types';
import { MacBookMockup } from './components/MacBookMockup';
import { SwissLandingPage } from './components/SwissLandingPage';
import { GridInspectorToolbar } from './components/GridInspectorToolbar';
import { PosterPlaygroundModal } from './components/PosterPlaygroundModal';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('mockup');
  const [isPosterOpen, setIsPosterOpen] = useState<boolean>(false);

  const [gridConfig, setGridConfig] = useState<GridConfig>({
    showColumns: false,
    showBaseline: false,
    showMargins: false,
    columnCount: 12,
    redAccent: '#E30613',
  });

  const handleUpdateGridConfig = (partialConfig: Partial<GridConfig>) => {
    setGridConfig((prev) => ({ ...prev, ...partialConfig }));
  };

  return (
    <div className="min-h-screen bg-[#0f0f11] text-black font-sans antialiased selection:bg-[#E30613] selection:text-white relative">
      
      {/* RENDER VIEW MODE: DESK MOCKUP VS DIRECT FULLSCREEN */}
      {viewMode === 'mockup' ? (
        <MacBookMockup
          gridConfig={gridConfig}
          onUpdateGridConfig={handleUpdateGridConfig}
          onOpenPosterPlayground={() => setIsPosterOpen(true)}
          onSwitchToFullscreen={() => setViewMode('fullscreen')}
          redAccent={gridConfig.redAccent}
        />
      ) : (
        <div className="min-h-screen bg-white">
          <SwissLandingPage
            gridConfig={gridConfig}
            onUpdateGridConfig={handleUpdateGridConfig}
            onOpenPosterPlayground={() => setIsPosterOpen(true)}
            redAccent={gridConfig.redAccent}
          />
        </div>
      )}

      {/* FLOATING GRID INSPECTOR TOOLBAR */}
      <GridInspectorToolbar
        viewMode={viewMode}
        onSelectViewMode={setViewMode}
        gridConfig={gridConfig}
        onUpdateGridConfig={handleUpdateGridConfig}
        onOpenPosterPlayground={() => setIsPosterOpen(true)}
      />

      {/* POSTER PLAYGROUND MODAL */}
      <PosterPlaygroundModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
      />

    </div>
  );
}
