import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import JobBoard from './components/JobBoard';
import EmployerTools from './components/EmployerTools';
import ContentSection from './components/ContentSection';
import Impressum from './components/Impressum';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <>
            <Hero setView={setCurrentView} />
            {/* Short preview of other sections on Home */}
            <JobBoard />
            <div className="bg-gray-50 py-12 text-center">
               <h3 className="text-2xl font-bold text-handwerk-blue mb-4">Wissen, was zählt</h3>
               <p className="mb-6 text-gray-600">Entdecken Sie unsere ausführlichen Berufsprofile.</p>
               <button onClick={() => setCurrentView(View.SECTORS)} className="text-handwerk-orange font-bold hover:underline">Zu den Gewerken &rarr;</button>
            </div>
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

export default App;