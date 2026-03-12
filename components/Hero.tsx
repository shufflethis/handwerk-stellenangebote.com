import React from 'react';
import { View } from '../types';
import { Search } from 'lucide-react';

interface HeroProps {
  setView: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative bg-handwerk-blue overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/construction/1920/1080" 
          alt="Handwerker auf Baustelle" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Hier baut deine Zukunft. <br/>
            <span className="text-handwerk-orange">Jobs im Handwerk.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Verbinde dich mit den besten Betrieben in deiner Region. 
            Egal ob SHK, Elektro, Bau oder Holz – wir haben den passenden Job für dein Talent.
          </p>

          <div className="bg-white p-2 rounded-lg shadow-xl flex flex-col md:flex-row gap-2 max-w-2xl">
            <div className="flex-grow flex items-center px-4 bg-gray-50 rounded md:bg-transparent">
              <Search className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Was ist dein Gewerk?" 
                className="w-full py-3 bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
            <button 
              onClick={() => setView(View.JOBS)}
              className="bg-handwerk-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition duration-200"
            >
              Jobs finden
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-6 text-sm font-semibold text-gray-300">
            <span>Beliebt:</span>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <button onClick={() => setView(View.JOBS)} className="hover:text-white underline decoration-handwerk-orange underline-offset-4">Elektriker</button>
              <button onClick={() => setView(View.JOBS)} className="hover:text-white underline decoration-handwerk-orange underline-offset-4">Anlagenmechaniker</button>
              <button onClick={() => setView(View.JOBS)} className="hover:text-white underline decoration-handwerk-orange underline-offset-4">Tischler</button>
              <button onClick={() => setView(View.JOBS)} className="hover:text-white underline decoration-handwerk-orange underline-offset-4">Maurer</button>
              <button onClick={() => setView(View.JOBS)} className="hover:text-white underline decoration-handwerk-orange underline-offset-4">SHK</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Curve (CSS Clip Path or simple border radius trick) */}
      <div className="absolute bottom-0 w-full h-12 bg-white rounded-t-[50%] scale-x-150 translate-y-6"></div>
    </div>
  );
};

export default Hero;