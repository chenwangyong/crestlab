import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { membersData } from '@/data/members';

export default function Members() {
  const [category, setCategory] = useState('all');
  
  const filteredMembers = category === 'all' 
    ? membersData 
    : membersData.filter(member => member.category === category);
  
  const categories = ['all', ...Array.from(new Set(membersData.map(member => member.category)))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">团队成员</h1>
         <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                   category === cat 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
               {cat === 'all' ? '全部成员' : 
                 cat === 'faculty' ? '教授' : 
                 cat === 'researchAssistant' ? '科研助理' : 
                 cat === 'currentStudent' ? '在读生' : 
                 cat === 'graduate' ? '毕业生' : cat}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20photo%20of%20${member.name}`} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                 {member.isLeader && (
                   <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                     负责人
                   </div>
                 )}
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                 <p className="text-green-600 mb-2">{member.position}</p>
                <p className="text-gray-500 text-sm mb-3">{member.researchArea}</p>
                <div className="flex justify-center space-x-3 text-gray-500">
                  {member.email && (
                     <a href={`mailto:${member.email}`} className="hover:text-green-600 transition-colors">
                      <i class="fa-regular fa-envelope"></i>
                    </a>
                  )}
                  {member.homepage && (
                     <a href={member.homepage} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                      <i class="fa-solid fa-globe"></i>
                    </a>
                  )}
                  {member.googleScholar && (
                     <a href={member.googleScholar} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                      <i class="fa-solid fa-graduation-cap"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}