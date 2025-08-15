import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryData } from '@/data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);
  
  const categories = ['all', ...Array.from(new Set(galleryData.map(item => item.category)))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">生活掠影</h1>
         <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                   activeCategory === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? '全部' : 
               category === 'conference' ? '学术会议' : 
               category === 'lab' ? '实验室日常' : 
               category === 'outing' ? '团建活动' : 
               category === 'graduation' ? '毕业季' : category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredImages.map((item, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Laboratory%20${item.category}%20photo`} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-colors duration-300 flex items-center justify-center">
                <i class="fa-solid fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"></i>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Image Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 right-4 text-white text-2xl">
            <i class="fa-solid fa-times"></i>
          </button>
          <div className="max-w-4xl max-h-[80vh]">
            <img 
              src={`https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Laboratory%20${galleryData[selectedImage].category}%20photo`} 
              alt={galleryData[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="text-white mt-4 text-center">
              <h3 className="text-xl font-medium">{galleryData[selectedImage].title}</h3>
              <p className="text-gray-300">{galleryData[selectedImage].date}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}