import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { RepairSimulator } from './components/RepairSimulator';
import { WorkVideo } from './components/WorkVideo';
import { Footer } from './components/Footer';
import { initialStoreSettings, mockProducts } from './data/products';
import { Product } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  const toggleFavorite = (product: Product) => {
    setFavorites(prev => 
      prev.find(p => p.id === product.id) 
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );
  };

  const addToCart = (product: Product, storage: string, colorIdx: number) => {
    // Basic cart logic
    setCart(prev => [...prev, { product, storage, colorIdx }]);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header
        storeSettings={initialStoreSettings}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <HeroBanner storeSettings={initialStoreSettings} />
        
        <h2 className="text-2xl font-black mb-6 mt-10">Produtos em Destaque</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {mockProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              storeSettings={initialStoreSettings}
              isFavorite={!!favorites.find(f => f.id === product.id)}
              onToggleFavorite={toggleFavorite}
              onOpenProductModal={(p) => console.log('Open details for', p)}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        <RepairSimulator storeSettings={initialStoreSettings} />
        <WorkVideo storeSettings={initialStoreSettings} />
      </main>
      <Footer storeSettings={initialStoreSettings} />
    </div>
  );
}
