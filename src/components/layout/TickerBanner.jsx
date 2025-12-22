import React from 'react';

// Estilos inline para la animación keyframes (para asegurar que funcione sin config de tailwind)
const tickerAnimationStyles = `
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll-left {
    animation: scrollLeft 40s linear infinite;
  }
  .pause-on-hover:hover {
    animation-play-state: paused;
  }
`;

const TickerBanner = ({ items }) => {
  // Duplicamos los items para crear el efecto de loop infinito sin cortes
  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full bg-gray-50 border-y border-gray-200 overflow-hidden relative">
      <style>{tickerAnimationStyles}</style>
      
      {/* Contenedor del Ticker */}
      <div className="flex w-max">
        <div className="flex animate-scroll-left pause-on-hover">
          {marqueeItems.map((item, index) => (
            <a 
              key={`${item.id}-${index}`} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center px-12 py-6 border-r border-gray-100 transition-all duration-300 hover:bg-white"
              style={{ width: '234px', height: '100px' }} // Altura ajustada para comodidad visual, ancho estándar banner
              title={`${item.name}: ${item.description}`} // Tooltip nativo con la descripción
            >
              {/* Imagen con efecto de escala */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="max-h-[60px] w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out"
              />
              
              {/* Indicador sutil de link externo */}
              <span className="absolute bottom-2 right-2 text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Sombras laterales para dar efecto de desvanecimiento (opcional pero elegante) */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default TickerBanner;