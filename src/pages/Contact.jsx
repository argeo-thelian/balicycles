import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, Instagram } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { tornasolText, tornasolGradient, tornasoltextGreen, tornasolGradientGreen } from '../components/common/Logos';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen animate-in zoom-in-95 duration-500 flex items-center bg-white">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionTitle title="Atención Privada" subtitle="Comienza tu viaje" />
          <p className="text-gray-600 mb-12 text-center md:text-left text-lg font-light">
            En BӑLì, cada bicicleta es configurada a la medida del ciclista. Llena el formulario para agendar una consulta con nuestros expertos en biomecánica y diseño.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center ${tornasoltextGreen} shadow-sm rounded-sm`}>
                <MapPin  className={`w-8 h-8 text-purple-600 `} />

              </div>
              <div><h4 className="text-neutral-900 uppercase tracking-wider text-sm mb-1 font-bold">Showroom</h4><p className="text-gray-500">Polanco, CDMX</p></div>
            </div>
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center ${tornasoltextGreen} shadow-sm rounded-sm`}>
                <Phone  className={`w-8 h-8 text-purple-600 `} />
              </div>
              <div><h4 className="text-neutral-900 uppercase tracking-wider text-sm mb-1 font-bold">Llámanos</h4><p className="text-gray-500">+52 (55) 1234 5678</p></div>
            </div>
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center ${tornasoltextGreen} shadow-sm rounded-sm`}>
                <Mail   className={`w-8 h-8 text-purple-600 `}/>
              </div>
              <div><h4 className="text-neutral-900 uppercase tracking-wider text-sm mb-1 font-bold">Email</h4><p className="text-gray-500">vip@bali.bikes</p></div>
            </div>
            {/* Repetir para Phone y Mail si se desea, simplificado aquí */}
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-xl relative overflow-hidden rounded-sm">
          {formStatus === 'success' ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 text-center p-8 animate-in fade-in">
              <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
              <h3 className="text-2xl text-neutral-900 font-bold mb-2">Solicitud Recibida</h3>
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Nombre Completo</label>
              <input required type="text" className="w-full bg-gray-50 border border-gray-200 text-neutral-900 p-4 focus:outline-none focus:border-purple-500 transition-colors focus:bg-white" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Email</label>
              <input required type="email" className="w-full bg-gray-50 border border-gray-200 text-neutral-900 p-4 focus:outline-none focus:border-purple-500 transition-colors focus:bg-white" placeholder="email@ejemplo.com" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Modelo</label>
              <select className="w-full bg-gray-50 border border-gray-200 text-neutral-900 p-4 focus:outline-none focus:border-purple-500 transition-colors focus:bg-white appearance-none">
                <option>Seleccionar Categoría...</option>
                <option>Ruta - Aero / Climber</option>
                <option>Gravel - Adventure</option>
                <option>E-Bike - Performance</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Mensaje</label>
              <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 text-neutral-900 p-4 focus:outline-none focus:border-purple-500 transition-colors focus:bg-white" placeholder="Preferencias..."></textarea>
            </div>
             <button type="submit" disabled={formStatus === 'sending'} className={`w-full py-4 uppercase tracking-[0.2em] font-bold transition-all duration-300 disabled:opacity-50 text-white relative overflow-hidden group ${tornasolGradientGreen} shadow-md hover:shadow-lg`}>
               <span className="relative z-10">{formStatus === 'sending' ? 'Enviando...' : 'Solicitar Cotización'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;