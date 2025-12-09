import React, { useState } from 'react';
import { generateJobAd } from '../services/geminiService';
import { Sparkles, CheckCircle, Copy, Loader2 } from 'lucide-react';

const EmployerTools: React.FC = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    skills: ''
  });
  const [generatedAd, setGeneratedAd] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const ad = await generateJobAd(formData);
    setGeneratedAd(ad);
    setIsLoading(false);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="bg-blue-100 text-handwerk-blue px-3 py-1 rounded-full text-sm font-semibold tracking-wide">FÜR ARBEITGEBER</span>
            <h2 className="text-4xl font-bold text-handwerk-blue mt-4 mb-6 leading-tight">
              Finden Sie die besten Handwerker – <span className="text-handwerk-orange">Schneller & Smarter</span>.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Der Fachkräftemangel ist die größte Herausforderung im Handwerk. Wir unterstützen Sie dabei, 
              sichtbar zu werden. Nutzen Sie unsere KI-Tools, um Stellenanzeigen zu schreiben, die wirklich performen.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Zugriff auf über 50.000 Fachkräfte',
                'Hohe Sichtbarkeit bei Google for Jobs',
                'Optimiert für mobile Bewerbungen (One-Click)',
                'KI-Unterstützung bei der Inserat-Erstellung'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             <img 
               src="https://picsum.photos/seed/meeting/600/400" 
               alt="Team Meeting im Handwerksbetrieb" 
               className="rounded-xl shadow-2xl"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-handwerk-orange hidden md:block">
                <p className="font-bold text-handwerk-blue text-lg">"Durch die KI-Optimierung haben wir<br/>3x mehr Bewerbungen erhalten."</p>
                <p className="text-sm text-gray-500 mt-2">– M. Bauer, Malermeister</p>
             </div>
          </div>
        </div>

        {/* AI Tool Section */}
        <div className="bg-gradient-to-br from-slate-900 to-handwerk-blue rounded-2xl p-8 md:p-12 shadow-2xl text-white">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-handwerk-orange" size={32} />
            <h3 className="text-3xl font-bold">KI Stellenanzeigen-Generator</h3>
          </div>
          <p className="mb-8 text-blue-100 max-w-2xl">
            Schreiben Sie keine langweiligen Texte mehr. Lassen Sie unsere KI basierend auf dem Gemini-Modell 
            eine perfekte, auf Handwerker zugeschnittene Anzeige in Sekunden erstellen.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <form onSubmit={handleGenerate} className="space-y-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <div>
                <label className="block text-sm font-medium mb-1">Stellentitel</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/20 rounded p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-handwerk-orange outline-none"
                  placeholder="z.B. Anlagenmechaniker SHK"
                  required
                  value={formData.jobTitle}
                  onChange={e => setFormData({...formData, jobTitle: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Firmenname</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/20 rounded p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-handwerk-orange outline-none"
                  placeholder="z.B. Müller Haustechnik GmbH"
                  required
                  value={formData.companyName}
                  onChange={e => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Standort</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/20 rounded p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-handwerk-orange outline-none"
                  placeholder="z.B. Hamburg"
                  required
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Wichtige Fähigkeiten / Anforderungen</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/20 rounded p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-handwerk-orange outline-none h-24"
                  placeholder="z.B. Führerschein Klasse B, Wärmepumpen-Erfahrung, Teamfähigkeit..."
                  required
                  value={formData.skills}
                  onChange={e => setFormData({...formData, skills: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-handwerk-orange hover:bg-orange-600 text-white font-bold py-3 rounded shadow-lg transition flex justify-center items-center gap-2"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                Anzeige generieren
              </button>
            </form>

            {/* Output Area */}
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-inner h-[600px] overflow-y-auto relative">
              {generatedAd ? (
                <>
                  <button 
                    className="absolute top-4 right-4 text-gray-400 hover:text-handwerk-blue"
                    title="Kopieren"
                    onClick={() => navigator.clipboard.writeText(generatedAd)}
                  >
                    <Copy size={20} />
                  </button>
                  <h4 className="font-bold text-gray-500 text-xs uppercase mb-4 border-b pb-2">Vorschau</h4>
                  <div className="prose prose-sm max-w-none whitespace-pre-line">
                    {generatedAd}
                  </div>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                  <Sparkles size={48} className="mb-4 text-gray-200" />
                  <p>Füllen Sie das Formular aus,<br/>um Ihren Entwurf zu sehen.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerTools;