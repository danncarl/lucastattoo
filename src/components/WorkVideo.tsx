import React from 'react';
import { Microscope, MessageCircle } from 'lucide-react';
import { StoreSettings } from '../types';

interface WorkVideoProps {
  storeSettings: StoreSettings;
}

export const WorkVideo: React.FC<WorkVideoProps> = ({ storeSettings }) => {
  return (
    <section className="py-16 bg-neutral-900 rounded-3xl my-12 border border-neutral-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2">
              <Microscope className="w-3 h-3" />
              Laboratório Especializado
            </div>
            <h2 className="text-2xl font-black text-white">Veja Nosso Trabalho em Ação</h2>
            <p className="text-neutral-400 text-sm">Cuidado cirúrgico, maquinário de precisão e garantia em cada detalhe do reparo.</p>
          </div>
          <a
            href={`https://api.whatsapp.com/send?phone=${storeSettings.whatsappPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2.5 px-4 rounded-full text-sm transition-all border border-neutral-700"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            Agendar Avaliação
          </a>
        </div>

        {/* Video */}
        <div className="rounded-3xl overflow-hidden border border-neutral-800 bg-black aspect-[9/16] md:aspect-video">
          <video
            src="https://i.imgur.com/r9deJOD.mp4"
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
