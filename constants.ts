import { Job, TradeSector } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    category: 'Sonstiges',
    datePosted: '2026-03-15',
    isPromoted: true
  },
  {
    id: '2',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    category: 'Sonstiges',
    datePosted: '2026-03-15',
    isPromoted: true
  },
  {
    id: '3',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    category: 'Sonstiges',
    datePosted: '2026-03-15',
    isPromoted: true
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    category: 'Sonstiges',
    datePosted: '2026-03-15',
    isPromoted: false
  },
  {
    id: '5',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    category: 'Sonstiges',
    datePosted: '2026-03-15',
    isPromoted: false
  },
  {
    id: '6',
    title: 'Helfer im Handwerk (m/w/d)',
    company: 'Dahmen GmbH Trier',
    location: 'Trier',
    type: 'Vollzeit',
    category: 'Helfer/in - Ausbau',
    datePosted: '2026-03-13',
    isPromoted: false
  },
  {
    id: '7',
    title: 'Allrounder (m/w/d) - Handwerk',
    company: 'Delta - Dresden KG',
    location: 'Dresden',
    type: 'Vollzeit',
    category: 'Helfer/in - Ausbau',
    datePosted: '2026-03-12',
    isPromoted: false
  },
  {
    id: '8',
    title: 'Allrounder (m/w/d) im Handwerk',
    company: 'AUREA GmbH',
    location: 'Schwelm',
    type: 'Vollzeit',
    category: 'Helfer/in - Malerei, Lackiererei',
    datePosted: '2026-03-12',
    isPromoted: false
  },
  {
    id: '9',
    title: 'Helfer Handwerk m/w/d',
    company: 'active now - eine Marke der job meets life GmbH',
    location: 'Celle',
    type: 'Vollzeit',
    category: 'Helfer/in - Metallbearbeitung',
    datePosted: '2026-03-12',
    isPromoted: false
  },
  {
    id: '10',
    title: 'Handwerker m/w/d',
    company: 'NIHS GmbH',
    location: 'Lilienthal bei Bremen',
    type: 'Vollzeit',
    category: 'Isolierer/in',
    datePosted: '2026-03-12',
    isPromoted: false
  },
  {
    id: '11',
    title: 'Helfer - Handwerk (m/w/d)',
    company: 'iperdi AHR GmbH - Niederlassung Harburg',
    location: 'Hamburg',
    type: 'Vollzeit',
    category: 'Helfer/in - Feinmechanik, Werkzeugbau',
    datePosted: '2026-03-11',
    isPromoted: false
  },
  {
    id: '12',
    title: 'Konditor (m/w/d) mit Leidenschaft für Handwerk',
    company: 'NOURISH GmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    category: 'Konditor/in',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '13',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Fulda',
    type: 'Vollzeit',
    category: 'Maler/in und Lackierer/in - Gestaltung und Instandhaltung',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '14',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich-Schmid GmbH & CO. KG Wladimir - Sagorski -Straße Wladimir - Sagor GmbH & Co. KG',
    location: 'Bischofswerda',
    type: 'Vollzeit',
    category: 'Maler/in und Lackierer/in - Gestaltung und Instandhaltung',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '15',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Erfurt',
    type: 'Vollzeit',
    category: 'Maler/in und Lackierer/in - Gestaltung und Instandhaltung',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '16',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Plauen, Vogtland',
    type: 'Vollzeit',
    category: 'Maler/in und Lackierer/in - Gestaltung und Instandhaltung',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '17',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Weimar, Thüringen',
    type: 'Vollzeit',
    category: 'Maler/in und Lackierer/in - Gestaltung und Instandhaltung',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '18',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Radeberg, Sachsen',
    type: 'Vollzeit',
    category: 'Maler/in und Lackierer/in - Gestaltung und Instandhaltung',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '19',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Kamenz',
    type: 'Vollzeit',
    category: 'Maler/in und Lackierer/in - Gestaltung und Instandhaltung',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '20',
    title: 'Praktikant im Handwerk (m/w/d)',
    company: 'Heinrich Schmid GmbH & Co. KG',
    location: 'Bernburg (Saale)',
    type: 'Vollzeit',
    category: 'Maler/in und Lackierer/in - Gestaltung und Instandhaltung',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '21',
    title: 'Handwerker  m/w/d',
    company: 'Speed Cars Patrick Reinsdorf',
    location: 'Bad Lauchstädt, Goethestadt',
    type: 'Vollzeit',
    category: 'Fahrzeugpfleger/in',
    datePosted: '2026-03-10',
    isPromoted: false
  },
  {
    id: '22',
    title: 'Elektromeister ( Handwerk )',
    company: 'Silvia Bernardo S-TimA',
    location: 'Krefeld',
    type: 'Vollzeit',
    category: 'Elektrotechnikermeister/in/Bachelor Professional im Elektrotechniker-Handwerk',
    datePosted: '2026-03-09',
    isPromoted: false
  },
  {
    id: '23',
    title: 'Helfer (m/w/d) Handwerk',
    company: 'Tempton Personaldienstleistungen GmbH NL Oberhausen',
    location: 'Oberhausen, Rheinland',
    type: 'Vollzeit',
    category: 'Tischler/in',
    datePosted: '2026-03-09',
    isPromoted: false
  },
  {
    id: '24',
    title: 'Handwerker (m/w/d)',
    company: 'ASG - Anerkannte Schulgesellschaft mbH',
    location: 'Annaberg-Buchholz',
    type: 'Vollzeit',
    category: 'Fachkraft - Gebäudetechnik',
    datePosted: '2026-03-09',
    isPromoted: false
  },
  {
    id: '25',
    title: 'Maler im Handwerk (m/w/d)',
    company: 'ARWA Personaldienstleistungen GmbH',
    location: 'Jena',
    type: 'Vollzeit',
    category: 'Fassadenmonteur/in',
    datePosted: '2026-03-07',
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