import React from 'react';
import { 
  Truck, 
  Smartphone, 
  Lock, 
  Ban, 
  Cloud, 
  MapPin, 
  Clock, 
  Phone, 
  ShieldCheck, 
  Instagram, 
  MessageCircle 
} from 'lucide-react';
import { StoreSettings } from '../types';

interface FooterProps {
  storeSettings: StoreSettings;
}

export const Footer: React.FC<FooterProps> = ({ storeSettings }) => {
  return (
    <footer className="bg-black text-neutral-400 pt-16 pb-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* About */}
        <div className="space-y-4">
          <img src={storeSettings.logoUrl} alt={storeSettings.storeName} className="h-12 w-auto" />
          <p className="text-sm">Sua loja especializada em iPhones lacrados, seminovos selecionados e assistência técnica com garantia estendida.</p>
          <div className="flex gap-2">
            <a href={`https://api.whatsapp.com/send?phone=${storeSettings.whatsappPhone}`} className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={storeSettings.instagramUrl} className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold">
              <Instagram className="w-4 h-4" /> {storeSettings.instagramHandle}
            </a>
          </div>
        </div>

        {/* Services Info */}
        <div className="space-y-4">
          <h3 className="text-amber-500 font-bold uppercase text-sm tracking-widest">Assistência Técnica 📱🪛📈</h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2"><Truck className="w-4 h-4 text-amber-500" /> Serviço Leva e Trás (Buscamos na sua casa 🏠 ou trabalho 🏬, entregamos no mesmo dia)</li>
            <li className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-amber-500" /> Apple / Samsung / Xiaomi / Motorola / Lg</li>
            <li className="flex items-center gap-2"><Ban className="w-4 h-4 text-amber-500" /> Vendas de Celulares Seminovos</li>
            <li className="flex items-center gap-2"><Lock className="w-4 h-4 text-amber-500" /> Remoção de Conta Google 📵</li>
            <li className="flex items-center gap-2"><Ban className="w-4 h-4 text-amber-500" /> Remoção de anúncios</li>
            <li className="flex items-center gap-2"><Cloud className="w-4 h-4 text-amber-500" /> Criação de iCloud</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h3 className="text-amber-500 font-bold uppercase text-sm tracking-widest">Vendas de Iphones</h3>
          <ul className="space-y-2 text-xs">
            <li>iPhone 17 Pro Max / 17 Pro</li>
            <li>iPhone 16 Pro Max / 16 Pro</li>
            <li>iPhone 15 Pro Max / 15</li>
            <li>iPhone 14 / 13 / 12 / 11</li>
            <li>Acessórios MagSafe & Carregadores</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-amber-500 font-bold uppercase text-sm tracking-widest">Atendimento & Loja</h3>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> {storeSettings.address}, {storeSettings.city}</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> {storeSettings.openingHours}</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> WhatsApp: {storeSettings.whatsappDisplay}</li>
            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Até 1 Ano de Garantia por Escrito</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-neutral-900 text-[10px] flex justify-between">
        <p>© 2026 {storeSettings.storeName}. Todos os direitos reservados.</p>
        <p className="text-amber-500">10x Sem Juros • 10% OFF no Pix</p>
      </div>
    </footer>
  );
};
