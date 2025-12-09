import React, { useState } from 'react';
import { MOCK_JOBS } from '../constants';
import { MapPin, Clock, Euro, Building, Search, Filter } from 'lucide-react';

const JobBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Alle');

  const categories = ['Alle', ...Array.from(new Set(MOCK_JOBS.map(j => j.category)))];

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'Alle' || job.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 bg-handwerk-grey/30 min-h-[80vh]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-handwerk-blue mb-4">Aktuelle Stellenangebote</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie hunderte offene Positionen bei Top-Arbeitgebern im Handwerk. 
            Vom Azubi bis zum Meister.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Stichwort, Beruf oder Firma..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-handwerk-orange focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-1/4 relative">
              <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-handwerk-orange outline-none bg-white appearance-none"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <button className="bg-handwerk-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition shadow-lg">
              Suchen
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition group ${job.isPromoted ? 'border-l-4 border-l-handwerk-orange' : ''}`}
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    {job.isPromoted && <span className="text-xs font-bold text-handwerk-orange uppercase tracking-wider mb-1 block">Top Arbeitgeber</span>}
                    <h3 className="text-xl font-bold text-handwerk-blue group-hover:text-handwerk-orange transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mt-1 font-medium">
                      <Building size={16} />
                      {job.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full">
                      <MapPin size={14} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full">
                      <Clock size={14} />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full">
                      <Euro size={14} />
                      {job.salaryRange}
                    </div>
                  </div>

                  <button className="bg-white border-2 border-handwerk-blue text-handwerk-blue px-6 py-2 rounded-lg font-semibold hover:bg-handwerk-blue hover:text-white transition whitespace-nowrap">
                    Details ansehen
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400">
                   <span>Gepostet: {job.datePosted}</span>
                   <span>Kategorie: {job.category}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">Keine Stellenangebote gefunden, die Ihren Kriterien entsprechen.</p>
              <button 
                onClick={() => {setSearchTerm(''); setFilterCategory('Alle');}}
                className="mt-4 text-handwerk-orange font-medium hover:underline"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;