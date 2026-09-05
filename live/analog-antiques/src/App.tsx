import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CassettePlayerDeck } from './components/CassettePlayerDeck';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { VaultClubSection } from './components/VaultClubSection';
import { DocsViewerModal } from './components/DocsViewerModal';
import { Footer } from './components/Footer';

import { ProductItem, CartItem, TapeArchiveItem } from './types';
import { ARCHIVE_TAPES } from './data/tapes';
import { audioEngine } from './utils/audioSynthesizer';

// Import Hero Image
import heroImage from './assets/images/hero_cassette_recorder_1785274936860.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('welcome');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(true);
  const [currentTape, setCurrentTape] = useState<TapeArchiveItem>(ARCHIVE_TAPES[0]);
  const [tapeNoiseEnabled, setTapeNoiseEnabled] = useState<boolean>(true);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Modals
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isDocsOpen, setIsDocsOpen] = useState<boolean>(false);

  // Cart Actions
  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Tape Deck Actions
  const handleLoadTapeToPlayer = (tapeId: string) => {
    const found = ARCHIVE_TAPES.find((t) => t.id === tapeId);
    if (found) {
      setCurrentTape(found);
      setIsPlayerOpen(true);
      // Smooth scroll to tape player deck
      const playerEl = document.getElementById('tape-player-section');
      if (playerEl) {
        playerEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#E8D9C5] text-[#1A1A1A] flex flex-col font-mono-retro relative overflow-x-hidden">
      <div className="vintage-grain"></div>
      
      {/* Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenDocs={() => setIsDocsOpen(true)}
        onTogglePlayer={() => setIsPlayerOpen(!isPlayerOpen)}
        isPlayerOpen={isPlayerOpen}
        tapeNoiseEnabled={tapeNoiseEnabled}
        onToggleTapeNoise={() => {
          const next = !tapeNoiseEnabled;
          setTapeNoiseEnabled(next);
          audioEngine.toggleTapeNoise(next);
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      {/* Main Content */}
      <main className="flex-1 space-y-6">
        
        {/* Welcome / Hero Section */}
        <div id="welcome">
          <HeroSection
            heroImageUrl={heroImage}
            onExploreClick={() => handleNavClick('shop')}
            onQuickPlay={() => handleLoadTapeToPlayer('tape-01')}
          />
        </div>

        {/* Cassette Tape Player Deck */}
        <div id="tape-player-section">
          <CassettePlayerDeck
            isOpen={isPlayerOpen}
            currentTape={currentTape}
            onSelectTape={setCurrentTape}
            onClose={() => setIsPlayerOpen(false)}
          />
        </div>

        {/* Vault Catalog Product Grid */}
        <div id="collections">
          <ProductGrid
            searchQuery={searchQuery}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            onLoadTapeToPlayer={handleLoadTapeToPlayer}
          />
        </div>

        {/* Workshop & Newsletter Club */}
        <div id="contact">
          <VaultClubSection />
        </div>

      </main>

      {/* Footer */}
      <Footer
        onOpenDocs={() => setIsDocsOpen(true)}
        onNavClick={handleNavClick}
      />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onLoadTapeToPlayer={handleLoadTapeToPlayer}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <DocsViewerModal
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />

    </div>
  );
}
