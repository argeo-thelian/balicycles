import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { tornasoltextGreen, tornasolGradientGreen } from '../components/common/Logos';
import { createSlackMessage } from '../data/contactData';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // 1. Capturar los datos del formulario
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'), // Nuevo campo capturado
      model: formData.get('model'),
      message: formData.get('message')
    };

    // 2. Estructura del mensaje para Slack (Diseño "Blocks")
    const slackMessage = createSlackMessage(data);
    

    try {
      // --- CONFIGURACIÓN DE SLACK ---
      // Pega aquí tu URL de Webhook real:
      const WEBHOOK_URL = import.meta.env.VITE_SLACK_WEBHOOK_URL; 
      
      // NOTA TÉCNICA: Slack bloquea peticiones directas desde el navegador por seguridad (CORS).
      // Usamos 'no-cors' para enviar los datos de forma "opaca". El navegador no podrá leer la respuesta de éxito,
      // pero Slack recibirá el mensaje si la URL es correcta. 
      // Para una solución perfecta, usa un backend intermedio (ej. Cloud Function).
      
      if (WEBHOOK_URL.includes("XXXXXXXXXXXXXXXXXXXXXXXX")) {
        console.warn("⚠️ Debes configurar la WEBHOOK_URL en Contact.jsx");
      } else {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors', // Permite enviar sin esperar respuesta JSON válida por bloqueo CORS
          body: JSON.stringify(slackMessage)
        });
      }

      // Simulación de éxito para la UI (ya que no podemos leer la respuesta real en modo no-cors)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus('success');
    } catch (error) {
      console.error("Error enviando formulario", error);
      setFormStatus('idle');
      alert("Hubo un problema al enviar tu solicitud.");
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen animate-in zoom-in-95 duration-500 flex items-center bg-white">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionTitle title="Atención Privada" subtitle="Comienza tu viaje" />
          <p className="text-gray-600 mb-12 text-center md:text-left text-lg font-light">
            En BӑLì, cada bicicleta es configurada a la medida del ciclista. Llena el formulario para agendar una consulta con nuestros expertos.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center ${tornasoltextGreen} shadow-sm rounded-sm`}>
                <MapPin className={`w-8 h-8 text-purple-600 `} />
              </div>
              <div><h4 className="text-neutral-900 uppercase tracking-wider text-sm mb-1 font-bold">Showroom</h4><p className="text-gray-500">Polanco, CDMX</p></div>
            </div>
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center ${tornasoltextGreen} shadow-sm rounded-sm`}>
                <Phone className={`w-8 h-8 text-purple-600 `} />
              </div>
              <div><h4 className="text-neutral-900 uppercase tracking-wider text-sm mb-1 font-bold">Llámanos</h4><p className="text-gray-500">+52 (55) 1234 5678</p></div>
            </div>
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center ${tornasoltextGreen} shadow-sm rounded-sm`}>
                <Mail className={`w-8 h-8 text-purple-600 `}/>
              </div>
              <div><h4 className="text-neutral-900 uppercase tracking-wider text-sm mb-1 font-bold">Email</h4><p className="text-gray-500">vip@bali.bikes</p></div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-xl relative overflow-hidden rounded-sm">
          {formStatus === 'success' ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 text-center p-8 animate-in fade-in">
              <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
              <h3 className="text-2xl text-neutral-900 font-bold mb-2">Solicitud Recibida</h3>
              <p className="text-gray-500">Te contactaremos pronto.</p>
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Nombre Completo</label>
              <input name="fullName" required type="text" className="w-full bg-gray-50 border border-gray-200 text-neutral-900 p-4 focus:outline-none focus:border-purple-500 transition-colors focus:bg-white" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Email</label>
              <input name="email" type="email" className="w-full bg-gray-50 border border-gray-200 text-neutral-900 p-4 focus:outline-none focus:border-purple-500 transition-colors focus:bg-white" placeholder="email@ejemplo.com" />
            </div>
            <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Teléfono</label>
                <input name="phone" type="tel" className="w-full bg-gray-50 border border-gray-200 text-neutral-900 p-4 focus:outline-none focus:border-purple-500 transition-colors focus:bg-white" placeholder="55 1234 5678" />
              </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Modelo</label>
              <select name="model" className="w-full bg-gray-50 border border-gray-200 text-neutral-900 p-4 focus:outline-none focus:border-purple-500 transition-colors focus:bg-white appearance-none">
                <option value="General">Seleccionar Categoría...</option>
                <option value="Ruta">Ruta - Aero / Climber</option>
                <option value="Gravel">Gravel - Adventure</option>
                <option value="E-Bike">E-Bike - Performance</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Mensaje</label>
              <textarea name="message" rows="4" className="w-full bg-gray-50 border border-gray-200 text-neutral-900 p-4 focus:outline-none focus:border-purple-500 transition-colors focus:bg-white" placeholder="Preferencias..."></textarea>
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