import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsData } from '@/data/news';

export default function News() {
  // 状态管理：跟踪展开的新闻项和可见新闻数量
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [visibleCount, setVisibleCount] = useState(4); // 初始显示4条新闻
  
  // 切换新闻展开/收起状态
  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };
  
  // 加载更多新闻
  const loadMoreNews = () => {
    setVisibleCount(prev => Math.min(prev + 2, newsData.length));
  };
  
  // 确定当前应显示的新闻
  const visibleNews = newsData.slice(0, visibleCount);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">新闻资讯</h1>
         <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleNews.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={`https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Research%20news%20${item.title}`} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <i class="fa-regular fa-calendar mr-1"></i>
                    <span>{item.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-green-600 transition-colors">
                    {item.title}
                  </h2>
                  <p className={`text-gray-600 mb-4 transition-all duration-300 ${
                    expandedItems.includes(index) ? '' : 'line-clamp-3'
                  }`}>
                    {item.summary}
                  </p>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors"
                  >
                    {expandedItems.includes(index) ? (
                      <>收起 <i class="fa-solid fa-arrow-up ml-1 text-xs"></i></>
                    ) : (
                      <>阅读更多 <i class="fa-solid fa-arrow-down ml-1 text-xs"></i></>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* 仅当还有更多新闻时显示"查看更多新闻"按钮 */}
        {visibleCount < newsData.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={loadMoreNews}
              className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              查看更多新闻 <i class="fa-solid fa-angle-down ml-1"></i>
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}