import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  X,
  Instagram,
  MessageCircle,
  ShoppingBag,
  Heart,
  Settings
} from 'lucide-react';
import { Product, StoreSettings } from '../types';
import { formatCurrency } from '../lib/formatters';

interface HeaderProps {
  storeSettings: StoreSettings;
  cartCount?: number;
  favoritesCount?: number;
  onOpenCart?: () => void;
  onOpenFavorites?: () => void;
  onOpenTradeIn?: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
  onOpenAdmin?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  storeSettings,
  cartCount = 0,
  favoritesCount = 0,
  onOpenCart,
  onOpenFavorites,
  searchQuery,
  onSearchChange,
  products,
  onSelectProduct,
  onOpenAdmin,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim().length > 1 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/95 backdrop-blur-md border-b border-neutral-900 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-3 shrink-0">
          {storeSettings.logoUrl ? (
            <img
              src={storeSettings.logoUrl}
              alt={storeSettings.storeName}
              className="h-9 sm:h-12 w-auto object-contain cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="text-lg sm:text-xl font-black tracking-tight text-white cursor-pointer">
              MAGNATA CELL
            </span>
          )}
        </div>

        {/* Search Bar with Autocomplete Dropdown */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-xs sm:max-w-md lg:max-w-lg mx-2">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Buscar iPhone (ex: 15 Pro, 13, 128GB)..."
              className="w-full bg-neutral-900 text-white placeholder-neutral-500 text-xs sm:text-sm pl-10 pr-9 py-2 sm:py-2.5 rounded-full border border-neutral-800 focus:border-amber-500 focus:outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 text-neutral-400 hover:text-white"
                title="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-neutral-800">
              <div className="p-2 text-[11px] font-bold text-neutral-400 uppercase tracking-wider bg-neutral-950/50">
                Modelos Encontrados ({searchResults.length})
              </div>
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    setIsSearchFocused(false);
                  }}
                  className="p-3 hover:bg-neutral-800 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-10 h-10 object-contain rounded-lg bg-neutral-950 p-1 shrink-0"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{product.name}</h4>
                      <p className="text-[11px] text-neutral-400">{product.condition}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-black text-amber-400">
                      {formatCurrency(product.variants[product.defaultVariantIndex].pricePix)}
                    </span>
                    <span className="text-[10px] text-neutral-500 block">no Pix</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Instagram */}
          <a
            href={storeSettings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900 hover:bg-pink-600/20 text-pink-400 flex items-center justify-center border border-neutral-800 transition-colors"
            title="Instagram Oficial"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://api.whatsapp.com/send?phone=${storeSettings.whatsappPhone}&text=${encodeURIComponent('Olá! Estava no site da Magnata Cell e gostaria de atendimento.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-md transition-colors"
            title="Falar no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          {/* Favorites Drawer Toggle */}
          {onOpenFavorites && (
            <button
              onClick={onOpenFavorites}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-800 transition-colors"
              title="Favoritos"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </button>
          )}

          {/* Cart Drawer Toggle */}
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center font-bold shadow-md transition-colors"
              title="Carrinho"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-amber-400 text-[10px] font-black flex items-center justify-center border border-amber-400">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Admin Config Button */}
          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center text-xs"
              title="Painel de Controle"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
