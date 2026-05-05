/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  X, 
  User,
  Star,
  Clock,
  AlertTriangle
} from 'lucide-react';

// Constants
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B5597984298383&text&type=phone_number&app_absent=0&utm_source=ig";
const SUPPORT_WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B5597984242329&text&type=phone_number&app_absent=0&utm_source=ig";
const INSTAGRAM_URL = "https://www.instagram.com/lucastatuador_ofc/";
const MAPS_URL = "https://www.google.com/maps/place/Lucas+tatuador/@-7.0503521,-71.6873997,46m/data=!3m1!1e3!4m6!3m5!1s0x9190c70012c47cf1:0xb046dc27cfe55776!8m2!3d-7.0503291!4d-71.6874459!16s%2Fg%2F11zhvd6466?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";

const EXPERT_PHOTOS = [
  "https://i.imgur.com/y8SrBJi.png",
  "https://i.imgur.com/T2zxLEt.png",
  "https://i.imgur.com/shyFTNl.png"
];

const GALLERY_IMAGES = [
  "https://i.imgur.com/pkBQmAq.png",
  "https://i.imgur.com/VWaQYbY.png",
  "https://i.imgur.com/zPxUnAw.png",
  "https://i.imgur.com/bDQxCxQ.png",
  "https://i.imgur.com/PMwHzWX.png",
  "https://i.imgur.com/D35Yn1Q.png",
  "https://i.imgur.com/b4JdeGn.png",
  "https://i.imgur.com/YnHB9PG.png",
  "https://i.imgur.com/adWgQhP.png",
  "https://i.imgur.com/DJveSDQ.png",
  "https://i.imgur.com/bToidPV.png",
  "https://i.imgur.com/MJ1ew0J.png",
  "https://i.imgur.com/FZgEoTY.png",
  "https://i.imgur.com/SEM5KKG.png",
  "https://i.imgur.com/EvOUGYG.png",
  "https://i.imgur.com/VKllULV.png"
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMaintenanceMode] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-white relative">
      {/* Maintenance Overlay */}
      <AnimatePresence>
        {isMaintenanceMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center p-6"
          >
            <div className="max-w-md w-full text-center space-y-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-orange-600/10 rounded-full flex items-center justify-center border border-orange-500/20">
                  <AlertTriangle className="text-orange-500" size={40} />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-3xl font-bold tracking-tight">
                  Ops! Este site está <br />
                  <span className="text-orange-500">temporariamente indisponível.</span>
                </h1>
                <p className="text-gray-400 leading-relaxed font-light">
                  Estamos realizando ajustes. Caso precise de atendimento, entre em contato com o suporte.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <a
                  href={SUPPORT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-orange-600 hover:bg-orange-500 text-white font-bold py-5 px-10 rounded-full items-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-900/20"
                >
                  <MessageCircle size={24} />
                  Falar com o suporte
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (Hidden/Locked if maintenance is on, but accessible if off) */}
      <div className={isMaintenanceMode ? "h-screen overflow-hidden opacity-0 pointer-events-none" : ""}>
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado ampliado" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pt-20">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/hBBbSZU.png" 
            alt="Tatuador Lucas" 
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-xl px-6 pb-16 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Eu sou Lucas, <br />
              <span className="text-orange-500">tatuador em Ipixuna</span>
            </h1>
            <p className="text-lg text-gray-300 font-light leading-relaxed max-w-md mx-auto">
              Especialista em projetos exclusivos e alto nível de detalhamento. Transformo sua ideia em uma arte única na pele.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center space-y-4"
          >
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-5 px-8 rounded-full flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-900/20"
            >
              <MessageCircle size={24} />
              Agende sua tatuagem pelo WhatsApp
            </a>
            <p className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Resposta rápida • Sem compromisso
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://i.imgur.com/shyFTNl.png" 
                alt="Lucas no estúdio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-600 p-6 rounded-2xl hidden md:block">
              <Star className="text-white" size={32} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-orange-500">Minha Arte, Seu Legado</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Acredito que uma tatuagem é muito mais que tinta na pele; é uma expressão da sua identidade e história.
              </p>
              <p>
                Meu foco é a exclusividade. Não faço apenas desenhos, crio projetos autorais pensados na anatomia e no significado que você deseja carregar.
              </p>
            </div>
            
            <ul className="space-y-4 pt-4">
              {[
                "Projetos 100% personalizados",
                "Materiais de altíssima qualidade",
                "Ambiente seguro e higienizado",
                "Foco total no detalhamento"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="text-orange-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">Resultados Reais</h2>
            <p className="text-gray-400 max-w-md mx-auto">Clique nas imagens para ver os detalhes de cada projeto exclusivo.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Trabalho ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Search className="text-white" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-3xl font-bold text-center">Por que confiar em mim?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-orange-500" size={32} />,
                title: "Avaliação Honesta",
                desc: "Analiso sua ideia e pele para garantir que o resultado final seja tecnicamente perfeito e duradouro."
              },
              {
                icon: <User className="text-orange-500" size={32} />,
                title: "Atendimento Comigo",
                desc: "Do primeiro contato ao pós-tattoo, você fala diretamente comigo. Sem intermediários."
              },
              {
                icon: <Clock className="text-orange-500" size={32} />,
                title: "Clareza Total",
                desc: "Explico cada etapa do processo, cuidados e cicatrização. Transparência é minha base."
              },
              {
                icon: <Star className="text-orange-500" size={32} />,
                title: "Projetos Únicos",
                desc: "Nada de cópias da internet. Cada arte é desenhada exclusivamente para você."
              },
              {
                icon: <CheckCircle2 className="text-orange-500" size={32} />,
                title: "Biossegurança",
                desc: "Rigoroso controle de higiene e materiais descartáveis de primeira linha."
              },
              {
                icon: <MapPin className="text-orange-500" size={32} />,
                title: "Localização Fácil",
                desc: "Estúdio bem localizado em Ipixuna, com conforto e privacidade para sua sessão."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-[#151515] rounded-2xl border border-white/5 space-y-4 hover:border-orange-500/30 transition-colors"
              >
                {card.icon}
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-orange-600 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Dúvidas sobre sua primeira tattoo ou um projeto grande?</h2>
          <p className="text-orange-100">Não deixe o medo ou a incerteza te impedirem de ter uma arte incrível.</p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-black text-white font-bold py-5 px-10 rounded-full items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl"
          >
            <MessageCircle size={24} />
            Falar com Lucas agora
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Como funciona a primeira consulta</h2>
            <p className="text-gray-400 italic">Gratuita e sem compromisso</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block z-0" />
            
            {[
              {
                step: "01",
                title: "WhatsApp",
                desc: "Você entra em contato e me conta brevemente sua ideia."
              },
              {
                step: "02",
                title: "Agendamento",
                desc: "Marcamos um horário para você vir ao estúdio ou conversarmos por vídeo."
              },
              {
                step: "03",
                title: "Avaliação",
                desc: "Definimos tamanho, local, estilo e orçamento final."
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 bg-[#0a0a0a] flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-900/40">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Expert + Bastidores) */}
      <section className="py-24 px-6 bg-[#0f0f0f] overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center">Bastidores & Atendimento</h2>
          
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
            {[
              { url: EXPERT_PHOTOS[0], label: "Atendimento Personalizado" },
              { url: EXPERT_PHOTOS[1], label: "Foco nos Detalhes" },
              { url: EXPERT_PHOTOS[2], label: "Ambiente Profissional" },
              { url: "https://i.imgur.com/hBBbSZU.png", label: "Arte em Processo" }
            ].map((item, i) => (
              <div key={i} className="flex-none w-72 snap-center space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-xl">
                  <img 
                    src={item.url} 
                    alt={item.label} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-center text-sm text-gray-400 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full z-0" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Sua próxima tatuagem <br />
            <span className="text-orange-500">começa aqui.</span>
          </h2>
          <p className="text-xl text-gray-300">
            Garanta seu horário para uma avaliação gratuita e transforme seu desejo em uma obra de arte exclusiva.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md bg-orange-600 hover:bg-orange-500 text-white font-bold py-6 px-10 rounded-full flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-900/40"
            >
              <MessageCircle size={28} />
              Quero agendar minha consulta
            </a>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-500" />
                <span className="text-xs uppercase tracking-widest">100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-500" />
                <span className="text-xs uppercase tracking-widest">Sem Compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-16 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl font-bold">Tatuador Lucas</h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Artista Tatuador | Projetos Exclusivos <br />
              Alto Nível de Detalhamento
            </p>
            <a 
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm transition-colors"
            >
              <MapPin size={16} />
              Ipixuna, Amazonas
            </a>
          </div>

          <div className="flex gap-6">
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-gray-600 uppercase tracking-widest">
              © {new Date().getFullYear()} Lucas Tatuador. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-gray-700">
              Desenvolvido com foco em alta conversão.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
