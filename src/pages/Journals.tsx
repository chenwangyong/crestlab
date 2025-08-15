import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { journalData } from '@/data/journals';

export default function Journals() {
  const [yearFilter, setYearFilter] = useState('all');
  
  // 确保显示2021-2025五个年份
  const allYears = ['2025', '2024', '2023', '2017-2022'];
  const uniqueYears = ['all', ...allYears];
  
  const filteredJournals = yearFilter === 'all' 
    ? journalData 
    : journalData.filter(item => item.year === yearFilter);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">科研论文</h1>
         <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {uniqueYears.map(year => (
            <button
              key={year}
              onClick={() => setYearFilter(year)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                   yearFilter === year 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {year === 'all' ? '全部年份' : year}
            </button>
          ))}
        </div>
        
        <div className="space-y-6">
          {filteredJournals.length > 0 ? (
            filteredJournals.map((journal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/12 text-center">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      {journal.year}
                    </span>
                  </div>
                  <div className="md:w-11/12">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{journal.title}</h3>
                    <p className="text-gray-600 mb-2">{journal.authors}</p>
                    <p className="text-gray-500 text-sm mb-3">
                      <span className="italic">{journal.journal}</span>
                      {journal.volume && `, Vol. ${journal.volume}`}
                      {journal.pages && `, pp. ${journal.pages}`}
                    </p>
                    {journal.doi && (
                      <a 
                        href={journal.doi} 
                        target="_blank" 
                        rel="noopener noreferrer"
                          className="inline-flex items-center text-green-800 hover:text-green-900 text-sm font-medium"
                      >
                        <i class="fa-solid fa-link mr-1"></i> DOI: {journal.doi}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">没有找到该年份的论文</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}