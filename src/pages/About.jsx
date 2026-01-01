import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Clock, MapPin, Target, Palette, Component } from 'lucide-react';
import { tornasolText,LogoBase, RiceLogo, tornasoltextGreen, tornasolGradientGreen, ExternalLogo, BrandGemetryLogo, tornasolGradient, BrandRiceLogo } from '../components/common/Logos';
import { ButtonPrimary } from '../components/common/Buttons';
import { aboutData } from '../data/about';;

// Componente Local para Títulos en Modo Claro (Texto Oscuro)
const LightSectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 text-center">
    <h3 className={`${tornasoltextGreen} tracking-[0.3em] text-sm font-bold uppercase mb-3`}>{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-light text-neutral-900 uppercase">{title}</h2>
    <div className={`w-24 h-1 ${tornasolGradientGreen} mx-auto mt-6`}></div>
  </div>
);

// Tarjeta de características adaptada al tema blanco
const FeatureCard = ({ icon: Icon, title, text }) => (
  <div className="bg-gray-50 border border-gray-200 p-6 hover:border-purple-300 hover:bg-white hover:shadow-xl transition-all duration-300 group rounded-sm">
    <div className="mb-4">
      {/* El icono crece ligeramente y usa el morado de la marca */}
      <Icon className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
    </div>
    {title && <h4 className="text-neutral-900 font-bold uppercase tracking-wider mb-2 group-hover:text-purple-700 transition-colors">{title}</h4>}
    <p className="text-gray-600 text-sm leading-relaxed text-justify group-hover:text-gray-500">
      {text}
    </p>
  </div>
);
// Tarjeta de características adaptada al tema blanco
const FeatureCardLogo = ({ icon, title, text }) => (
  <div className="bg-gray-50 border border-gray-200 p-6 hover:border-purple-300 hover:bg-white hover:shadow-xl transition-all duration-300 group rounded-sm">
    <div className="mb-4">
      {/* El icono crece ligeramente y usa el morado de la marca mediante la clase text-purple-600 que hereda ExternalLogo */}
      <LogoBase 
        viewBox="0 0 100 100"
        href={`./assets/icons/bali-icons-html.svg#${icon}`} 
        initialColor="fill-purple-600"
        className="w-14 h-14  fill-purple-600 group-hover:scale-110 transition-transform duration-300" 
      />
    </div>
    {title && <h4 className="text-neutral-900 font-bold uppercase tracking-wider mb-2 group-hover:text-purple-700 transition-colors">{title}</h4>}
    <p className="text-gray-600 text-sm leading-relaxed text-justify group-hover:text-gray-500">
      {text}
    </p>
  </div>
);
const About = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen animate-in fade-in duration-700 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - Significado */}
        <div className="text-center mb-20">
          <div className="flex justify-center group mb-6">
            <LogoBase 
              viewBox="0 0 100 100"
              href="./assets/icons/bali-icons-html.svg#baliCircle" 
              className="w-50 h-50 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          <h1 className="flex text-4xl md:text-6xl font-black text-neutral-900 items-center justify-center uppercase mb-6 tracking-tighter">
            <ExternalLogo href="./assets/icons/bali-icons-html.svg#letters" className="w-20 md:w-34"/> <span className="pl-2 pr-3">es</span> <span className={tornasoltextGreen}>POTENCIA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-purple-500 pl-6 md:pl-0 md:border-l-0">
            "{aboutData.meaningBali}"
          </p>
          <p className="mt-4 text-purple-600 uppercase tracking-widest text-sm font-semibold">
            {aboutData.typeProject}
          </p>
        </div>

        {/* Sección Principal - Grid de Filosofía */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <FeatureCardLogo 
            icon="rice"
            text={aboutData.ricePods}
          />
          <FeatureCardLogo
            icon="tamal"
            text={aboutData.carbonFibers}
          />
          <FeatureCardLogo 
            icon="geometry"
            text={aboutData.geoPerformance}
          />
          <FeatureCard 
            icon={Palette}
            text={
              <span>
                {aboutData.catalog}{' '}
                {/* Enlace estilizado con el color de la marca */}
                <a 
                  href={aboutData.catalogLink || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 font-bold hover:text-purple-800 underline transition-colors cursor-pointer"
                >
                  Click aquí
                </a>
              </span>
            }
          />
        </div>

        {/* Visión y Garantía - Highlight Section */}
        <div className="bg-gray-50 border-y border-gray-200 py-16 px-4 md:px-12 -mx-6 md:-mx-0 mb-24 relative overflow-hidden rounded-sm">
          {/* Decoración de fondo sutil */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <LightSectionTitle title="Nuestra Visión" subtitle="Customización Total" />
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {aboutData.vision}
              </p>
              <div className="flex items-start gap-4 mt-8 p-4 bg-white border border-gray-100 rounded-sm shadow-sm">
                <ShieldCheck className="w-12 h-12 text-green-500 shrink-0" />
                <p className="text-sm text-gray-500">
                  <strong className="text-neutral-900 block mb-1 uppercase tracking-wide">Garantía Total Carbon</strong>
                  {aboutData.warranty}
                </p>
              </div>
            </div>
            
            <div className="border-l border-gray-200 pl-0 md:pl-12 pt-12 md:pt-0 border-t md:border-t-0 mt-8 md:mt-0">
              <h3 className="flex items-center gap-3 text-neutral-900 text-xl font-bold uppercase tracking-widest mb-6">
                <Clock className="text-purple-600" /> {aboutData.timeResponse.desc}
              </h3>
              <ul className="space-y-6">
                {aboutData.timeResponse.data.map((item, index) => (
                  <li key={index} className="flex gap-4 items-baseline text-gray-600 text-sm group">
                    <span className="text-purple-400 font-mono font-bold group-hover:text-purple-600 transition-colors">0{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Note & CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs text-gray-500 italic mb-12 border border-gray-200 p-6 rounded-sm bg-gray-50">
            {aboutData.note}
          </p>
          <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
            <ButtonPrimary onClick={() => navigate('/contact')}>
              Iniciar mi Proyecto Bali
            </ButtonPrimary>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;