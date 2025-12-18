import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wind, CheckCircle2 } from 'lucide-react';
import { ButtonPrimary, ButtonOutline } from '../components/common/Buttons';
import { BrandBaliTitleLogo, tornasolText, tornasoltextGreen } from '../components/common/Logos';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="./assets/images/wallpaper/image3.png"
            alt="Cyclist Hero"
            className="w-full h-full object-cover"  
            />
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Gradiente inferior para fusionarse con la sección blanca siguiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <div className="mb-8 animate-pulse flex justify-center">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Wind className="w-8 h-8 text-white" />

            {/* SVG Filter definition included in Logos component or globally, but for strictness re-add or rely on Logos defs if global */}
          </div>
          </div>
          {/*<h1 className="flex items-center justify-center text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">*/}

      

             {/* Subtítulo */}
          <p className="text-lg md:text-3xl text-gray-100 font-light mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Ingeniería de precisión. Estética inigualable. <br className="hidden md:block"/>
            Diseñadas para aquellos que no aceptan el segundo lugar.
          </p>
    
          
          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonPrimary onClick={() => navigate('/ruta')} className="shadow-xl shadow-purple-900/20">
              Explorar Colección
            </ButtonPrimary>
            
            {/* Botón secundario estilo 'Glassmorphism' */}
            <button 
              onClick={() => navigate('/contacto')}
              className="px-8 py-3 uppercase tracking-widest text-sm font-bold text-white border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-neutral-900 transition-all duration-300 rounded-sm"
            >
              Agendar Cita
            </button>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-24 bg-white px-6 border-t border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h3 className={`${tornasoltextGreen} tracking-widest text-sm font-bold uppercase mb-4`}>Nuestra Esencia</h3>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 uppercase leading-tight">
              Más allá del <span className="font-bold">Carbono</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
              En BӑLì, no solo fabricamos bicicletas; esculpimos máquinas de velocidad. Cada cuadro es el resultado de cientos de horas de pruebas aerodinámicas y un obsesivo enfoque en el <span className="text-purple-600 font-medium">confort de alto rendimiento</span>.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {[
                'Fibra de carbono T1100 hecha artesanalmente en el cluster industrial de Huizhou, China', 
                'Montaje Artesanal', 
                'Geometría Endurance-Race'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-neutral-700">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-purple-600 w-5 h-5" />
                  </div>
                  <span className="font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>
            
          </div>
          <div className="relative p-0">
            <div className="absolute inset-0 border-2 border-purple-200 rounded-sm translate-x-0 translate-y-0 bg-gray-50 -z-10"></div>
            
            <img 
              src="./assets/images/bali-casette.png" 
              alt="Detalle bicicleta" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 relative z-10 shadow-xl rounded-sm block" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;