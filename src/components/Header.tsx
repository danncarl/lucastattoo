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
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-black border-b border-neutral-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center gap-6">
        {/* Logo */}
        <div className="shrink-0">
          {storeSettings.logoUrl ? (
            <img
              src={storeSettings.logoUrl}
              alt={storeSettings.storeName}
              className="h-10 w-auto object-contain cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="text-lg font-black tracking-tight text-white cursor-pointer">
              {storeSettings.storeName}
            </span>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="O que você está procurando?"
              className="w-full bg-neutral-900 text-white placeholder-neutral-500 text-sm pl-12 pr-4 py-3 rounded-full border border-neutral-800 focus:border-amber-500 focus:outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={storeSettings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 flex items-center justify-center border border-neutral-800 transition-colors"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=${storeSettings.whatsappPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-md transition-colors"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};
