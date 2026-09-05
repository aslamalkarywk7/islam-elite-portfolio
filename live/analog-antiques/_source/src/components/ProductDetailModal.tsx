import React from 'react';
import { ProductItem } from '../types';
import { X, Disc, ShoppingBag, ShieldCheck, Clock, Award, Check } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
  onLoadTapeToPlayer: (tapeId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onLoadTapeToPlayer,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#E8D9C5] border-4 border-[#1A1A1A] max-w-3xl w-full shadow-retro-lg film-grain overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#1A1A1A] text-[#E8D9C5] p-4 flex justify-between items-center border-b-2 border-[#D4A017]">
          <div className="flex items-center space-x-2">
            <span className="bg-[#BF5B30] text-[#E8D9C5] px-2 py-0.5 text-[10px] font-sans-retro font-bold">
              VAULT ITEM #{product.id.toUpperCase()}
            </span>
            <span className="text-xs font-mono-retro text-[#D4A017]">
              {product.originalYear} • {product.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-[#E8D9C5] hover:text-[#BF5B30] font-mono-retro font-bold text-sm bg-[#2A2A2A] px-2 py-0.5 border border-[#E8D9C5] cursor-pointer"
          >
            [CLOSE ESC]
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 font-mono-retro">
          
          {/* Top Row: Image & Key Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-[#1A1A1A] bg-[#1A1A1A] p-2 shadow-retro">
              <img
                src={product.imageUrl}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover filter contrast-105"
              />
              <div className="mt-2 bg-[#1A1A1A] text-[#D4A017] p-2 text-[10px] text-center border border-[#6D5E50] font-bold">
                CONDITION: {product.conditionRating}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="slab text-2xl text-[#1A1A1A] leading-tight">
                {product.title}
              </h2>

              <p className="text-xs text-[#1A1A1A] leading-relaxed bg-[#D8C7B0] p-3 border border-[#1A1A1A]">
                {product.description}
              </p>

              <div className="bg-[#5F6F52] text-[#E8D9C5] p-3 border-2 border-[#1A1A1A] flex justify-between items-center">
                <div>
                  <span className="text-[10px] block text-[#D4A017] uppercase font-bold">PRICE</span>
                  <span className="slab text-2xl">${product.price}.00 USD</span>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product);
                  }}
                  className="retro-btn bg-[#BF5B30] hover:bg-[#D4A017] hover:text-[#1A1A1A] text-[#E8D9C5] font-sans-retro text-xs font-bold px-4 py-2 border-2 border-[#1A1A1A] flex items-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add To Cart
                </button>
              </div>

              {product.tapeId && (
                <button
                  onClick={() => {
                    onLoadTapeToPlayer(product.tapeId!);
                    onClose();
                  }}
                  className="retro-btn w-full bg-[#D4A017] text-[#1A1A1A] font-sans-retro text-xs font-bold py-2 border-2 border-[#1A1A1A] flex items-center justify-center gap-2 hover:bg-[#BF5B30] hover:text-[#E8D9C5] cursor-pointer"
                >
                  <Disc className="w-4 h-4 animate-spin-reel" />
                  Load Audio Sample into Tape Deck
                </button>
              )}
            </div>
          </div>

          {/* Provenance Story */}
          <div className="bg-[#D8C7B0] p-4 border-2 border-[#1A1A1A] space-y-2">
            <h4 className="font-sans-retro text-xs font-bold text-[#BF5B30] uppercase flex items-center gap-1">
              <Award className="w-4 h-4" />
              Provenance & Restoration History
            </h4>
            <p className="text-xs text-[#1A1A1A] leading-relaxed font-sans-retro">
              {product.provenance}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="space-y-2">
            <h4 className="font-sans-retro text-xs font-bold text-[#1A1A1A] uppercase">
              Technical Specifications
            </h4>
            <div className="bg-[#FFFDF7] border-2 border-[#1A1A1A] p-3 text-xs divide-y divide-[#D8C7B0]">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="py-1.5 flex justify-between">
                  <span className="font-bold text-[#5F6F52]">{key}:</span>
                  <span className="text-[#1A1A1A]">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tracklist if Available */}
          {(product.sideATracks || product.sideBTracks) && (
            <div className="space-y-2">
              <h4 className="font-sans-retro text-xs font-bold text-[#BF5B30] uppercase">
                Tape Tracklist
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#D8C7B0] p-3 border-2 border-[#1A1A1A] text-xs font-mono-retro">
                <div>
                  <span className="font-bold text-[#1A1A1A] block border-b border-[#1A1A1A] pb-1 mb-2">
                    SIDE A
                  </span>
                  {product.sideATracks?.map((t) => (
                    <p key={t.trackNumber} className="text-[#1A1A1A]">
                      {t.trackNumber}. {t.title} ({t.duration})
                    </p>
                  ))}
                </div>
                <div>
                  <span className="font-bold text-[#1A1A1A] block border-b border-[#1A1A1A] pb-1 mb-2">
                    SIDE B
                  </span>
                  {product.sideBTracks?.map((t) => (
                    <p key={t.trackNumber} className="text-[#1A1A1A]">
                      {t.trackNumber}. {t.title} ({t.duration})
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
