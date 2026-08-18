export type ProductCategory = 
  | 'todos' 
  | 'lancamentos' 
  | 'iphone-pro' 
  | 'iphone-novos' 
  | 'iphone-seminovos' 
  | 'iphone-15-14' 
  | 'iphone-13-12-11' 
  | 'ofertas' 
  | 'xiaomi' 
  | 'samsung' 
  | 'acessorios' 
  | 'smartwatch';

export interface ProductVariant {
  storage: string;
  pricePix: number;
  priceCard: number;
  installmentsMax?: number;
  inStock: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  productName: string;
  verifiedPurchase: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  condition: 'Novo Lacrado' | 'Seminovo Impecável' | 'Seminovo Excelente' | 'Seminovo Muito Bom';
  batteryHealth?: string;
  warranty: string;
  shortDescription: string;
  fullDescription: string;
  highlightSpecs: string[];
  images: string[];
  colors: ProductColor[];
  variants: ProductVariant[];
  defaultVariantIndex: number;
  isLaunch?: boolean;
  isOffer?: boolean;
  isBestSeller?: boolean;
  freeShipping?: boolean;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedStorage: string;
  selectedColor: ProductColor;
  condition: string;
  pricePix: number;
  priceCard: number;
  quantity: number;
}

export interface StoreSettings {
  storeName: string;
  logoUrl: string;
  whatsappPhone: string;
  whatsappDisplay: string;
  instagramUrl: string;
  instagramHandle: string;
  pixKey: string;
  pixName: string;
  address: string;
  city: string;
  openingHours: string;
  freeShippingMinimum: number;
}

export interface Coupon {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  description: string;
}
