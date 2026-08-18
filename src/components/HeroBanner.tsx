import React from 'react';
import { StoreSettings } from '../types';

interface HeroBannerProps {
  storeSettings: StoreSettings;
  onOpenTradeIn?: () => void;
  onSelectCategory?: (catId: string) => void;
  onOpenCartWithItem?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  storeSettings,
}) => {
  const logoSrc = storeSettings.logoUrl || 'https://i.imgur.com/8E8inaQ.png';

  return (
    <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-4">
      <div className="w-full flex items-center justify-center overflow-hidden">
        <img
          src={logoSrc}
          alt={storeSettings.storeName || 'Magnata Cell'}
          className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl h-auto max-h-[320px] sm:max-h-[460px] md:max-h-[560px] object-contain rounded-xl sm:rounded-2xl transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};
