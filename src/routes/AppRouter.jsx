import { Routes, Route } from 'react-router-dom';
import { Wind, Mountain, Zap } from 'lucide-react';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Contact from '../pages/Contact';
import About from '../pages/About';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} /> {/* Nueva ruta agregada */}
      <Route path="/ruta" element={<Catalog category="ruta" title="Road Performance" subtitle="Velocidad Pura" icon={Wind} />} />
      <Route path="/gravel" element={<Catalog category="gravel" title="Gravel & Adventure" subtitle="Terreno Mixto" icon={Mountain} />} />
      <Route path="/ebikes" element={<Catalog category="electrica" title="E-Power Series" subtitle="Asistencia Inteligente" icon={Zap} />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="*" element={<Home />} /> {/* Fallback a Home */}
    </Routes>
  );
};
