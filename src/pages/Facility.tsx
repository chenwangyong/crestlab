import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { facilityData } from '@/data/facility';

export default function Facility() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">研究设施</h1>
         <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityData.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Laboratory%20equipment%20${facility.name}`} 
                  alt={facility.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{facility.name}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <div className="text-sm text-gray-500">
                  <p><span className="font-medium">主要功能:</span> {facility.functions}</p>
                  <p><span className="font-medium">购置时间:</span> {facility.purchaseDate}</p>
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