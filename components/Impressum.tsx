import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl text-gray-700">
      <h1 className="text-3xl font-bold text-handwerk-blue mb-8">Impressum</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-2 text-gray-900">Angaben gemäß § 5 TMG</h2>
          <p>
            Social Media Venture GmbH<br />
            Schliemannstraße 23<br />
            10437 Berlin<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-gray-900">Vertreten durch</h2>
          <p>
            Thomas Sander (Geschäftsführer)
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-gray-900">Kontakt</h2>
          <p>
            Telefon: +49 30 959 988 700<br />
            E-Mail: info@socialmediaventure.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-gray-900">Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Berlin-Charlottenburg<br />
            Registernummer: HRB 162557 B</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-gray-900">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE298885799
          </p>
        </section>

        <section className="border-t border-gray-200 pt-6 mt-8">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Haftungsausschluss (Disclaimer)</h2>
          <h3 className="font-bold mt-4 mb-2">Haftung für Inhalte</h3>
          <p className="text-sm">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          
          <h3 className="font-bold mt-4 mb-2">Haftung für Links</h3>
          <p className="text-sm">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
            der Seiten verantwortlich.
          </p>

          <h3 className="font-bold mt-4 mb-2">Urheberrecht</h3>
          <p className="text-sm">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
            jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Impressum;