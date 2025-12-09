import { Job, TradeSector } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Anlagenmechaniker SHK (m/w/d)',
    company: 'Müller Haustechnik GmbH',
    location: 'Hamburg',
    type: 'Vollzeit',
    salaryRange: '45.000€ - 55.000€',
    datePosted: 'Vor 2 Tagen',
    category: 'SHK',
    isPromoted: true
  },
  {
    id: '2',
    title: 'Elektromeister für Projektleitung',
    company: 'Elektro Schmidt & Söhne',
    location: 'München',
    type: 'Meisterstelle',
    salaryRange: '60.000€ - 75.000€',
    datePosted: 'Heute',
    category: 'Elektro',
    isPromoted: true
  },
  {
    id: '3',
    title: 'Tischler / Schreiner für Möbelbau',
    company: 'Holzdesign Weber',
    location: 'Berlin',
    type: 'Vollzeit',
    salaryRange: '38.000€ - 48.000€',
    datePosted: 'Vor 1 Woche',
    category: 'Holz',
    isPromoted: false
  },
  {
    id: '4',
    title: 'Dachdecker Geselle (m/w/d)',
    company: 'Bedachungen Nord',
    location: 'Kiel',
    type: 'Vollzeit',
    salaryRange: '40.000€ - 50.000€',
    datePosted: 'Vor 3 Tagen',
    category: 'Bau',
    isPromoted: false
  },
  {
    id: '5',
    title: 'Auszubildender KFZ-Mechatroniker',
    company: 'AutoService Meyer',
    location: 'Stuttgart',
    type: 'Ausbildung',
    salaryRange: 'Ausbildungsvergütung',
    datePosted: 'Gestern',
    category: 'KFZ',
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