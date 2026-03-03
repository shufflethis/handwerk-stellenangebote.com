import { Job, TradeSector } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Mitarbeiter (m/w/d) im Gartenservice und Handwerk',
    company: 'Norden gartenservice',
    location: 'Husum, Nordsee',
    type: 'Vollzeit',
    category: 'Helfer/in - Gartenbau',
    datePosted: '2026-03-03',
    isPromoted: true
  },
  {
    id: '2',
    title: 'MetallbauermeisterB. Prof. Metallbauer-Handwerk (m/w/d)',
    company: 'E.D.E.L. Zeitarbeit GmbH',
    location: 'Augsburg, Bayern',
    type: 'Vollzeit',
    category: 'Metallbauermeister/in/Bachelor Professional im Metallbauer-Handwerk',
    datePosted: '2026-03-03',
    isPromoted: true
  },
  {
    id: '3',
    title: 'Kaufmann/-frau für Büromanagement im Handwerk',
    company: 'Werner & Sohn GmbH',
    location: 'Fuldatal',
    type: 'Vollzeit',
    category: 'Kaufmann/-frau - Büromanagement',
    datePosted: '2026-03-03',
    isPromoted: true
  },
  {
    id: '4',
    title: 'Ausbildung zum Elektroniker (m/w/d) im Handwerk',
    company: 'Schneider & Steffens GmbH & Co. KG',
    location: 'Lüneburg',
    type: 'Vollzeit',
    category: 'Elektroniker/in - Energie- und Gebäudetechnik',
    datePosted: '2026-03-03',
    isPromoted: false
  },
  {
    id: '5',
    title: 'Büroleiterin - Handwerk',
    company: 'OSNEBAU GmbH',
    location: 'Obertshausen',
    type: 'Vollzeit',
    category: 'Büroleiter/in - Handwerk',
    datePosted: '2026-03-02',
    isPromoted: false
  },
  {
    id: '6',
    title: 'Elektroniker Automatisierungstechnik Handwerk (m/w/d)',
    company: 'Arena Personal Management GmbH',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    category: 'Elektroniker/in - Automatisierungstechnik (Handwerk)',
    datePosted: '2026-03-02',
    isPromoted: false
  },
  {
    id: '7',
    title: 'Metallbauer Handwerk m/w/d',
    company: 'Arena Personal Management GmbH',
    location: 'Heidelberg, Neckar',
    type: 'Vollzeit',
    category: 'Metallbauer/in - Konstruktionstechnik',
    datePosted: '2026-03-02',
    isPromoted: false
  },
  {
    id: '8',
    title: 'Allrounder – Handwerk (m/w/d)',
    company: 'STÜWA Konrad Stükerjürgen GmbH',
    location: 'Rietberg',
    type: 'Vollzeit',
    category: 'Helfer/in - Tiefbau',
    datePosted: '2026-03-02',
    isPromoted: false
  },
  {
    id: '9',
    title: 'Malerhelfer (m/w/d) Handwerk',
    company: 'WEISS Personalmanagement GmbH - Darmstadt',
    location: 'Darmstadt',
    type: 'Vollzeit',
    category: 'Helfer/in - Malerei, Lackiererei',
    datePosted: '2026-03-02',
    isPromoted: false
  },
  {
    id: '10',
    title: 'Helfer Handwerk m/w/d',
    company: 'Actief Personalmanagement GmbH',
    location: 'Biebelried',
    type: 'Vollzeit',
    category: 'Helfer/in - Feinmechanik, Werkzeugbau',
    datePosted: '2026-03-02',
    isPromoted: false
  },
  {
    id: '11',
    title: 'Handwerker (m/w/d)',
    company: 'NKV GmbH',
    location: 'Melle, Wiehengeb',
    type: 'Vollzeit',
    category: 'Tischler/in',
    datePosted: '2026-03-02',
    isPromoted: false
  },
  {
    id: '12',
    title: 'Mitarbeiter im Handwerk (m/w/d)',
    company: 'AlphaConsult KG - Magdeburg',
    location: 'Magdeburg',
    type: 'Vollzeit',
    category: 'Helfer/in - Metallbau',
    datePosted: '2026-03-01',
    isPromoted: false
  },
  {
    id: '13',
    title: 'Fachhelfer Handwerk (m/w/d)',
    company: 'AlphaConsult KG - BS Mannheim',
    location: 'Mannheim',
    type: 'Vollzeit',
    category: 'Helfer/in - Metallbau',
    datePosted: '2026-02-27',
    isPromoted: false
  },
  {
    id: '14',
    title: 'Mitarbeiter im Handwerk (m/w/d)',
    company: 'TimePartner Personalmanagement GmbH',
    location: 'Trier',
    type: 'Vollzeit',
    category: 'Kunsthandwerker/in',
    datePosted: '2026-02-26',
    isPromoted: false
  },
  {
    id: '15',
    title: 'Produktionsmitarbeiter (m/w/d) Handwerk',
    company: 'Walter-Fach-Kraft Personal GmbH',
    location: 'Syke',
    type: 'Vollzeit',
    category: 'Beton- und Stahlbetonbauer/in',
    datePosted: '2026-02-26',
    isPromoted: false
  },
  {
    id: '16',
    title: 'Maler im Handwerk (m/w/d)',
    company: 'ARWA Personaldienstleistungen GmbH',
    location: 'Sarstedt',
    type: 'Vollzeit',
    category: 'Maler/in und Lackierer/in - Maler/in',
    datePosted: '2026-02-25',
    isPromoted: false
  },
  {
    id: '17',
    title: 'Quereinsteiger m/w/d im Handwerk',
    company: 'Isolierungen Leipzig GmbH Abt. P',
    location: 'Leipzig',
    type: 'Vollzeit',
    category: 'Industrie-Isolierer/in',
    datePosted: '2026-02-24',
    isPromoted: false
  },
  {
    id: '18',
    title: 'Elektroniker - Automatisierungstechnik (Handwerk) (m/w/d)',
    company: 'iperdi AHR GmbH - Niederlassung Bremen',
    location: 'Loxstedt',
    type: 'Vollzeit',
    category: 'Elektroniker/in - Automatisierungstechnik (Handwerk)',
    datePosted: '2026-02-20',
    isPromoted: false
  },
  {
    id: '19',
    title: 'Quereinsteiger (m/w/d) im Handwerk',
    company: 'Office People GmbH Niederlassung Greven Personaldienstleitungen',
    location: 'Greven, Westfalen',
    type: 'Vollzeit',
    category: 'Helfer/in - Metallbearbeitung',
    datePosted: '2026-02-18',
    isPromoted: false
  },
  {
    id: '20',
    title: 'Handwerk mit Haltung!',
    company: 'Ipek Sanierung GmbH',
    location: 'Bochum',
    type: 'Vollzeit',
    category: 'Leckageorter/in',
    datePosted: '2026-02-18',
    isPromoted: false
  },
  {
    id: '21',
    title: 'Schlosser im Handwerk (m/w/d)',
    company: 'Arena Personal Management GmbH - Niederlassung Ludwigshafen',
    location: 'Heppenheim (Bergstraße)',
    type: 'Vollzeit',
    category: 'Betriebsschlosser/in',
    datePosted: '2026-02-18',
    isPromoted: false
  },
  {
    id: '22',
    title: 'Fachkraft im Handwerk (m/w/d)',
    company: 'persona service AG & Co. KG Leonberg',
    location: 'Leonberg, Württemberg',
    type: 'Vollzeit',
    category: 'Betriebsassistent/in - Handwerk',
    datePosted: '2026-02-11',
    isPromoted: false
  },
  {
    id: '23',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Leipzig',
    type: 'Vollzeit',
    category: 'Maler- und Lackierermeister/in/Bachelor Professional im Maler- und Lackierer-Handwerk',
    datePosted: '2026-02-11',
    isPromoted: false
  },
  {
    id: '24',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG Innenausbau + Brandschutz',
    location: 'Limbach-Oberfrohna',
    type: 'Vollzeit',
    category: 'Trockenbaumonteur/in',
    datePosted: '2026-02-11',
    isPromoted: false
  },
  {
    id: '25',
    title: 'Betriebsassistent/in - Handwerk',
    company: 'Marche Restaurants Österreich GmbH',
    location: 'Rannersdorf',
    type: 'Vollzeit',
    category: 'Betriebsassistent/in - Handwerk',
    datePosted: '2026-02-06',
    isPromoted: false
  }
];

