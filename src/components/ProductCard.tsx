import React from 'react';
import { 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  ShoppingBag, 
  ShieldCheck, 
  Battery 
} from 'lucide-react';
import { Product, StoreSettings } from '../types';
import { formatCurrency, formatInstallments } from '../lib/formatters';

interface ProductCardProps {
  product: Product;
  storeSettings: StoreSettings;
  isFavorite: boolean;
  onToggleFavorite: (product: Product) => void;
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (product: Product, storage: string, colorIdx: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  storeSettings,
  isFavorite,
  onToggleFavorite,
  onOpenProductModal,
  onAddToCart,
}) => {
  const defaultVariant = product.variants[product.defaultVariantIndex] || product.variants[0];
  const defaultColor = product.colors[0];

  const handleWhatsAppBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = `🛍️ *PEDIDO VIA SITE - MAGNATA CELL*\n\nOlá! Tenho interesse no aparelho:\n📱 *${product.name}*\n📦 Capacidade: *${defaultVariant.storage}*\n🎨 Cor: *${defaultColor.name}*\n🏷️ Condição: *${product.condition}*\n💰 Valor no Pix: *${formatCurrency(defaultVariant.pricePix)}*\n💳 Cartão até 12x: *${formatInstallments(defaultVariant.priceCard, 12)}*\n\nEstá disponível a pronta entrega?`;
    const url = `https://api.whatsapp.com/send?phone=${storeSettings.whatsappPhone}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={() => onOpenProductModal(product)}
      className="group relative bg-neutral-900/90 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 rounded-2xl sm:rounded-3xl p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer overflow-hidden"
    >
      {/* Top Badges & Favorite Button */}
      <div className="flex items-start justify-between gap-2 z-10">
        <div className="flex flex-wrap gap-1.5">
          {product.isLaunch && (
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500 text-black shadow-md">
              <Sparkles className="w-3 h-3" />
              Lançamento
            </span>
          )}
          {product.isOffer && (
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-red-600 text-white shadow-md">
              10% OFF Pix
            </span>
          )}
          <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
            {product.condition}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product);
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorite 
              ? 'bg-red-500 text-white shadow-md shadow-red-500/30' 
              : 'bg-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-700'
          }`}
          title="Favoritar"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Product Image Showcase */}
      <div className="relative aspect-square w-full my-3 flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950/60 p-2 sm:p-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {product.batteryHealth && (
          <div className="absolute bottom-2 left-2 inline-flex items-center gap-1 text-[10px] font-semibold bg-neutral-900/90 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full backdrop-blur-xs">
            <Battery className="w-3 h-3 text-emerald-400" />
            <span>Saúde {product.batteryHealth}</span>
          </div>
        )}
      </div>

      {/* Color Dots */}
      <div className="flex items-center gap-1.5 mb-2">
        {product.colors.map((c, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full border border-neutral-700 shadow-xs"
            style={{ backgroundColor: c.hex }}
            title={c.name}
          />
        ))}
        <span className="text-[10px] text-neutral-400 ml-1">
          {product.variants.map(v => v.storage).join(' • ')}
        </span>
      </div>

      {/* Title & Short Details */}
      <div className="space-y-1">
        <h3 className="font-black text-sm sm:text-base text-white group-hover:text-amber-400 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-[11px] text-neutral-400 line-clamp-1">
          {product.shortDescription}
        </p>
      </div>

      {/* Price Block */}
      <div className="mt-3 pt-3 border-t border-neutral-800/80 space-y-1">
        <div className="flex items-baseline gap-1.5">
          <span className="text-lg sm:text-xl font-black text-amber-400">
            {formatCurrency(defaultVariant.pricePix)}
          </span>
          <span className="text-[11px] font-bold text-neutral-400 uppercase">no Pix</span>
        </div>
        <p className="text-[11px] text-neutral-400">
          ou {formatInstallments(defaultVariant.priceCard, 12)}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product, defaultVariant.storage, 0);
          }}
          className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 sm:py-2.5 px-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Carrinho</span>
        </button>

        <button
          onClick={handleWhatsAppBuy}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 sm:py-2.5 px-2 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 transition-all active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
};
