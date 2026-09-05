import React, { useState } from 'react';
import { ProductItem, CategoryType, DecadeType } from '../types';
import { FEATURED_PRODUCTS } from '../data/products';
import { ARCHIVE_TAPES } from '../data/tapes';
import { Disc, ShoppingBag, Eye, Star, Tag, Filter, Check } from 'lucide-react';

interface ProductGridProps {
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
  onLoadTapeToPlayer: (tapeId: string) => void;
  searchQuery: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onSelectProduct,
  onAddToCart,
  onLoadTapeToPlayer,
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedDecade, setSelectedDecade] = useState<DecadeType>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const handleCartClick = (product: ProductItem) => {
    onAddToCart(product);
    setAddedItemIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const filteredProducts = FEATURED_PRODUCTS.filter((item) => {
    // Category Filter
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    // Decade Filter
    if (selectedDecade !== 'all' && item.decade !== selectedDecade) return false;
    // Search Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section id="shop" className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="bg-[#D8C7B0] border-4 border-[#1A1A1A] p-6 shadow-retro flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-sans-retro text-[#BF5B30] font-bold uppercase mb-1">
            <Tag className="w-4 h-4" />
            <span>Preserved Catalog & Store Items</span>
          </div>
          <h2 className="slab text-2xl sm:text-4xl text-[#1A1A1A] uppercase tracking-tight">
            Curated Analog Vault Catalog
          </h2>
          <p className="font-mono-retro text-xs sm:text-sm text-[#1A1A1A] mt-1">
            Showing {filteredProducts.length} authentic vintage pieces tested & serviced in San Francisco
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 font-sans-retro text-xs">
          
          {/* Category Dropdown */}
          <div className="flex items-center space-x-2 bg-[#E8D9C5] p-2 border-2 border-[#1A1A1A]">
            <Filter className="w-3.5 h-3.5 text-[#BF5B30]" />
            <span className="font-bold">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CategoryType)}
              className="bg-transparent font-mono-retro focus:outline-none cursor-pointer font-bold"
            >
              <option value="all">All Items</option>
              <option value="equipment">Hi-Fi Equipment & Decks</option>
              <option value="cassette">Cassette Tapes</option>
              <option value="vinyl">Vinyl & Turntables</option>
              <option value="camera">Film Cameras</option>
              <option value="radio">Vintage Radios</option>
            </select>
          </div>

          {/* Decade Dropdown */}
          <div className="flex items-center space-x-2 bg-[#E8D9C5] p-2 border-2 border-[#1A1A1A]">
            <span className="font-bold">Era:</span>
            <select
              value={selectedDecade}
              onChange={(e) => setSelectedDecade(e.target.value as DecadeType)}
              className="bg-transparent font-mono-retro focus:outline-none cursor-pointer font-bold"
            >
              <option value="all">All Eras</option>
              <option value="1960s">1960s</option>
              <option value="1970s">1970s</option>
              <option value="1980s">1980s</option>
            </select>
          </div>

        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length === 0 ? (
        <div className="bg-[#D8C7B0] border-4 border-[#1A1A1A] p-12 text-center font-sans-retro space-y-3">
          <p className="text-xl font-bold text-[#BF5B30]">No matching items found in the vault.</p>
          <p className="font-mono-retro text-xs text-[#1A1A1A]">Try broadening your filter settings or search query.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedDecade('all');
            }}
            className="retro-btn bg-[#1A1A1A] text-[#E8D9C5] px-4 py-2 border-2 border-[#1A1A1A] text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, idx) => {
            const isAdded = !!addedItemIds[product.id];
            const topColorBorder = idx % 3 === 0 ? 'border-t-[#BF5B30]' : idx % 3 === 1 ? 'border-t-[#D4A017]' : 'border-t-[#5F6F52]';
            return (
              <div
                key={product.id}
                className={`retro-card bg-[#E8D9C5] border-t-8 ${topColorBorder} flex flex-col justify-between group film-grain`}
              >
                {/* Image & Stamp Container */}
                <div className="relative border-b-2 border-[#1A1A1A] overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-64 object-cover filter contrast-105 saturate-90 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Stamp Badge */}
                  <div className="absolute top-3 left-3 bg-[#BF5B30] text-[#E8D9C5] px-2.5 py-1 text-[10px] font-sans-retro font-bold uppercase border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                    {product.badge}
                  </div>

                  {/* Rating / Year Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#1A1A1A] text-[#D4A017] px-2.5 py-1 text-[10px] font-mono-retro border border-[#D4A017] font-bold">
                    {product.originalYear} • {product.conditionRating}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="slab text-lg text-[#1A1A1A] leading-tight group-hover:text-[#BF5B30] transition-colors">
                        {product.title}
                      </h3>
                    </div>

                    <p className="font-mono-retro text-xs text-[#1A1A1A] leading-relaxed line-clamp-3 bg-[#D8C7B0] p-2 border border-[#1A1A1A]">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Actions */}
                  <div className="pt-4 border-t-2 border-dashed border-[#1A1A1A] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-mono-retro text-xs text-[#1A1A1A]">
                        <span className="text-[10px] block text-[#6D5E50] uppercase font-bold">Vault Price</span>
                        <span className="slab text-2xl text-[#BF5B30]">${product.price}.00</span>
                      </div>

                      {product.tapeId && (
                        <button
                          onClick={() => onLoadTapeToPlayer(product.tapeId!)}
                          className="bg-[#5F6F52] text-[#E8D9C5] text-[10px] font-sans-retro font-bold px-2.5 py-1.5 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-[#D4A017] hover:text-[#1A1A1A] transition-colors flex items-center gap-1 uppercase"
                          title="Load Tape Sample into Cassette Deck"
                        >
                          <Disc className="w-3.5 h-3.5 animate-spin-reel" />
                          Listen Sample
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 font-sans-retro text-xs font-bold uppercase">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="bg-[#E8D9C5] hover:bg-[#1A1A1A] hover:text-[#E8D9C5] text-[#1A1A1A] py-2 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-colors flex items-center justify-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Quick View
                      </button>

                      <button
                        onClick={() => handleCartClick(product)}
                        className={`py-2 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-colors flex items-center justify-center gap-1 ${
                          isAdded
                            ? 'bg-[#5F6F52] text-[#E8D9C5]'
                            : 'bg-[#BF5B30] hover:bg-[#D4A017] text-[#E8D9C5] hover:text-[#1A1A1A]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            Added!
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add To Cart
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};