export const SECTORS: TradeSector[] = [
  {
    id: 'elektro',
    name: 'Elektrotechnik',
    description: 'Die Zukunft ist elektrisch. Von Smart Home bis zur Industriemontage.',
    keywords: ['Elektroniker', 'Systemintegration', 'Schaltschrankbau'],
    imageUrl: 'https://picsum.photos/seed/elektro/800/600',
    averageSalary: '42.000€ - 65.000€',
    futureOutlook: 'Hervorragend'
  },
  {
    id: 'shk',
    name: 'Sanitär, Heizung, Klima',
    description: 'Klimaschutz beginnt im Heizungskeller. Wärmepumpen und moderne Bäder.',
    keywords: ['Anlagenmechaniker', 'Klempner', 'Lüftungsbauer'],
    imageUrl: 'https://picsum.photos/seed/shk/800/600',
    averageSalary: '40.000€ - 60.000€',
    futureOutlook: 'Sehr gut (Energiewende)'
  },
  {
    id: 'bau',
    name: 'Bauhauptgewerbe',
    description: 'Wir bauen Deutschland. Maurer, Betonbauer und Straßenbauer gesucht.',
    keywords: ['Maurer', 'Zimmerer', 'Betonbauer'],
    imageUrl: 'https://picsum.photos/seed/bau/800/600',
    averageSalary: '45.000€ - 55.000€',
    futureOutlook: 'Stabil'
  },
  {
    id: 'holz',
    name: 'Holzgewerbe',
    description: 'Tradition trifft Moderne. Möbelbau, Innenausbau und Fenster.',
    keywords: ['Tischler', 'Schreiner', 'Fensterbauer'],
    imageUrl: 'https://picsum.photos/seed/holz/800/600',
    averageSalary: '38.000€ - 50.000€',
    futureOutlook: 'Gut'
  }
];

export const FAQ_ITEMS = [
  {
    q: "Warum lohnt sich eine Karriere im Handwerk?",
    a: "Das Handwerk bietet Krisensicherheit, sichtbare Ergebnisse und hervorragende Aufstiegschancen bis hin zur Selbstständigkeit als Meister."
  },
  {
    q: "Wie hoch sind die Gehälter im Handwerk?",
    a: "Die Gehälter variieren stark nach Gewerk und Region. Ein angestellter Meister kann jedoch oft mit akademischen Gehältern mithalten (50.000€+)."
  },
  {
    q: "Welche Weiterbildungen gibt es?",
    a: "Vom Polier über den Techniker bis zum Meister oder einem anschließenden Studium – die Wege sind vielfältig."
  }
];