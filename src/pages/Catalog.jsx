import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { tornasolText, tornasolGradient, tornasoltextGreen, tornasolGradientGreen } from '../components/common/Logos';
import { bikeData } from '../data/bikes';

const Catalog = ({ category, title, subtitle, icon: Icon }) => {
  const navigate = useNavigate();
  const bikes = bikeData[category] || [];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen animate-in slide-in-from-right-8 duration-500 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`flex items-center justify-center gap-4 mb-4 ${tornasolText}`}>
          <Icon className="w-8 h-8" />
        </div>
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {bikes.map((bike) => (
            <div key={bike.id} className="group bg-white border border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col rounded-sm">
              <div className="relative h-80 overflow-hidden bg-gray-100">
                {/*<div className="absolute inset-0 bg-neutral-800 animate-pulse" />*/}
                <img src={bike.image} alt={bike.model} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-neutral-900 px-4 py-1 text-sm tracking-widest border border-gray-200 font-bold shadow-sm">
                  {bike.price}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2 font-sans tracking-wide">{bike.model}</h3>
                <p className={`${tornasoltextGreen} text-sm tracking-widest uppercase mb-4 font-semibold`}>{bike.tagline}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6">
                  {bike.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xs text-gray-400 uppercase tracking-widest mb-3">Especificaciones Clave</h4>
                  <div className="flex flex-wrap gap-2">
                    {bike.specs.map((spec, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200 group-hover:border-purple-100 transition-colors">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <button onClick={() => navigate('/contacto')} className="w-full py-4 border border-neutral-200 text-neutral-600 hover:text-white transition-all duration-300 uppercase text-sm tracking-[0.2em] flex justify-center items-center gap-2 relative overflow-hidden group">
                    <span className={`absolute inset-0 ${tornasolGradientGreen} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Configurar Modelo <ChevronRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
