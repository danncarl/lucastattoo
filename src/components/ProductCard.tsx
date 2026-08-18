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
      className="group relative bg-white border border-neutral-200 hover:border-amber-500 rounded-3xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden"
    >
      {/* Top Badges & Favorite Button */}
      <div className="flex items-start justify-between gap-2 z-10 mb-2">
        <span className="text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
          {product.warranty}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product);
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-neutral-100 text-neutral-400 hover:text-red-500'
          }`}
          title="Favoritar"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Product Image Showcase */}
      <div className="relative aspect-square w-full my-2 flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-50 p-2 sm:p-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Title & Short Details */}
      <div className="space-y-0.5 mt-2">
        <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-amber-600 transition-colors">
          <span className="font-semibold text-neutral-500">{product.brand}</span> - {product.name}
        </h3>
        <p className="text-[11px] text-neutral-500 font-medium">
          {product.colors.map(c => c.name).join(' • ')} • {product.category}
        </p>
      </div>

      {/* Price Block */}
      <div className="mt-3 space-y-0.5">
        <div className="text-xl sm:text-2xl font-black text-neutral-950">
          {formatCurrency(defaultVariant.pricePix)}
        </div>
        <p className="text-[11px] text-neutral-600 font-semibold">
          à vista no Pix <span className="text-amber-600">(10% de desconto)</span>
        </p>
        <p className="text-[11px] text-neutral-500 font-medium">
          ou {formatInstallments(defaultVariant.priceCard, 10)} <span className="font-bold text-neutral-900">sem juros</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4">
        <button
          onClick={handleWhatsAppBuy}
          className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-3 px-4 rounded-full text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-amber-500/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Eu quero</span>
        </button>
      </div>
    </div>
  );
};
