import { Product, StoreSettings, Coupon } from '../types';

export const initialStoreSettings: StoreSettings = {
  storeName: 'Magnata Cell',
  logoUrl: 'https://i.imgur.com/8E8inaQ.png',
  whatsappPhone: '5597984017415',
  whatsappDisplay: '(97) 98401-7415',
  instagramUrl: 'https://www.instagram.com/magnata_cell_rb/',
  instagramHandle: '@magnata_cell_rb',
  pixKey: '97984017415',
  pixName: 'Magnata Cell - Celulares e Assistência',
  address: 'Estrada do Gavião',
  city: 'Carauari - AM, CEP 69500-000, Brasil',
  openingHours: 'Seg a Sáb: 08:30 às 18:30 | Atendimento WhatsApp',
  freeShippingMinimum: 299,
};

export const activeCoupons: Coupon[] = [
  {
    code: 'PIX10',
    type: 'percentage',
    value: 10,
    description: '10% de desconto adicional para pagamentos no Pix',
  },
  {
    code: 'MAGNATA50',
    type: 'fixed',
    value: 50,
    description: 'R$ 50 OFF no primeiro pedido',
  }
];

export const mockProducts: Product[] = [
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    brand: 'Apple',
    category: 'lancamentos',
    condition: 'Novo Lacrado',
    warranty: '1 Ano Garantia Mundial Apple',
    shortDescription: 'O topo de linha supremo da Apple com chip A19 Pro e acabamento ultra refinado.',
    fullDescription: 'O iPhone 17 Pro Max redefine a experiência de smartphones de alta performance com a nova câmera telefoto periscópica, acabamento aeroespacial e bateria de ultra duração.',
    highlightSpecs: ['Chip A19 Pro 3nm', 'Tela OLED 6.9" 120Hz ProMotion', 'Câmera Tripla 48MP', 'Bateria até 33h'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Titânio Preto', hex: '#2c2b2a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Titânio Natural', hex: '#8c867a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Titânio Branco', hex: '#f2f1ed', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '256GB', pricePix: 9890, priceCard: 10989, installmentsMax: 12, inStock: true },
      { storage: '512GB', pricePix: 10990, priceCard: 12210, installmentsMax: 12, inStock: true },
      { storage: '1TB', pricePix: 12490, priceCard: 13877, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isLaunch: true,
    isBestSeller: true,
    freeShipping: true,
    rating: 5.0,
    reviewsCount: 18
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    brand: 'Apple',
    category: 'lancamentos',
    condition: 'Novo Lacrado',
    warranty: '1 Ano Garantia Mundial Apple',
    shortDescription: 'Potência máxima e câmeras profissionais em formato compacto.',
    fullDescription: 'Projetado com estrutura de titânio, chip A19 Pro e o novo botão de captura tátil inteligente.',
    highlightSpecs: ['Chip A19 Pro', 'Tela 6.3" ProMotion', 'Triplo sensor 48MP Pro', 'Wi-Fi 7'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Titânio Natural', hex: '#8c867a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Titânio Preto', hex: '#2c2b2a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 8790, priceCard: 9766, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 9490, priceCard: 10544, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isLaunch: true,
    freeShipping: true,
    rating: 4.9,
    reviewsCount: 14
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    brand: 'Apple',
    category: 'lancamentos',
    condition: 'Novo Lacrado',
    warranty: '1 Ano Garantia Mundial Apple',
    shortDescription: 'Inovação acessível, design premium e o poder do chip A19.',
    fullDescription: 'A nova geração do iPhone com Dynamic Island avançada e cores vibrantes.',
    highlightSpecs: ['Chip A19 Bionic', 'Tela OLED 6.1"', 'Câmera Dupla 48MP', 'Carregamento Rápido USB-C'],
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Meia-Noite', hex: '#1c2024', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Estelar', hex: '#faf7f2', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Azul Celeste', hex: '#9bbcd4', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 6890, priceCard: 7655, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 7490, priceCard: 8322, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isLaunch: true,
    rating: 4.9,
    reviewsCount: 9
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'lancamentos',
    condition: 'Novo Lacrado',
    warranty: '1 Ano Garantia Apple',
    shortDescription: 'Câmera com Controle Tátil, Titânio e Chip A18 Pro com Apple Intelligence.',
    fullDescription: 'O iPhone 16 Pro Max traz estrutura leve em titânio, tela de 6.9 polegadas com bordas ultrafinas e câmera fusion de 48MP.',
    highlightSpecs: ['Chip A18 Pro', 'Tela 6.9" ProMotion 120Hz', 'Botão de Controle da Câmera', 'Zoom Óptico 5x'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Titânio Deserto', hex: '#bfa791', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Titânio Preto', hex: '#2c2b2a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Titânio Natural', hex: '#8c867a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '256GB', pricePix: 8590, priceCard: 9544, installmentsMax: 12, inStock: true },
      { storage: '512GB', pricePix: 9690, priceCard: 10766, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isLaunch: true,
    isBestSeller: true,
    freeShipping: true,
    rating: 5.0,
    reviewsCount: 32
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    category: 'lancamentos',
    condition: 'Novo Lacrado',
    warranty: '1 Ano Garantia Apple',
    shortDescription: 'Desempenho pro em 6.3 polegadas com chip A18 Pro.',
    fullDescription: 'Câmera fusion de 48MP, nova lente ultra-angular de 48MP e gravação 4K Dolby Vision em 120 fps.',
    highlightSpecs: ['Chip A18 Pro', 'Tela 6.3" ProMotion', 'Gravação 4K 120fps', 'Bateria aprimorada'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Titânio Natural', hex: '#8c867a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Titânio Deserto', hex: '#bfa791', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 7490, priceCard: 8322, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 8190, priceCard: 9100, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isLaunch: true,
    freeShipping: true,
    rating: 4.9,
    reviewsCount: 21
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    brand: 'Apple',
    category: 'lancamentos',
    condition: 'Novo Lacrado',
    warranty: '1 Ano Garantia Apple',
    shortDescription: 'Câmeras alinhadas verticalmente, Controle da Câmera e Botão de Ação.',
    fullDescription: 'Com o chip A18 ultra veloz, o novo iPhone 16 permite fotografia macro, fotos espaciais e bateria excelente.',
    highlightSpecs: ['Chip A18', 'Botão de Ação + Botão de Câmera', 'Tela Super Retina XDR 6.1"', 'USB-C'],
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Rosa', hex: '#f0adb9', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Verde-Acizentado', hex: '#bfe1d9', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Preto', hex: '#222222', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 5990, priceCard: 6655, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 6690, priceCard: 7433, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isLaunch: true,
    rating: 4.8,
    reviewsCount: 16
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Impecável',
    batteryHealth: '94% a 98%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Design em titânio, chip A17 Pro e zoom óptico de 5x.',
    fullDescription: 'Aparelho seminovo em estado de novo, 100% original, testado e higienizado com saúde de bateria premium.',
    highlightSpecs: ['Titânio Aeroespacial', 'Chip A17 Pro', 'Zoom Óptico 5x', 'Conector USB-C'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Titânio Natural', hex: '#8c867a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Titânio Azul', hex: '#37475a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '256GB', pricePix: 6290, priceCard: 6988, installmentsMax: 12, inStock: true },
      { storage: '512GB', pricePix: 6990, priceCard: 7766, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 45
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Impecável',
    batteryHealth: '92% a 96%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Titânio leve, Botão de Ação e chip A17 Pro em 6.1".',
    fullDescription: 'O primeiro iPhone com acabamento em titânio e porta USB-C.',
    highlightSpecs: ['Chip A17 Pro', 'Tela 6.1" 120Hz', 'Câmera 48MP', 'Botão de Ação'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Titânio Natural', hex: '#8c867a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Titânio Preto', hex: '#2c2b2a', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 5390, priceCard: 5988, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 5890, priceCard: 6544, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    rating: 4.8,
    reviewsCount: 29
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    brand: 'Apple',
    category: 'iphone-15-14',
    condition: 'Seminovo Excelente',
    batteryHealth: '91% a 97%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Dynamic Island, câmera de 48MP e conector USB-C universal.',
    fullDescription: 'Excelente custo-benefício com design moderno de vidro colorido por infusão e Dynamic Island.',
    highlightSpecs: ['Dynamic Island', 'Câmera Principal 48MP', 'USB-C', 'Chip A16 Bionic'],
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Preto', hex: '#2d2d2d', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Azul', hex: '#d6e2e9', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rosa', hex: '#fed6e3', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 4290, priceCard: 4766, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 4890, priceCard: 5433, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isOffer: true,
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Impecável',
    batteryHealth: '88% a 94%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'O pioneiro com Dynamic Island, tela Always-On e câmera de 48MP.',
    fullDescription: 'Aparelho icônico com aço inoxidável cirúrgico e bateria para o dia inteiro.',
    highlightSpecs: ['Dynamic Island', 'Aço Cirúrgico', 'Chip A16 Bionic', 'Câmera 48MP Pro'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Roxo-Profundo', hex: '#4a3b52', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Preto-Espacial', hex: '#22201e', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Dourado', hex: '#fae7cf', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 4890, priceCard: 5433, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 5390, priceCard: 5988, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 52
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Impecável',
    batteryHealth: '87% a 93%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Câmera Pro de 48MP, Dynamic Island e tela de 120Hz em 6.1".',
    fullDescription: 'Design elegante com bordas em aço inoxidável e excelente conjunto de câmeras.',
    highlightSpecs: ['Dynamic Island', 'Tela Always-On ProMotion', 'Chip A16 Bionic', '48MP Pro'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Roxo-Profundo', hex: '#4a3b52', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Preto-Espacial', hex: '#22201e', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 4290, priceCard: 4766, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 4790, priceCard: 5322, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    rating: 4.8,
    reviewsCount: 30
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    brand: 'Apple',
    category: 'iphone-15-14',
    condition: 'Seminovo Excelente',
    batteryHealth: '89% a 95%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Desempenho fluido com chip A15 Bionic e modo Ação para vídeos.',
    fullDescription: 'Excelente escolha para o dia a dia, com bateria duradoura e fotos nítidas com pouca luz.',
    highlightSpecs: ['Chip A15 Bionic 5-core GPU', 'Modo Cinema 4K', 'Modo Ação', 'Bateria para o dia todo'],
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Meia-Noite', hex: '#1c2024', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Estelar', hex: '#faf7f2', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Roxo', hex: '#e3d9e8', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 3490, priceCard: 3877, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 3990, priceCard: 4433, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isOffer: true,
    rating: 4.8,
    reviewsCount: 41
  },
  {
    id: 'iphone-13-pro-max',
    name: 'iPhone 13 Pro Max',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Excelente',
    batteryHealth: '86% a 92%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Lendária duração de bateria, tela ProMotion 120Hz e modo Macro.',
    fullDescription: 'Um dos maiores sucessos da Apple. Bateria gigantesca e câmeras profissionais com gravação ProRes.',
    highlightSpecs: ['Bateria Ultra Duradoura', 'Tela 6.7" 120Hz ProMotion', 'Modo Macro', 'Chip A15 Bionic'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Azul Sierra', hex: '#9bb5ce', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Grafite', hex: '#41403c', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Dourado', hex: '#f9e5c9', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 3990, priceCard: 4433, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 4490, priceCard: 4988, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 64
  },
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Excelente',
    batteryHealth: '85% a 91%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Tela 120Hz ProMotion e câmeras triplas em corpo compacto de aço.',
    fullDescription: 'Excelente escolha para criadores de conteúdo que buscam tamanho compacto e potência Pro.',
    highlightSpecs: ['Tela 120Hz', 'Modo Cinema', 'Telefoto 3x', 'Aço Cirúrgico'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Azul Sierra', hex: '#9bb5ce', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Grafite', hex: '#41403c', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 3490, priceCard: 3877, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 3890, priceCard: 4322, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    rating: 4.8,
    reviewsCount: 33
  },
  {
    id: 'iphone-13-seminovo',
    name: 'iPhone 13',
    brand: 'Apple',
    category: 'iphone-13-12-11',
    condition: 'Seminovo Impecável',
    batteryHealth: '87% a 95%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'O maior campeão de vendas: excelente autonomia, modo cinema e 128GB de fábrica.',
    fullDescription: 'O iPhone com o melhor custo-benefício do Brasil. Excelente desempenho, ótima câmera e bateria muito resistente.',
    highlightSpecs: ['Chip A15 Bionic', 'Câmeras Diagonais 12MP', 'Modo Cinema', '128GB Base'],
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Meia-Noite', hex: '#1c2024', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Estelar', hex: '#faf7f2', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rosa', hex: '#fae3e4', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Azul', hex: '#437397', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 2790, priceCard: 3100, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 3190, priceCard: 3544, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    isOffer: true,
    isBestSeller: true,
    rating: 5.0,
    reviewsCount: 88
  },
  {
    id: 'iphone-12-pro-max',
    name: 'iPhone 12 Pro Max',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Muito Bom',
    batteryHealth: '84% a 90%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Tela imensa de 6.7", conexão 5G e estabilização de sensor.',
    fullDescription: 'O primeiro iPhone com laterais retas e tela gigante de 6.7 polegadas na era 5G.',
    highlightSpecs: ['Tela OLED 6.7"', 'Conexão 5G Ultra Rápida', 'Sensor Shift OIS', 'Ceramic Shield'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Azul Pacífico', hex: '#2c4353', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Grafite', hex: '#41403c', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 3190, priceCard: 3544, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 3590, priceCard: 3988, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    rating: 4.7,
    reviewsCount: 39
  },
  {
    id: 'iphone-12-pro',
    name: 'iPhone 12 Pro',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Muito Bom',
    batteryHealth: '84% a 89%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Design flat elegante, aço cirúrgico e câmera tripla com scanner LiDAR.',
    fullDescription: 'Sensor LiDAR para retratos noturnos rápidos e acabamento premium.',
    highlightSpecs: ['Scanner LiDAR', 'Aço Cirúrgico', 'Chip A14 Bionic', '5G Integrado'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Azul Pacífico', hex: '#2c4353', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Grafite', hex: '#41403c', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '128GB', pricePix: 2790, priceCard: 3100, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 3090, priceCard: 3433, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    rating: 4.7,
    reviewsCount: 27
  },
  {
    id: 'iphone-12',
    name: 'iPhone 12',
    brand: 'Apple',
    category: 'iphone-13-12-11',
    condition: 'Seminovo Muito Bom',
    batteryHealth: '85% a 92%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Tela OLED Super Retina XDR, laterais retas e conectividade 5G.',
    fullDescription: 'Entrada na era 5G com tela OLED de cores vívidas e design icônico.',
    highlightSpecs: ['Tela OLED Super Retina', 'Conexão 5G', 'MagSafe', 'Chip A14 Bionic'],
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Preto', hex: '#1e2225', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Branco', hex: '#f8f8f6', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Azul', hex: '#023354', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '64GB', pricePix: 2190, priceCard: 2433, installmentsMax: 12, inStock: true },
      { storage: '128GB', pricePix: 2390, priceCard: 2655, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 1,
    isOffer: true,
    rating: 4.8,
    reviewsCount: 55
  },
  {
    id: 'iphone-11-pro-max',
    name: 'iPhone 11 Pro Max',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Muito Bom',
    batteryHealth: '83% a 88%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'A primeira câmera tripla da Apple com modo noturno estelar e tela OLED de 6.5".',
    fullDescription: 'Excelente tela OLED, câmeras triplas versáteis e acabamento fosco elegante.',
    highlightSpecs: ['Tela OLED 6.5"', 'Câmera Tripla 12MP', 'Modo Noite Impecável', 'Chip A13 Bionic'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Verde Meia-Noite', hex: '#4e5851', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Cinza-Espacial', hex: '#4c4b49', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Dourado', hex: '#fae7cf', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '64GB', pricePix: 2390, priceCard: 2655, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 2690, priceCard: 2988, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    rating: 4.7,
    reviewsCount: 42
  },
  {
    id: 'iphone-11-pro',
    name: 'iPhone 11 Pro',
    brand: 'Apple',
    category: 'iphone-pro',
    condition: 'Seminovo Muito Bom',
    batteryHealth: '83% a 88%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'Câmera tripla e tela OLED em tamanho compacto de 5.8 polegadas.',
    fullDescription: 'Pegada anatômica impecável com conjunto triplo de lentes e traseira em vidro fosco.',
    highlightSpecs: ['Tamanho Anatômico 5.8"', 'Tela Super Retina XDR OLED', 'Câmera Tripla', 'Vidro Fosco'],
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Verde Meia-Noite', hex: '#4e5851', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' },
      { name: 'Cinza-Espacial', hex: '#4c4b49', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '64GB', pricePix: 2090, priceCard: 2322, installmentsMax: 12, inStock: true },
      { storage: '256GB', pricePix: 2390, priceCard: 2655, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 0,
    rating: 4.7,
    reviewsCount: 31
  },
  {
    id: 'iphone-11-seminovo',
    name: 'iPhone 11',
    brand: 'Apple',
    category: 'iphone-13-12-11',
    condition: 'Seminovo Muito Bom',
    batteryHealth: '84% a 92%',
    warranty: '90 Dias Garantia Magnata Cell',
    shortDescription: 'A porta de entrada ideal para o ecossistema Apple com câmeras duplas e bateria durável.',
    fullDescription: 'O smartphone mais popular do Brasil. Excelente para redes sociais, gravação de vídeos 4K e jogos.',
    highlightSpecs: ['Chip A13 Bionic', 'Câmera Dupla com Modo Noturno', 'Gravação 4K nas 3 Câmeras', 'Face ID Rápido'],
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
    colors: [
      { name: 'Preto', hex: '#1e2225', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Branco', hex: '#f8f8f6', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Vermelho (PRODUCT)RED', hex: '#d92b3a', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' },
      { name: 'Roxo', hex: '#d1cdde', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80' }
    ],
    variants: [
      { storage: '64GB', pricePix: 1690, priceCard: 1877, installmentsMax: 12, inStock: true },
      { storage: '128GB', pricePix: 1940, priceCard: 2155, installmentsMax: 12, inStock: true }
    ],
    defaultVariantIndex: 1,
    isOffer: true,
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 112
  }
];
