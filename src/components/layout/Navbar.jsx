import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Wind, Mountain, Zap } from 'lucide-react';
import { BrandLogo, ExternalLogo, ExternalBackLogo, BrandBaliLogo, tornasolGradient, tornasolText, tornasoltextGreen, tornasolGradientGreen } from '../common/Logos';
import { useScroll } from '../../hooks/useScroll';

const navItems = [
  { id: '/', label: 'Inicio', icon: null },
  { id: '/nosotros', label: 'Nosotros', icon: null },
  { id: '/ruta', label: 'Ruta', icon: Wind },
  { id: '/gravel', label: 'Gravel', icon: Mountain },
  { id: '/ebikes', label: 'E-Bikes', icon: Zap },
  { id: '/contacto', label: 'Contacto', icon: null },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScroll(50);
  const navigate = useNavigate();
  const location = useLocation();

  // Lógica: Transparente solo en el Home y cuando estamos arriba del todo
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  // Estilos dinámicos
  const navBackground = isTransparent
    ? 'bg-transparent py-6'
    : 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm';

  // Color del texto: Blanco en transparente, Oscuro en sólido
  const textColor = isTransparent ? 'text-white' : 'text-neutral-900';
  const subTextColor = isTransparent ? 'text-gray-300' : 'text-gray-500';

  // Filtro para el Logo: Si el fondo es transparente (oscuro por la imagen), invertimos el logo negro a blanco
  const logoFilter = isTransparent ? 'invert' : '';

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${navBackground}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div onClick={() => handleNavigate('/')} className="cursor-pointer flex items-center gap-2 group">
            <div className={`flex items-center gap-2 transition-all duration-500 `}>
              <ExternalBackLogo href="./assets/icons/bali-icons-html.svg#tamal" className="w-10" />
              <ExternalLogo href="./assets/icons/bali-icons-html.svg#letters" className="w-15" />
            </div>
            <span className={`text-xl font-bold tracking-[0.2em] flex items-center transition-colors duration-300 ${textColor}`}>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${
                  location.pathname === item.id 
                    ? `font-bold ${textColor}` // Activo
                    : `${subTextColor} hover:${textColor}` // Inactivo
                }`}
              >
                {/* Línea inferior animada */}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${tornasolGradientGreen} transition-all duration-300 group-hover:w-full ${location.pathname === item.id ? 'w-full' : ''}`}></span>
                {/* Efecto hover tornasol en el texto */}
                <span className={`group-hover:${tornasoltextGreen} transition-all duration-300`}>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`md:hidden transition-colors duration-300 ${textColor}`}  onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top-10 text-neutral-900">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-2xl uppercase tracking-[0.2em] font-light flex items-center gap-4 group ${location.pathname === item.id ? tornasoltextGreen : 'text-neutral-900'}`}
            >
              {item.icon && <item.icon className={`w-6 h-6 group-hover:text-purple-600 ${location.pathname === item.id ? 'text-purple-600' : 'text-neutral-600'}`} />}
              <span className={`group-hover:${tornasoltextGreen}`}>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
};