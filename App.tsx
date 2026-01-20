
import React, { useState, useEffect } from 'react';
import { Section, Heading, SectionTitle } from './components/Layout';
import { ICONS, COLORS } from './constants';
import { mainKPIs, interannualData, routePerformance, socialAudience, competitorMarketShare2024, paidChannelData, organicChannelData } from './data';
import { KPIData } from './types';
import { InterannualTicketsChart, RoutesBarChart, MarketTrendChart, ChannelEvolutionChart } from './components/Charts';

const KPICard: React.FC<{ data: KPIData }> = ({ data }) => (
  <div className="bg-white border-2 border-andesmar-blue p-6 flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="text-andesmar-blue p-2 bg-blue-50 rounded-lg">
        {ICONS[data.icon as keyof typeof ICONS]}
      </div>
      <span className={`font-bold text-sm px-2 py-1 rounded ${data.change.startsWith('-') ? 'text-red-500 bg-red-50' : 'text-green-500 bg-green-50'}`}>
        {data.change}
      </span>
    </div>
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{data.label}</p>
      <p className="text-3xl font-black text-gray-900 tracking-tight mb-2">{data.value}</p>
      {data.paid && data.organic && (
        <div className="flex gap-4 border-t border-gray-100 pt-2 mt-2">
          <div>
            <p className="text-[10px] font-bold text-andesmar-blue uppercase">Paid</p>
            <p className="text-xs font-black text-gray-700">{data.paid}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Orgánico</p>
            <p className="text-xs font-black text-gray-700">{data.organic}</p>
          </div>
        </div>
      )}
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'logros', 'competencia', 'audiencia', 'conclusiones', 'oportunidades'];
      const scrollPos = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigation Overlay */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {['inicio', 'logros', 'competencia', 'audiencia', 'conclusiones', 'oportunidades'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === id ? 'bg-andesmar-blue scale-150 shadow-[0_0_10px_#0096FF]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            title={id.charAt(0).toUpperCase() + id.slice(1)}
          />
        ))}
      </nav>

      {/* Hero Section */}
      <Section id="inicio" className="bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 pattern-diagonal opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-48 h-12 flex flex-wrap gap-2">
          {Array.from({ length: 21 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter mb-4">
              Informe <br /> 2025
            </h1>
            <div className="bg-andesmar-blue text-white inline-block px-12 py-6 text-4xl md:text-6xl font-bold uppercase tracking-tight shadow-xl">
              Andesmar
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center gap-8">
            <div className="w-48 h-auto opacity-80">
              <svg viewBox="0 0 200 50" className="w-full h-full fill-andesmar-blue">
                <text x="0" y="35" fontSize="24" fontWeight="900">ANDESMAR</text>
              </svg>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="w-24 h-auto">
              <svg viewBox="0 0 100 50" className="w-full h-full stroke-andesmar-blue fill-none">
                <path d="M10,40 L30,10 L70,40 L90,10" strokeWidth="4" />
                <text x="35" y="45" fontSize="12" fontWeight="800" fill="#0096FF">VETA</text>
              </svg>
            </div>
          </div>
        </div>
      </Section>

      {/* Index Page (Table of Contents) */}
      <Section className="bg-gray-50">
        <Heading>Índice de contenidos</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {[
            { n: '01', t: 'Evolución 2025', link: '#logros' },
            { n: '02', t: 'Análisis de competencia (directa)', link: '#competencia' },
            { n: '03', t: 'Análisis de competencia (concentradoras)', link: '#competencia' },
            { n: '04', t: 'Conclusiones', link: '#conclusiones' },
            { n: '05', t: 'Oportunidades', link: '#oportunidades' },
          ].map((item) => (
            <a href={item.link} key={item.n} className="group border-b-2 border-transparent hover:border-andesmar-blue pb-8 transition-all">
              <span className="text-5xl font-black text-gray-900 mb-4 block group-hover:text-andesmar-blue transition-colors">{item.n}</span>
              <p className="text-2xl font-bold text-gray-700 leading-tight uppercase group-hover:translate-x-2 transition-transform">{item.t}</p>
            </a>
          ))}
        </div>
      </Section>

      {/* Section 01: Logros */}
      <Section id="logros">
        <SectionTitle number="01" title="Evolución 2023-2025" />

        <div className="mb-20">
          <Heading subtitle="2025 vs 2024">KPIs principales / Orgánico + paid</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainKPIs.map((kpi, idx) => <KPICard key={idx} data={kpi} />)}
          </div>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-12 items-start">
          <div>
            <Heading subtitle="Comparativo 23 vs 24 vs 25">Interanual Boletos</Heading>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <InterannualTicketsChart data={interannualData} />
            </div>

          </div>
          <div>
            <Heading subtitle="Noviembre y Diciembre 2025">Líneas más vendidas</Heading>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <RoutesBarChart data={routePerformance} />
            </div>
            <p className="mt-6 text-gray-500 italic text-sm">
              * Datos basados en el reporte de venta por tramos emitidos durante el periodo 2025.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <Heading subtitle="Detalle por Canal">Evolución Paid vs Orgánico</Heading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-700">Canal Paid (Publicidad)</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">Vol 24 vs 25</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <ChannelEvolutionChart data={paidChannelData} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-700">Canal Orgánico (SEO)</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">Vol 24 vs 25</span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <ChannelEvolutionChart data={organicChannelData} />
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-500 italic text-sm">
            * Los resultados de Mayo 2024 contienen errores en la medición por problemas con la plataforma de VEB, contabilizando la mayor parte de ventas y usuarios como orgánico
          </p>
        </div>

        <div className="bg-gray-900 text-white rounded-[2rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 pattern-dots opacity-20"></div>
          <Heading light subtitle="ROAS y Eficiencia">Rendimiento Estratégico</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div>
              <p className="text-blue-400 text-sm font-bold uppercase mb-2">Inversión 2025</p>
              <p className="text-4xl font-black">$61.321.727</p>
              <p className="text-xs mt-2 text-gray-400">Total Meta + Google</p>
            </div>
            <div>
              <p className="text-blue-400 text-sm font-bold uppercase mb-2">Facturación Paid 2025</p>
              <p className="text-4xl font-black">$6.372M</p>
              <p className="text-xs mt-2 text-gray-400">Ingresos Publicitarios (Atribuidos)</p>
            </div>
            <div>
              <p className="text-andesmar-blue text-sm font-bold uppercase mb-2">ROAS</p>
              <p className="text-5xl font-black text-andesmar-blue">104</p>
              <p className="text-xs mt-2 text-gray-400">Eficiencia Publicitaria</p>
            </div>
            <div>
              <p className="text-blue-400 text-sm font-bold uppercase mb-2">Participación Paid</p>
              <p className="text-4xl font-black">71%</p>
              <p className="text-xs mt-2 text-gray-400">Sobre boletos anuales</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 02: Competencia */}
      <Section id="competencia" className="bg-gray-50">
        <SectionTitle number="02" title="Análisis de Competencia" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm font-bold uppercase mb-2">Dominios del mercado</p>
            <p className="text-4xl font-black text-gray-900">10 <span className="text-gray-400 text-xl">/10</span></p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm font-bold uppercase mb-2">Tráfico del mercado</p>
            <p className="text-4xl font-black text-gray-900">16,6 M <span className="text-green-500 text-lg">↑4,8 %</span></p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm font-bold uppercase mb-2">Costo tráfico mercado</p>
            <p className="text-4xl font-black text-gray-900">$687,8 mil <span className="text-green-500 text-lg">↑14,26 %</span></p>
          </div>
        </div>

        <div className="mb-20">
          <Heading subtitle="Total Addressable Market (TAM)">Tamaño del mercado</Heading>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <MarketTrendChart />
          </div>
        </div>

        <div className="mb-20">
          <Heading subtitle="Participación de Tráfico">Market Share por Canal</Heading>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Dominio</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Total</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Directo</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Referido</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Búsq. Org.</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Tráfico Pago</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {competitorMarketShare2024.map((row, i) => (
                  <tr key={i} className={`hover:bg-blue-50/30 transition-colors ${row.domain === 'andesmar.com' ? 'bg-blue-50 font-bold' : ''}`}>
                    <td className="px-6 py-4 text-sm text-gray-900">{row.domain}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{row.total}%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{row.directo}%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{row.referido}%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{row.busq_org}%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{row.traf_pago}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 border-l-4 border-andesmar-blue bg-white shadow-sm">
              <p className="text-gray-900 font-bold italic">Flecha lidera la mayoría de los canales, pero hemos ganado terreno.</p>
            </div>
            <div className="p-6 border-l-4 border-green-500 bg-white shadow-sm">
              <p className="text-gray-900 font-bold italic">Excelente desempeño en Canal Referido (45.28%), duplicando a Flecha.</p>
            </div>
            <div className="p-6 border-l-4 border-yellow-500 bg-white shadow-sm">
              <p className="text-gray-900 font-bold italic">Oportunidad de crecimiento significativa en Búsqueda Orgánica.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Audience Section */}
      <Section id="audiencia" className="bg-white">
        <Heading subtitle="Demografía y Comportamiento">Resumen de Audiencia</Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
            <h4 className="text-xl font-black text-andesmar-blue uppercase mb-6">Demografía</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Edad</p>
                <p className="text-2xl font-black text-gray-900">25-34</p>
                <p className="text-sm text-gray-400">24,46 % del total</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Género</p>
                <p className="text-2xl font-black text-gray-900">Femenino</p>
                <p className="text-sm text-gray-400">59,22 % de participación</p>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
            <h4 className="text-xl font-black text-orange-600 uppercase mb-6">Socioeconómicos</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Empleo</p>
                <p className="text-2xl font-black text-gray-900">Tiempo Completo</p>
                <p className="text-sm text-gray-400">36,64 % de usuarios</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Ingresos</p>
                <p className="text-2xl font-black text-gray-900">Bajo / Medio</p>
                <p className="text-sm text-gray-400">76,49 % representatividad</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-8 rounded-[2rem] border border-purple-100">
            <h4 className="text-xl font-black text-purple-600 uppercase mb-6">Comportamiento</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Intereses</p>
                <p className="text-2xl font-black text-gray-900">Logística y Transp.</p>
                <p className="text-sm text-gray-400">99,44 % afinidad</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Red Social Principal</p>
                <p className="text-2xl font-black text-gray-900">YouTube</p>
                <p className="text-sm text-gray-400">81,48 % alcance</p>
              </div>
            </div>
          </div>
        </div>

        <Heading subtitle="Presencia en Redes">Alcance por Plataforma</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
          {socialAudience.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full bg-gray-100 rounded-lg h-32 relative overflow-hidden flex items-end">
                <div
                  className="w-full bg-purple-400 transition-all duration-1000"
                  style={{ height: `${item.percentage}%` }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">
                  {item.percentage}%
                </span>
              </div>
              <p className="mt-4 text-[10px] font-black uppercase text-gray-500 text-center">{item.platform}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 04: Conclusiones */}
      <Section id="conclusiones" className="bg-gray-50">
        <SectionTitle number="04" title="Conclusiones" />
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            {[
              "Tercer año consecutivo de crecimiento real en la plataforma digital (2023-2025).",
              "Consolidación como líderes regionales en rutas clave internacionales.",
              "Optimización de la eficiencia del canal pago con ROAS superior a 100.",
              "Fuerte crecimiento en captación de tráfico directo y referido.",
              "Liderazgo absoluto en presencia e interacción en redes sociales (alcance > 80%)."
            ].map((text, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <span className="text-2xl font-black text-andesmar-blue group-hover:scale-125 transition-transform">0{i + 1}</span>
                <p className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">{text}</p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white relative group">
              <img
                src="https://picsum.photos/seed/andesmar/800/1200"
                alt="Bus de Andesmar"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-andesmar-blue/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-3xl font-black uppercase italic leading-none">Visión <br /> Estratégica</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 05: Oportunidades */}
      <Section id="oportunidades" className="bg-andesmar-blue text-white">
        <SectionTitle number="05" title="Oportunidades 2025" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {[
              "Liderar la venta directa online superando a los competidores nacionales.",
              "Optimizar la propia red como concentradora de pasajes integral.",
              "Incrementar participación en concentradoras externas con bajo CPA.",
              "Expandir la estrategia de contenido corto en TikTok/Instagram Reels.",
              "Automatización de la pauta publicitaria basada en ocupación de tramos."
            ].map((text, i) => (
              <div key={i} className="border-l-4 border-white pl-8 py-2">
                <p className="text-2xl md:text-3xl font-black leading-tight group-hover:translate-x-4 transition-transform">{text}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400/20 rounded-full animate-bounce duration-[4000ms]"></div>
              <img
                src="https://picsum.photos/seed/strategy/800/800"
                alt="Strategy 2025"
                className="rounded-[4rem] shadow-2xl relative z-10 border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Final Page */}
      <Section className="bg-white text-center">
        <h2 className="text-[10vw] font-black uppercase italic tracking-tighter leading-none mb-12">
          ¡Gracias!
        </h2>
        <div className="w-full h-2 bg-andesmar-blue mb-12"></div>
        <div className="flex justify-center gap-12">
          <p className="text-2xl font-bold text-gray-400">INFORME DE GESTIÓN 2025</p>
          <p className="text-2xl font-bold text-andesmar-blue">EQUIPO DE MARKETING</p>
        </div>
      </Section>

      {/* Footer / Contact (Floating bar) */}
      <footer className="fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-100 p-4 z-40 hidden md:flex justify-between items-center px-12">
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 bg-andesmar-blue rounded-full"></div>
          <p className="font-bold text-sm tracking-widest text-gray-900 uppercase">Andesmar Executive Reporting</p>
        </div>
        <div className="flex gap-8 text-[10px] font-black text-gray-400 tracking-widest uppercase">
          <span>Board Presentation</span>
          <span>Fiscal Year 2025</span>
          <span>Confidencial</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
