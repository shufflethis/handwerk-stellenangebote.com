// HR-UPDATER: v1.0
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import JobBoard from '../components/JobBoard';
import EmployerTools from '../components/EmployerTools';
import ContentSection from '../components/ContentSection';
import Impressum from '../components/Impressum';
import StaedteSection from '../components/geo/StaedteSection';
import { View } from '../types';

const FAQ_HOME = [
  {
    q: 'Warum lohnt sich eine Karriere im Handwerk?',
    a: 'Das Handwerk bietet Krisensicherheit, sichtbare Ergebnisse und hervorragende Aufstiegschancen bis hin zur Selbstständigkeit als Meister. Mit über 130 Ausbildungsberufen ist für jeden etwas dabei.',
  },
  {
    q: 'Wie hoch sind die Gehälter im Handwerk?',
    a: 'Die Gehälter variieren nach Gewerk und Region. Ein Geselle verdient zwischen 30.000 und 45.000 Euro, ein Meister kann mit 50.000 Euro und mehr rechnen -- vergleichbar mit akademischen Gehältern.',
  },
  {
    q: 'Welche Weiterbildungen gibt es im Handwerk?',
    a: 'Vom Polier über den Techniker bis zum Meister oder einem anschließenden Studium -- die Karrierewege sind vielfältig. Viele Weiterbildungen werden staatlich gefördert.',
  },
  {
    q: 'Wie finde ich den passenden Handwerk-Job?',
    a: 'Nutzen Sie unsere Jobsuche mit Filtern nach Gewerk, Region und Beschäftigungsart. Wir listen aktuelle Stellenangebote von Top-Arbeitgebern aus dem gesamten deutschsprachigen Raum.',
  },
  {
    q: 'Ist das Handwerk zukunftssicher?',
    a: 'Absolut. Digitalisierung, Energiewende und Fachkräftemangel sorgen dafür, dass qualifizierte Handwerker gefragter sind denn je. Besonders Bereiche wie Wärmepumpentechnik und Smart Home boomen.',
  },
  {
    q: 'Kann ich als Quereinsteiger im Handwerk arbeiten?',
    a: 'Ja, viele Betriebe suchen auch motivierte Quereinsteiger, besonders in Bereichen wie Metallbau, Trockenbau oder als Helfer. Umschulungen und Anpassungsqualifizierungen erleichtern den Einstieg.',
  },
];

const FAQSection: React.FC = () => (
  <section className="py-16 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-handwerk-blue mb-4">
          Häufige Fragen zur Karriere im Handwerk
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Alles was Sie über eine Karriere im Handwerk wissen müssen -- von Gehalt bis Weiterbildung.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {FAQ_HOME.map((item, index) => (
          <details
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm group"
          >
            <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 font-semibold text-handwerk-blue hover:text-handwerk-orange transition list-none">
              <span className="pr-4">{item.q}</span>
              <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const CareerInfoSection: React.FC = () => (
  <section className="py-16 bg-handwerk-blue text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Karriere im Handwerk -- Ihr Weg nach oben</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-handwerk-orange mb-2">130+</div>
            <h3 className="font-bold text-lg mb-2">Ausbildungsberufe</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Das Handwerk bietet über 130 anerkannte Ausbildungsberufe -- von Elektrotechnik
              bis Goldschmiedekunst.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-handwerk-orange mb-2">5,6 Mio.</div>
            <h3 className="font-bold text-lg mb-2">Beschäftigte</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Das Handwerk ist einer der größten Wirtschaftsbereiche Deutschlands mit
              über einer Million Betriebe.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-handwerk-orange mb-2">250.000+</div>
            <h3 className="font-bold text-lg mb-2">Offene Stellen</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Der Fachkräftemangel im Handwerk sorgt für hervorragende Jobaussichten
              und steigende Gehälter.
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-800 rounded-xl p-6 md:p-8 shadow-xl">
          <h3 className="text-xl font-bold text-handwerk-blue mb-4">Der Karriereweg im Handwerk</h3>
          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>
              Eine Karriere im Handwerk beginnt typischerweise mit einer dualen Ausbildung, die zwischen
              zwei und dreieinhalb Jahren dauert. Nach der Gesellenprüfung stehen zahlreiche Weiterbildungsmöglichkeiten
              offen: Vom Techniker über den Polier bis hin zum Meistertitel.
            </p>
            <p>
              Mit dem Meisterbrief haben Sie nicht nur die Berechtigung, einen eigenen Betrieb zu führen,
              sondern erhalten auch die allgemeine Hochschulzugangsberechtigung. Immer mehr Handwerksmeister
              kombinieren ihre praktische Expertise mit einem Studium -- etwa in Betriebswirtschaft oder
              Bauingenieurwesen.
            </p>
            <p>
              Die Digitalisierung eröffnet zusätzliche Karrierechancen: Spezialisten für Smart-Home-Systeme,
              Wärmepumpentechnik oder CNC-gesteuerte Fertigung sind am Arbeitsmarkt besonders gefragt und
              können mit überdurchschnittlichen Gehältern rechnen.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <>
            <Hero setView={setCurrentView} />
            {/* Job listings prominent at top */}
            <JobBoard />
            <div className="bg-gray-50 py-12 text-center">
               <h3 className="text-2xl font-bold text-handwerk-blue mb-4">Wissen, was zählt</h3>
               <p className="mb-6 text-gray-600">Entdecken Sie unsere ausführlichen Berufsprofile.</p>
               <button onClick={() => setCurrentView(View.SECTORS)} className="text-handwerk-orange font-bold hover:underline">Zu den Gewerken &rarr;</button>
            </div>
            {/* Geo SEO: German cities */}
            <StaedteSection />
            {/* FAQ Section */}
            <FAQSection />
            {/* Career Info Section */}
            <CareerInfoSection />
          </>
        );
      case View.JOBS:
        return <JobBoard />;
      case View.EMPLOYERS:
        return <EmployerTools />;
      case View.SECTORS:
        return <ContentSection />;
      case View.IMPRESSUM:
        return <Impressum />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderContent()}
    </Layout>
  );
};

export default Home;