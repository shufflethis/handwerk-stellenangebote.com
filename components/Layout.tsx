import React, { useState } from 'react';
import { View } from '../types';
import { Menu, X, Hammer, Briefcase, Users, Phone, MapPin } from 'lucide-react';

interface LayoutProps {
  currentView: View;
  setView: (view: View) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, setView, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Startseite', view: View.HOME },
    { label: 'Stellenangebote', view: View.JOBS },
    { label: 'Gewerke Infos', view: View.SECTORS },
    { label: 'Für Arbeitgeber', view: View.EMPLOYERS },
  ];

  const handleNavClick = (view: View) => {
    setView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-handwerk-text">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleNavClick(View.HOME)}
            >
              <div className="bg-handwerk-orange p-2 rounded text-white group-hover:bg-orange-600 transition">
                <Hammer size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold leading-none text-handwerk-blue">HANDWERK</h1>
                <span className="text-xs font-semibold text-gray-500 tracking-wider">STELLENANGEBOTE</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`font-medium transition-colors hover:text-handwerk-orange ${
                    currentView === item.view ? 'text-handwerk-blue font-bold border-b-2 border-handwerk-orange' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-handwerk-blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-lg absolute w-full">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-left text-lg py-2 border-b border-gray-50 ${
                    currentView === item.view ? 'text-handwerk-orange font-bold' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-handwerk-blue text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Hammer className="text-handwerk-orange" />
                <span className="font-bold text-xl">Handwerk Jobs</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Die führende Plattform für Fachkräfte und Betriebe im deutschsprachigen Raum. 
                Wir bringen das Handwerk zusammen.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 border-l-4 border-handwerk-orange pl-3">Für Bewerber</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => handleNavClick(View.JOBS)} className="hover:text-white transition">Jobsuche</button></li>
                <li><button onClick={() => handleNavClick(View.SECTORS)} className="hover:text-white transition">Berufsbilder</button></li>
                <li><span className="text-gray-500 cursor-not-allowed">Gehaltsvergleich</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-l-4 border-handwerk-orange pl-3">Für Arbeitgeber</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => handleNavClick(View.EMPLOYERS)} className="hover:text-white transition">Stelle schalten</button></li>
                <li><button onClick={() => handleNavClick(View.EMPLOYERS)} className="hover:text-white transition">Preise & Pakete</button></li>
                <li><button onClick={() => handleNavClick(View.EMPLOYERS)} className="hover:text-white transition">AI Inserat-Generator</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-l-4 border-handwerk-orange pl-3">Kontakt</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2"><MapPin size={16} /> Handwerkstraße 1, 10437 Berlin</li>
                <li className="flex items-center gap-2"><Phone size={16} /> +49 30 403 6654 32</li>
                <li className="flex items-center gap-2"><Users size={16} /> support@handwerk-jobs.de</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Handwerk Stellenangebote. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => handleNavClick(View.IMPRESSUM)} className="hover:text-white">Impressum</button>
              <button onClick={() => handleNavClick(View.IMPRESSUM)} className="hover:text-white">Datenschutz</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;