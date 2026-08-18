import React, { useState } from 'react';
import { MessageCircle, Wrench, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { StoreSettings } from '../types';

interface RepairSimulatorProps {
  storeSettings: StoreSettings;
}

export const RepairSimulator: React.FC<RepairSimulatorProps> = ({ storeSettings }) => {
  const [model, setModel] = useState('');
  const [service, setService] = useState('');
  const [obs, setObs] = useState('');

  const handleWhatsApp = () => {
    const message = `🛠️ *SOLICITAÇÃO DE ORÇAMENTO - MAGNATA CELL*\n\nModelo: ${model}\nServiço: ${service}\nObservações: ${obs || 'Nenhuma'}`;
    const url = `https://api.whatsapp.com/send?phone=${storeSettings.whatsappPhone}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-neutral-950 text-white rounded-3xl my-12 border border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          <Wrench className="w-4 h-4" />
          Assistência Técnica Especializada
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black mb-4">Simulador de Orçamento Instantâneo</h2>
        <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Selecione o modelo do seu aparelho e o serviço desejado para falar diretamente com nossos técnicos via WhatsApp.</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: CheckCircle, text: 'Peças Originais & Premium' },
            { icon: Clock, text: 'Reparo Rápido' },
            { icon: ShieldCheck, text: 'Garantia por Escrito' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full text-sm">
              <item.icon className="w-4 h-4 text-amber-500" />
              {item.text}
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-3xl text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-neutral-300 mb-2">Qual o seu aparelho?</label>
              <select className="w-full bg-black border border-neutral-700 rounded-xl p-3 text-white focus:border-amber-500 focus:outline-none" value={model} onChange={e => setModel(e.target.value)}>
                <option value="">Selecione o modelo</option>
                <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                <option value="iPhone 14">iPhone 14</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-neutral-300 mb-2">Qual o problema / serviço?</label>
              <select className="w-full bg-black border border-neutral-700 rounded-xl p-3 text-white focus:border-amber-500 focus:outline-none" value={service} onChange={e => setService(e.target.value)}>
                <option value="">Selecione o serviço</option>
                <option value="Troca de Tela">Troca de Tela</option>
                <option value="Troca de Bateria">Troca de Bateria</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-bold text-neutral-300 mb-2">Observações Adicionais (Opcional)</label>
            <textarea 
              className="w-full bg-black border border-neutral-700 rounded-xl p-3 text-white focus:border-amber-500 focus:outline-none" 
              rows={3} 
              placeholder="Ex: vidro quebrou mas o touch ainda funciona, caiu na água, etc."
              value={obs}
              onChange={e => setObs(e.target.value)}
            />
          </div>

          <button 
            onClick={handleWhatsApp}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-black py-4 rounded-full flex items-center justify-center gap-2 text-lg transition-all active:scale-95 shadow-lg shadow-amber-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento Grátis pelo WhatsApp
          </button>
          <p className="text-center text-neutral-500 text-xs mt-4">Resposta rápida em poucos minutos • Atendimento sem compromisso</p>
        </div>
      </div>
    </section>
  );
};
