import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, Layout, Smartphone, CreditCard, Monitor, Box, Layers, Zap, ShieldCheck } from "lucide-react";
import LogoLight from "./components/svg/LogoLight";
import LogoLightComSubtitulo from "./components/svg/LogoLightComSubtitulo";
import LogoDark from "./components/svg/LogoDark";
import FaviconDark from "./components/svg/FaviconDark";
import FaviconLight from "./components/svg/FaviconLight";

const Section = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Label = ({ children }: { children: ReactNode }) => (
  <span className="text-[10px] uppercase tracking-[0.2em] text-silex-slate/50 font-medium mb-4 block">
    {children}
  </span>
);

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
  };

  return (
    <div className="min-h-screen bg-silex-offwhite selection:bg-silex-orange selection:text-white">


      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-silex-slate-deep">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-silex-orange/20 blur-[160px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" 
          />
          
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <Label><span className="text-silex-orange font-semibold">IDENTIDADE VISUAL 2026</span></Label>
          <div className="mb-12 max-w-4xl">
            <LogoLightComSubtitulo className="w-full text-white" />
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <p className="text-white/50 max-w-sm text-xl font-light leading-relaxed">
              Onde a solidez encontra a tecnologia, nasce um novo padrão de construção.
            </p>
            <div className="h-px w-24 bg-white/10 hidden md:block" />
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-silex-orange hover:border-silex-orange transition-all cursor-pointer">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-4 text-white/30 text-[10px] uppercase tracking-[0.3em]"
        >
          <span>Scroll para explorar</span>
          <div className="w-12 h-[1px] bg-white/20" />
        </motion.div>
      </section>

      {/* Manifesto Section */}
      <Section id="manifesto" className="border-b border-silex-slate/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Label>01 — Manifesto Visual</Label>
            <h2 className="text-4xl font-light tracking-tight text-balance leading-tight">
              Luxo de Desempenho: <br />
              <span className="font-medium">A inteligência que sustenta a estrutura.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-lg font-light leading-relaxed text-silex-slate/80">
            <motion.p {...fadeIn}>
              A marca SILEX foi projetada para ocupar um vazio estético no mercado de alto padrão brasileiro: o <strong>Luxo de Desempenho</strong>. Enquanto o mercado se concentra na estética superficial — a "casca" —, a SILEX se posiciona como a inteligência que sustenta a estrutura.
            </motion.p>
            <motion.p {...fadeIn}>
              O nome remete à rocha sílex — a origem da primeira faísca humana. A identidade visual traduz essa transição: da solidez da matéria bruta à velocidade da tecnologia digital. Uma construtora que não apenas ergue paredes, mas entrega sistemas.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* Typography Section */}
      <Section id="sistema" className="bg-white !pb-12">
        <Label>02 — Arquitetura Tipográfica</Label>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-5">
            <div className="p-12 bg-silex-offwhite rounded-3xl border border-silex-slate/5">
              <span className="font-display text-7xl block mb-4">Aa</span>
              <h3 className="font-display text-2xl mb-4">Zen Dots</h3>
              <p className="text-sm text-silex-slate/60 leading-relaxed">
                A Zen Dots não é uma fonte decorativa — é uma fonte de obra. Cada letra parece construída, não desenhada. O ritmo dos cortes internos comunica precisão, planejamento e montagem milimétrica. A robustez do desenho transmite a autoridade de uma empresa que domina grandes projetos, enquanto a regularidade geométrica aponta para o universo tech — BIM, ERPs, sistemas integrados.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="border-b border-silex-slate/10 pb-6">
              <span className="text-xs text-silex-slate/40 block mb-2">Display / Headline</span>
              <p className="font-display text-4xl uppercase tracking-tight">Construindo o Futuro</p>
            </div>
            <div className="border-b border-silex-slate/10 pb-6">
              <span className="text-xs text-silex-slate/40 block mb-2">System / Body</span>
              <p className="font-sans text-2xl font-light">Inter — A clareza da informação técnica.</p>
            </div>
            <p className="text-sm text-silex-slate/60 italic">
              "É uma tipografia que já posiciona antes mesmo de qualquer leitura."
            </p>
          </div>
        </div>

        {/* Detailed Typography Hierarchy */}
        <div className="mt-24 pt-16 border-t border-silex-slate/10 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Display Hierarchy */}
          <div className="space-y-6">
            <h4 className="text-xs text-silex-slate/40 uppercase tracking-[0.2em] mb-8 font-semibold">Zen Dots — Display</h4>
            
            <div className="border border-silex-slate/10 rounded-2xl p-6 hover:bg-silex-slate/5 transition-colors">
              <div className="flex items-baseline justify-between mb-3 border-b border-silex-slate/5 pb-3">
                <span className="font-display text-5xl text-silex-slate uppercase">Hero</span>
                <span className="text-xs text-silex-slate/40">56px</span>
              </div>
              <p className="text-xs text-silex-slate/60">Headline principal do site, seção hero. Máx. 4 palavras.</p>
            </div>

            <div className="border border-silex-slate/10 rounded-2xl p-6 hover:bg-silex-slate/5 transition-colors">
              <div className="flex items-baseline justify-between mb-3 border-b border-silex-slate/5 pb-3">
                <span className="font-display text-4xl text-silex-slate">47 obras</span>
                <span className="text-xs text-silex-slate/40">36px</span>
              </div>
              <p className="text-xs text-silex-slate/60">Números de destaque, métricas, stats. Impacto visual direto.</p>
            </div>

            <div className="border border-silex-slate/10 rounded-2xl p-6 hover:bg-silex-slate/5 transition-colors">
              <div className="flex items-baseline justify-between mb-3 border-b border-silex-slate/5 pb-3">
                <span className="font-display text-2xl text-silex-slate">Diferenciais</span>
                <span className="text-xs text-silex-slate/40">22px</span>
              </div>
              <p className="text-xs text-silex-slate/60">Títulos de seção curtos. Máx. 3 palavras.</p>
            </div>
          </div>

          {/* System Hierarchy */}
          <div className="space-y-6">
            <h4 className="text-xs text-silex-slate/40 uppercase tracking-[0.2em] mb-8 font-semibold">Inter — Sistema</h4>

            <div className="border border-silex-slate/10 rounded-2xl p-6 hover:bg-silex-slate/5 transition-colors">
              <div className="flex items-baseline justify-between mb-3 border-b border-silex-slate/5 pb-3">
                <span className="font-sans font-semibold text-3xl text-silex-slate">Título de página</span>
                <span className="text-xs text-silex-slate/40 ml-4 shrink-0">32px · SemiBold</span>
              </div>
              <p className="text-xs text-silex-slate/60">H1 interno — sobre a empresa, projetos, contato.</p>
            </div>

            <div className="border border-silex-slate/10 rounded-2xl p-6 hover:bg-silex-slate/5 transition-colors">
              <div className="flex items-baseline justify-between mb-3 border-b border-silex-slate/5 pb-3">
                <span className="font-sans font-medium text-xl text-silex-slate">Subtítulo de seção</span>
                <span className="text-xs text-silex-slate/40 ml-4 shrink-0">22px · Medium</span>
              </div>
              <p className="text-xs text-silex-slate/60">H2 — introduz blocos de conteúdo dentro de páginas.</p>
            </div>

            <div className="border border-silex-slate/10 rounded-2xl p-6 hover:bg-silex-slate/5 transition-colors">
              <div className="flex items-baseline justify-between mb-3 border-b border-silex-slate/5 pb-3">
                <span className="font-sans font-medium text-base text-silex-slate">Label / destaque inline</span>
                <span className="text-xs text-silex-slate/40 ml-4 shrink-0">16px · Medium</span>
              </div>
              <p className="text-xs text-silex-slate/60">Nomes de projeto, categorias, botões, navegação.</p>
            </div>

            <div className="border border-silex-slate/10 rounded-2xl p-6 hover:bg-silex-slate/5 transition-colors">
              <div className="flex items-start justify-between mb-3 border-b border-silex-slate/5 pb-3">
                <span className="font-sans font-light text-base text-silex-slate leading-relaxed">A Silex entrega casas prontas para o futuro — com sistemas elétricos.</span>
                <span className="text-xs text-silex-slate/40 ml-4 shrink-0">16px · Light</span>
              </div>
              <p className="text-xs text-silex-slate/60">Corpo de texto — parágrafos, descrições, visão geral.</p>
            </div>

            <div className="border border-silex-slate/10 rounded-2xl p-6 hover:bg-silex-slate/5 transition-colors">
              <div className="flex items-baseline justify-between mb-3 border-b border-silex-slate/5 pb-3">
                <span className="font-sans font-light text-sm text-silex-slate/80">Jardins de Ibiza · Alto padrão · Fortaleza, CE</span>
                <span className="text-xs text-silex-slate/40 ml-4 shrink-0">13px · Light</span>
              </div>
              <p className="text-xs text-silex-slate/60">Caption — metadados de projeto, localização, datas.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Logo Versions Section */}
      <Section id="logotipo" className="bg-white !pt-12">
        <Label>03 — Versões do Logotipo</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col space-y-6">
            <div className="aspect-[3/2] bg-silex-slate-deep rounded-[40px] flex items-center justify-center p-12 group overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <LogoLight className="w-full max-w-[320px] relative z-10 transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="flex justify-between items-center px-6">
              <span className="text-[10px] text-silex-slate/40 uppercase tracking-[0.2em] font-semibold">Aplicação Principal (Dark)</span>
              <div className="flex gap-3">
                <div className="w-4 h-4 rounded-full bg-silex-slate-deep shadow-inner" />
                <div className="w-4 h-4 rounded-full bg-silex-orange shadow-inner" />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="aspect-[3/2] bg-silex-offwhite rounded-[40px] border border-silex-slate/10 flex items-center justify-center p-12 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-silex-slate/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <LogoDark className="w-full max-w-[320px] relative z-10 transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="flex justify-between items-center px-6">
              <span className="text-[10px] text-silex-slate/40 uppercase tracking-[0.2em] font-semibold">Aplicação Secundária (Light)</span>
              <div className="flex gap-3">
                <div className="w-4 h-4 rounded-full bg-white border border-silex-slate/10 shadow-sm" />
                <div className="w-4 h-4 rounded-full bg-silex-orange shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Symbol Section */}
      <Section className="bg-silex-slate text-white overflow-hidden relative">
        <div className="absolute right-[-5%] top-[-10%] opacity-[0.03] pointer-events-none">
          <span className="font-display text-[80vw] leading-none select-none">X</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-6">
            <Label><span className="text-white/40">04 — O Símbolo</span></Label>
            <h2 className="text-4xl md:text-6xl font-display mb-12 leading-[1.1] tracking-tighter">
              UMA EDIFICAÇÃO <br />
              VISTA EM <span className="text-silex-orange">CORTE</span>
            </h2>
            <div className="space-y-8 text-white/60 font-light text-lg leading-relaxed">
              <p>
                O diferencial mais poderoso desta marca está no X — e no que ele esconde. O traço laranja desce em diagonal e quebra em ângulo reto no ponto central da letra. Esse movimento cria a sensação de uma viga em perspectiva isométrica — como se você estivesse vendo o corte transversal de uma estrutura metálica ou de concreto.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                <div className="space-y-2">
                  <Box className="text-silex-orange mb-4" size={24} />
                  <h4 className="font-medium text-white">Perspectiva</h4>
                  <p className="text-sm">Representação técnica de estruturas executivas.</p>
                </div>
                <div className="space-y-2">
                  <Layers className="text-silex-orange mb-4" size={24} />
                  <h4 className="font-medium text-white">Profundidade</h4>
                  <p className="text-sm">Dois planos visuais que criam volume real.</p>
                </div>
              </div>
              <p className="text-white font-medium bg-white/5 p-6 rounded-2xl border border-white/10">
                A leitura correta do símbolo, portanto, é esta: o X não é uma letra — é uma edificação vista de dentro. O laranja é a viga mestra, o elemento que carrega a estrutura.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-silex-orange/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white/5 rounded-[60px] border border-white/10 backdrop-blur-xl flex items-center justify-center p-12 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <FaviconLight className="w-full h-full relative z-10 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Palette Section */}
      <Section id="paleta">
        <Label>05 — Paleta Cromática</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div {...fadeIn} className="group">
            <div className="h-80 bg-silex-slate rounded-[40px] mb-6 transition-all group-hover:scale-[1.02] group-hover:shadow-2xl duration-500 relative overflow-hidden">
              <div className="absolute bottom-6 left-6 text-white/20 font-display text-4xl">SLATE</div>
            </div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <h4 className="font-medium text-xl">Deep Slate</h4>
                <p className="text-sm text-silex-slate/50 font-mono">HEX: #42474E</p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-silex-orange font-bold">Solidez</p>
            </div>
            <p className="text-sm text-silex-slate/60 font-light leading-relaxed">
              Uma cor que transmite seriedade, profundidade e solidez institucional. É o tom do concreto usinado e do aço. Representa a base inabalável da engenharia.
            </p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="group">
            <div className="h-80 bg-silex-orange rounded-[40px] mb-6 transition-all group-hover:scale-[1.02] group-hover:shadow-2xl duration-500 relative overflow-hidden">
              <div className="absolute bottom-6 left-6 text-white/30 font-display text-4xl">TECH</div>
            </div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <h4 className="font-medium text-xl">Tech Orange</h4>
                <p className="text-sm text-silex-slate/50 font-mono">HEX: #FC7D34</p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-silex-orange font-bold">Energia</p>
            </div>
            <p className="text-sm text-silex-slate/60 font-light leading-relaxed">
              A cor da sinalização técnica e da energia. No contraste com o grafite, ela salta aos olhos, indicando inovação, agilidade e o fator humano na tecnologia.
            </p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="group">
            <div className="h-80 bg-white border border-silex-slate/10 rounded-[40px] mb-6 transition-all group-hover:scale-[1.02] group-hover:shadow-2xl duration-500 relative overflow-hidden">
              <div className="absolute bottom-6 left-6 text-silex-slate/10 font-display text-4xl">PURE</div>
            </div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <h4 className="font-medium text-xl">Pure Off-white</h4>
                <p className="text-sm text-silex-slate/50 font-mono">HEX: #F6F6F4</p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-silex-orange font-bold">Respiro</p>
            </div>
            <p className="text-sm text-silex-slate/60 font-light leading-relaxed">
              O respiro necessário para a clareza da informação. Traz leveza e sofisticação, equilibrando a densidade dos tons industriais.
            </p>
          </motion.div>
        </div>

        {/* Extended Palette */}
        <div className="mt-24 pt-16 border-t border-silex-slate/10">
          
          {/* Support Palette */}
          <div className="mb-16">
            <h4 className="text-xs text-silex-slate/40 uppercase tracking-[0.2em] mb-8 font-semibold">Tons de Suporte</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="rounded-2xl overflow-hidden border border-silex-slate/10 bg-white group hover:shadow-xl transition-shadow cursor-default">
                <div className="h-20 bg-[#2C3035] group-hover:opacity-90 transition-opacity" />
                <div className="p-5">
                  <p className="font-medium text-silex-slate text-sm">Grafite profundo</p>
                  <p className="font-mono text-xs text-silex-slate/50 mt-1">#2C3035</p>
                  <p className="text-xs text-silex-slate/60 mt-3 font-light">Fundo hero / seções escuras</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-silex-slate/10 bg-white group hover:shadow-xl transition-shadow cursor-default">
                <div className="h-20 bg-[#5C6370] group-hover:opacity-90 transition-opacity" />
                <div className="p-5">
                  <p className="font-medium text-silex-slate text-sm">Grafite médio</p>
                  <p className="font-mono text-xs text-silex-slate/50 mt-1">#5C6370</p>
                  <p className="text-xs text-silex-slate/60 mt-3 font-light">Divisores / bordas</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-silex-slate/10 bg-white group hover:shadow-xl transition-shadow cursor-default">
                <div className="h-20 bg-[#9EA4AD] group-hover:opacity-90 transition-opacity" />
                <div className="p-5">
                  <p className="font-medium text-silex-slate text-sm">Cinza texto</p>
                  <p className="font-mono text-xs text-silex-slate/50 mt-1">#9EA4AD</p>
                  <p className="text-xs text-silex-slate/60 mt-3 font-light">Textos secundários</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-silex-slate/10 bg-white group hover:shadow-xl transition-shadow cursor-default">
                <div className="h-20 bg-[#F1F1EF] border-b border-silex-slate/5 group-hover:opacity-90 transition-opacity" />
                <div className="p-5">
                  <p className="font-medium text-silex-slate text-sm">Off-white suave</p>
                  <p className="font-mono text-xs text-silex-slate/50 mt-1">#F1F1EF</p>
                  <p className="text-xs text-silex-slate/60 mt-3 font-light">Fundo seções claras</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accent Palette */}
          <div>
            <h4 className="text-xs text-silex-slate/40 uppercase tracking-[0.2em] mb-8 font-semibold">Tons de acento</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden border border-silex-slate/10 bg-white group hover:shadow-xl transition-shadow cursor-default">
                <div className="h-20 bg-[#FEA96A] group-hover:opacity-90 transition-opacity" />
                <div className="p-5">
                  <p className="font-medium text-silex-slate text-sm">Âmbar claro</p>
                  <p className="font-mono text-xs text-silex-slate/50 mt-1">#FEA96A</p>
                  <p className="text-xs text-silex-slate/60 mt-3 font-light">Hover / estados ativos</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-silex-slate/10 bg-white group hover:shadow-xl transition-shadow cursor-default">
                <div className="h-20 bg-[#FC7D34] group-hover:opacity-90 transition-opacity" />
                <div className="p-5">
                  <p className="font-medium text-silex-slate text-sm">Âmbar base</p>
                  <p className="font-mono text-xs text-silex-slate/50 mt-1">#FC7D34</p>
                  <p className="text-xs text-silex-slate/60 mt-3 font-light">Acento principal</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-silex-slate/10 bg-white group hover:shadow-xl transition-shadow cursor-default">
                <div className="h-20 bg-[#C45A1A] group-hover:opacity-90 transition-opacity" />
                <div className="p-5">
                  <p className="font-medium text-silex-slate text-sm">Âmbar escuro</p>
                  <p className="font-mono text-xs text-silex-slate/50 mt-1">#C45A1A</p>
                  <p className="text-xs text-silex-slate/60 mt-3 font-light">Press / sobre fundo claro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Strategy Section */}
      <Section className="bg-silex-slate-deep text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Label><span className="text-white/40">05 — Posicionamento Estratégico</span></Label>
            <h2 className="text-4xl md:text-5xl font-light mb-12 leading-tight">
              A Identidade Escura como <br />
              <span className="italic font-serif text-silex-orange">Disrupção de Mercado.</span>
            </h2>
            <div className="space-y-8 text-lg text-white/60 font-light leading-relaxed">
              <p>
                A escolha pelo fundo grafite como versão principal não é estética — é estratégica. Construtoras de alto padrão no Brasil, quase sem exceção, usam fundos claros. São marcas conservadoras que falam a linguagem do mercado.
              </p>
              <p className="text-white border-l-2 border-silex-orange pl-8 py-2">
                A SILEX inverte esse padrão. O fundo escuro sinaliza disrupção dentro do próprio segmento: somos do setor, mas não somos como os outros.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center space-y-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-silex-orange font-medium mb-4 uppercase text-xs tracking-widest">Empreendimentos de Alto Padrão</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                <strong>Empreendimentos</strong> ancora a marca no mercado imobiliário — evoca projetos de valor, não apenas serviço de construção. <strong>Alto Padrão</strong> valida o posicionamento e qualifica o público antes da primeira conversa.
              </p>
            </div>

          </div>
        </div>
      </Section>

      {/* Favicon Visualization */}
      <Section className="bg-white">
        <Label>06 — Favicon & Micro-identidade</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col items-center justify-center p-12 bg-silex-offwhite rounded-3xl border border-silex-slate/5">
            <FaviconDark className="w-16 h-16 mb-6 drop-shadow-lg" />
            <span className="text-xs text-silex-slate/40 uppercase tracking-widest text-center">Favicon Dark</span>
          </div>
          <div className="flex flex-col items-center justify-center p-12 bg-silex-slate rounded-3xl">
            <FaviconLight className="w-16 h-16 mb-6 drop-shadow-lg" />
            <span className="text-xs text-white/40 uppercase tracking-widest">Favicon Light</span>
          </div>
        </div>
      </Section>

      {/* Applications Section */}
      <Section id="aplicacoes">
        <Label>07 — Aplicações em Contexto</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Architectural Context */}
          <motion.div {...fadeIn} className="md:col-span-2 group relative overflow-hidden rounded-[60px] aspect-[21/9] bg-silex-slate-deep">
            <img 
              src="/imagens/fachada.webp" 
              alt="Contexto Arquitetônico e Fachada Silex" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />

          </motion.div>

          {/* Website Mockup */}
          <motion.div {...fadeIn} className="bg-white p-10 rounded-[60px] border border-silex-slate/10 shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-8">
              <Monitor size={20} className="text-silex-orange" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-silex-slate/40 font-bold">Interface Digital</span>
            </div>
            <div className="aspect-video bg-silex-slate-deep rounded-3xl overflow-hidden relative p-8 shadow-inner">
              <div className="flex justify-between items-center mb-16">
                <LogoLight className="h-4" />
                <div className="flex gap-6">
                  <div className="w-12 h-1 bg-white/10 rounded-full" />
                  <div className="w-12 h-1 bg-white/10 rounded-full" />
                </div>
              </div>
              <div className="max-w-[70%]">
                <div className="h-1.5 w-16 bg-silex-orange mb-6" />
                <div className="h-10 w-full bg-white/5 rounded-lg mb-3" />
                <div className="h-10 w-3/4 bg-white/5 rounded-lg" />
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-silex-orange group-hover:border-silex-orange transition-all">
                <ArrowRight size={20} className="text-white/40 group-hover:text-white" />
              </div>
            </div>
          </motion.div>

          {/* Card Mockup */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-[60px] border border-silex-slate/10 shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-8">
              <CreditCard size={20} className="text-silex-orange" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-silex-slate/40 font-bold">Interface Analógica</span>
            </div>
            <div className="aspect-video flex items-center justify-center bg-silex-offwhite rounded-3xl overflow-hidden group">
              <img 
                src="/imagens/book_mckup_site.webp" 
                alt="Papelaria Premium" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div {...fadeIn} className="bg-silex-slate-deep p-12 rounded-[60px] md:col-span-2 overflow-hidden relative group">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-silex-orange/5 blur-[120px] pointer-events-none" />
             <div className="flex items-center gap-3 mb-12 relative z-10">
              <Smartphone size={20} className="text-silex-orange" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Experiência Mobile</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-64 h-[500px] bg-[#000] rounded-[3.5rem] border-[8px] border-silex-slate p-6 relative overflow-hidden shadow-2xl">
                  <div className="w-24 h-6 bg-silex-slate absolute top-0 left-1/2 -translate-x-1/2 rounded-b-3xl z-20" />
                  <div className="mt-12">
                    <LogoLight className="h-5 mb-12" />
                     <div className="space-y-6">
                       <div className="h-32 w-full bg-white/5 rounded-2xl border border-white/5" />
                       <div className="h-32 w-full bg-white/5 rounded-2xl border border-white/5" />
                       <div className="h-32 w-full bg-white/5 rounded-2xl border border-white/5" />
                     </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
                <h3 className="text-4xl font-light text-white leading-tight">Ecossistema Digital <br /><span className="text-silex-orange font-medium">Integrado.</span></h3>
                <p className="text-white/50 font-light text-lg leading-relaxed">
                  A marca é escalável e atemporal — daqui a dez anos continuará parecendo moderna — e pronta para assinar desde residências exclusivas até grandes incorporações. Para o público do Jardins de Ibiza ou Alphaville, a segurança vale mais que a promessa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 hover:bg-silex-orange hover:text-white hover:border-silex-orange transition-all cursor-default">Design System</div>
                  <div className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 hover:bg-silex-orange hover:text-white hover:border-silex-orange transition-all cursor-default">ARQUITETURA RESPONSIVA</div>
                  <div className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 hover:bg-silex-orange hover:text-white hover:border-silex-orange transition-all cursor-default">BIM Ready</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Conclusion */}
      <footer className="bg-[#2C3035] py-16 px-6 text-center relative overflow-hidden">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto relative z-10">
          <Label><span className="text-silex-orange font-bold">Conclusão</span></Label>
          <h2 className="text-white text-5xl md:text-7xl font-display mb-12 leading-[1.1] tracking-tighter">
            POR QUE ESTA <br />
            MARCA <span className="text-silex-orange">VENDE?</span>
          </h2>
          <p className="text-white/50 font-light text-xl leading-relaxed mb-16 max-w-2xl mx-auto">
            Esta marca comunica que a SILEX não é apenas uma equipe que constrói — é uma plataforma de engenharia e gestão que entrega uma máquina de morar. É uma identidade atemporal e escalável.
          </p>

          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
              © 2026 SILEX. TODOS OS DIREITOS RESERVADOS.
            </p>
            <div className="flex justify-center gap-8 text-[8px] uppercase tracking-[0.3em] text-white/10">
              <span>Fortaleza, Brasil</span>
              <span>•</span>
              <span>Empreendimentos de Alto Padrão</span>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
