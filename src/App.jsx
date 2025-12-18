import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRouter } from './routes/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-purple-200 selection:text-purple-900">
        <Navbar />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
