import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Ruler, Settings, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { tornasolText, tornasolGradient, tornasolGradientGreen } from '../components/common/Logos';
import { bikeBuildData } from '../data/bikeBuildData';

// --- Subcomponentes para organizar el código ---

// Fila de información individual (Material, Peso, etc.)
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
    <span className="text-xs text-gray-400 uppercase tracking-wider">{label}</span>
    <span className="text-sm text-gray-700 font-medium text-right">{value}</span>
  </div>
);

// Sección de Configuración (Renderiza Frame, Fork, Arrays de componentes)
const BuildSection = ({ title, data }) => {
  if (!data) return null;
  const items = Array.isArray(data) ? data : [data];

  return (
    <div className="mb-6">
      <h4 className="text-purple-600 font-bold uppercase text-xs tracking-widest mb-3 border-l-2 border-purple-400 pl-3">
        {title}
      </h4>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-gray-50 p-4 rounded-sm border border-gray-100 hover:border-purple-200 transition-colors">
            <p className="font-bold text-neutral-900 mb-2">{item.description}</p>
            <div className="space-y-1">
              {item.material && <InfoRow label="Material" value={item.material} />}
              {item.dimension && item.dimension !== "N/A" && <InfoRow label="Dimensión" value={item.dimension} />}
              {item.weight && item.weight !== "N/A" && <InfoRow label="Peso" value={item.weight} />}
              {item.type && <InfoRow label="Tipo" value={item.type} />}
              {item.capacity && item.capacity !== "N/A" && <InfoRow label="Capacidad" value={item.capacity} />}
              {item.with_extender && item.with_extender !== "N/A" && <InfoRow label="Con extensor" value={item.with_extender} />}
              {item.rage && item.rage !== "N/A" && <InfoRow label="Rango" value={item.rage} />}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Tabla de Geometría Premium
const GeometryTable = ({ headers, data }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className={`px-4 py-3 font-bold ${i === 0 ? 'sticky left-0 bg-gray-50 z-10' : ''}`}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="bg-white border-b border-gray-100 hover:bg-purple-50/30 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className={`px-4 py-3 font-medium ${j === 0 ? 'sticky left-0 bg-white text-purple-600 font-bold z-10' : 'text-gray-600'}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- Componente Principal ---

const Catalog = ({ category, icon: Icon }) => {
  const navigate = useNavigate();
  // Obtener datos seguros o un objeto vacío para evitar crashes
  const categoryData = bikeBuildData[category] || { builds: [], geometryData: [], geometryHeaders: [] };
  const { title, subtitle, builds, geometryData, geometryHeaders } = categoryData;

  // Estado para manejar las pestañas de cada tarjeta (configuración vs geometría)
  const [activeTab, setActiveTab] = useState('build'); // 'build' | 'geo'

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 min-h-screen animate-in slide-in-from-right-8 duration-500 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`flex items-center justify-center gap-4 mb-4 ${tornasolText}`}>
          {Icon && <Icon className="w-8 h-8" />}
        </div>
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 gap-16">
          {builds.map((bike) => (
            <div key={bike.id} className="bg-white border border-gray-200 shadow-xl rounded-sm overflow-hidden flex flex-col lg:flex-row">
              
              {/* COLUMNA IZQUIERDA: Imagen y Resumen */}
              <div className="lg:w-2/5 bg-gray-50 relative flex flex-col">
                <div className="relative h-64 lg:h-96 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10"></div>
                  <img 
                    src={bike.image} 
                    alt={bike.model} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 brightness-75" 
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <h3 className="text-3xl font-black text-white drop-shadow-md tracking-tighter uppercase">{bike.model}</h3>
                    <p className="text-white/90 font-medium tracking-widest text-sm uppercase">{bike.tagline}</p>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col justify-between bg-white lg:bg-gray-50 border-t lg:border-t-0 lg:border-r border-gray-200">
                  <div>
                    <div className="flex justify-between items-end mb-6">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Precio Estimado</p>
                        <p className="text-2xl font-bold text-neutral-900">{bike.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Peso Total</p>
                        <p className="text-xl font-bold text-purple-600">{bike.Meta.total_weight}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 italic border-l-2 border-gray-300 pl-3">
                      "{bike.Meta.calculation_note}"
                    </p>
                  </div>

                  <button 
                    onClick={() => navigate('/contacto')}
                    className={`w-full mt-8 py-4 uppercase tracking-[0.2em] font-bold text-sm text-white relative overflow-hidden group ${tornasolGradientGreen} shadow-md hover:shadow-lg transition-all`}
                  >
                    <span className="relative z-10 flex justify-center items-center gap-2">
                      Cotizar Ahora <ChevronRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>

              {/* COLUMNA DERECHA: Detalles Técnicos (Tabs) */}
              <div className="lg:w-3/5 flex flex-col">
                {/* Tabs Header */}
                <div className="flex border-b border-gray-200">
                  <button 
                    onClick={() => setActiveTab('build')}
                    className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${activeTab === 'build' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <Settings className="w-4 h-4" /> Configuración
                  </button>
                  <button 
                    onClick={() => setActiveTab('geo')}
                    className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${activeTab === 'geo' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <Ruler className="w-4 h-4" /> Geometría
                  </button>
                </div>

                {/* Contenido Scrollable */}
                <div className="flex-1 overflow-y-auto max-h-[600px] p-6 lg:p-8 bg-white custom-scrollbar">
                  
                  {activeTab === 'build' ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        {/* Mapeo dinámico de las secciones del Build */}
                        <div className="col-span-1 md:col-span-2">
                           <BuildSection title="Cuadro" data={bike.Frame} />
                        </div>
                        <BuildSection title="Horquilla" data={bike.Fork} />
                        <BuildSection title="Cockpit" data={bike.Cockpit} />
                        <BuildSection title="Transmisión" data={bike.Drivetrain} />
                        <BuildSection title="Ruedas" data={bike.Wheelset} />
                        {bike["E-System"] && (
                           <div className="col-span-1 md:col-span-2">
                             <BuildSection title="Sistema Eléctrico" data={bike["E-System"]} />
                           </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                      <div className="mb-8 p-4 bg-gray-50 border border-gray-100 rounded-sm">
                        <h4 className="text-xs text-gray-400 uppercase tracking-widest mb-4 text-center">Diagrama de Geometría</h4>
                        <div className="relative aspect-video overflow-hidden rounded-sm bg-white mix-blend-multiply">
                           {/* Imagen placeholder de geometría */}
                           <img src={bike.geometryImage} alt="Geometry Chart" className="w-full h-full object-contain" />
                        </div>
                      </div>
                      
                      <h4 className="text-purple-600 font-bold uppercase text-xs tracking-widest mb-4 border-l-2 border-purple-400 pl-3">
                        Tabla de Medidas (mm)
                      </h4>
                      <GeometryTable headers={geometryHeaders} data={geometryData} />
                      
                      <p className="mt-4 text-xs text-gray-400 italic text-center">
                        * Las medidas pueden variar ligeramente según la configuración final del cockpit.
                      </p>
                    </div>
                  )}
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