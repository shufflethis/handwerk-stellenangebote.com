// HR-UPDATER: v1.0
import React from 'react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 'Elektriker, SHK, Maurer' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 'Tischler, Elektroniker, Zimmerer' },
  { name: 'München', region: 'Bayern', jobs: 'Anlagenmechaniker, Maler, Schreiner' },
  { name: 'Köln', region: 'Nordrhein-Westfalen', jobs: 'Dachdecker, Fliesenleger, Klempner' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 'Elektroniker, Metallbauer, Betonbauer' },
  { name: 'Stuttgart', region: 'Baden-Württemberg', jobs: 'Mechatroniker, Schreiner, Maler' },
  { name: 'Düsseldorf', region: 'Nordrhein-Westfalen', jobs: 'Tischler, SHK, Elektriker' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 'Maurer, Zimmerer, Isolierer' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 'Metallbauer, Betonbauer, Maler' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 'Elektroniker, SHK, Dachdecker' },
  { name: 'Bremen', region: 'Bremen', jobs: 'Tischler, Zimmerer, Klempner' },
  { name: 'Dresden', region: 'Sachsen', jobs: 'Maurer, Maler, Fliesenleger' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 'Anlagenmechaniker, Elektriker, Dachdecker' },
  { name: 'Nürnberg', region: 'Bayern', jobs: 'Schreiner, Metallbauer, SHK' },
  { name: 'Augsburg', region: 'Bayern', jobs: 'Metallbauer, Elektroniker, Tischler' },
  { name: 'Mannheim', region: 'Baden-Württemberg', jobs: 'Metallbauer, Maler, SHK' },
  { name: 'Bonn', region: 'Nordrhein-Westfalen', jobs: 'Elektriker, Maurer, Zimmerer' },
  { name: 'Freiburg', region: 'Baden-Württemberg', jobs: 'Zimmerer, Dachdecker, Schreiner' },
  { name: 'Magdeburg', region: 'Sachsen-Anhalt', jobs: 'Metallbauer, Maurer, Helfer' },
  { name: 'Heidelberg', region: 'Baden-Württemberg', jobs: 'Metallbauer, Elektroniker, Tischler' },
];

const StaedteSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-handwerk-blue mb-4">
            Handwerk-Jobs in Ihrer Stadt
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finden Sie Handwerk-Stellenangebote in ganz Deutschland. Ob Elektriker in Berlin,
            Anlagenmechaniker in München oder Tischler in Hamburg -- wir haben passende Jobs in Ihrer Region.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {GERMAN_CITIES.map((city) => (
            <div
              key={city.name}
              className="bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl p-4 transition group cursor-pointer"
            >
              <h3 className="font-bold text-handwerk-blue group-hover:text-handwerk-orange transition text-sm md:text-base">
                {city.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{city.region}</p>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">{city.jobs}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-handwerk-blue mb-4">
            Handwerk-Stellenangebote in Deutschland -- Regionale Jobsuche
          </h3>
          <div className="text-gray-600 space-y-3 text-sm md:text-base leading-relaxed">
            <p>
              Deutschland bietet eine Vielzahl an Karrieremöglichkeiten im Handwerk. In Ballungsräumen wie
              Berlin, München, Hamburg und Köln ist die Nachfrage nach qualifizierten Handwerkern besonders hoch.
              Ob Elektrotechnik, Sanitär-Heizung-Klima (SHK), Bauhauptgewerbe oder Holzgewerbe --
              in jeder Region werden Fachkräfte dringend gesucht.
            </p>
            <p>
              Besonders gefragt sind derzeit Elektroniker für Energie- und Gebäudetechnik, Anlagenmechaniker
              für Sanitär-, Heizungs- und Klimatechnik sowie Tischler und Zimmerer. Auch Quereinsteiger
              haben im Handwerk hervorragende Chancen, insbesondere in den Bereichen Metallbau,
              Malerei und Trockenbau.
            </p>
            <p>
              Die Gehälter im Handwerk variieren regional erheblich. In Süddeutschland (Bayern, Baden-Württemberg)
              liegen die Durchschnittsgehälter oft 10-15% über dem Bundesdurchschnitt. Gleichzeitig bieten
              ostdeutsche Städte wie Leipzig, Dresden und Magdeburg niedrigere Lebenshaltungskosten bei
              steigenden Löhnen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaedteSection;
