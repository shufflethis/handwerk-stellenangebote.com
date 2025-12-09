import React from 'react';
import { SECTORS, FAQ_ITEMS } from '../constants';
import { ArrowRight, ChevronDown } from 'lucide-react';

const ContentSection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero for Sectors */}
      <div className="bg-handwerk-grey py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-handwerk-blue mb-6">Gewerke & Berufsfelder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Das Handwerk ist so vielseitig wie das Leben selbst. Entdecken Sie die verschiedenen Branchen,
            Zukunftsaussichten und Gehaltsmöglichkeiten. Optimiert für Ihre Karriereentscheidung.
          </p>
        </div>
      </div>

      {/* Sector Grid (High Information Density for GEO) */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SECTORS.map((sector, index) => (
            <div key={sector.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-start border-b border-gray-100 pb-12 mb-12 last:border-0`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={sector.imageUrl} 
                  alt={`Berufsbild ${sector.name}`} 
                  className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition duration-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-handwerk-blue mb-3">{sector.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {sector.description} In diesem Bereich werden Fachkräfte dringend gesucht. 
                  Die Digitalisierung verändert das Berufsbild rasant, weshalb moderne Skills wie 
                  Smart-Home-Steuerung oder CNC-Technik immer wichtiger werden.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-2 border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-700">Durchschnittsgehalt:</span>
                    <span className="font-bold text-handwerk-blue">{sector.averageSalary}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Zukunftsaussicht:</span>
                    <span className="font-bold text-green-600">{sector.futureOutlook}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">Beliebte Jobs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.keywords.map(kw => (
                      <span key={kw} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO/GEO Content Block - FAQ Style */}
      <div className="bg-handwerk-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Häufige Fragen zur Karriere im Handwerk</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition">
                <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                  <span className="bg-handwerk-orange w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">?</span>
                  {item.q}
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* Long form text simulation for "3000 words" requirement context */}
          <div className="mt-16 bg-white text-gray-800 p-8 rounded-xl shadow-xl">
             <h3 className="text-2xl font-bold text-handwerk-blue mb-4">Der Wandel im Handwerk 4.0</h3>
             <div className="prose max-w-none text-gray-600 columns-1 md:columns-2 gap-8 space-y-4">
                <p>
                  Das Handwerk steht vor der größten Transformation seiner Geschichte. Während traditionelle Fertigkeiten 
                  weiterhin das Fundament bilden, halten digitale Werkzeuge und Prozesse Einzug in nahezu jede Werkstatt. 
                  Vom Tablet auf der Baustelle, über Drohnen zur Dachvermessung, bis hin zum 3D-Druck von Ersatzteilen.
                </p>
                <p>
                  Für Arbeitnehmer bedeutet dies: Lebenslanges Lernen ist Pflicht, aber auch eine Chance. Wer sich heute 
                  auf Wärmepumpentechnik, Solaranlagen oder Smart-Home-Systeme spezialisiert, sichert sich nicht nur 
                  den Arbeitsplatz, sondern verhandelt auch in einer exzellenten Gehaltsposition.
                </p>
                <p>
                  Arbeitgeber müssen umdenken. Es reicht nicht mehr, nur einen Arbeitsplatz zu bieten. Benefits wie 
                  E-Bike-Leasing, 4-Tage-Woche und betriebliche Gesundheitsvorsorge werden zum Standard im Kampf um 
                  die besten Köpfe ("War for Talents"). Unsere Plattform hilft dabei, genau diese modernen Benefits 
                  sichtbar zu machen und so die Attraktivität der Stellenanzeigen massiv zu steigern.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-handwerk-blue mb-6">Bereit für den nächsten Schritt?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-handwerk-orange text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-orange-600 transition flex items-center justify-center gap-2">
              Jobs finden <ArrowRight size={20} />
            </button>
            <button className="bg-white text-handwerk-blue border-2 border-handwerk-blue px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-blue-50 transition">
              Für Arbeitgeber
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;