import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsData } from '@/data/news';
import { journalData } from '@/data/journals';

export default function Home() {
  // Get latest 3 news items
  const latestNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
  
  // Get latest 3 publications
  const latestPublications = [...journalData].sort((a, b) => b.year.localeCompare(a.year)).slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
         <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
     <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Integrated%20circuit%20chip%20technology%20background%20with%20blue%20tones%20and%20circuit%20patterns&sign=b391352b2705b7060fdd1e82416ce9e3')] bg-cover bg-center"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                探索科学前沿<br />引领技术创新
              </h1>
               <p className="text-xl md:text-2xl mb-8 text-green-100">
 我们致力于人工智能、生物医学工程和量子计算等前沿领域的研究，推动科技创新与社会发展。
</p>
              <div className="flex flex-wrap gap-4">
                 <Link 
                  to="/join" 
                  className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-colors"
                >
                  加入我们
                </Link>
                <Link 
                  to="/journals" 
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors" 
                >
                  浏览研究成果
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">关于我们</h2>
                 <div className="w-16 h-1 bg-green-600 mb-8"></div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  我们是一支充满活力的科研团队，专注于人工智能、生物医学工程和量子计算等前沿领域的研究。团队由张明教授领衔，现有教授2名，研究员4名，博士和硕士研究生20余名。
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  近年来，团队承担了国家自然科学基金、国家重点研发计划等多项国家级科研项目，在国际顶级期刊发表学术论文100余篇，申请发明专利30余项，多项研究成果已实现产业化应用。
                </p>
                <Link 
                  to="/members" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-800"
                >
                  了解团队成员 <i class="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
                    <img 
                      src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Laboratory%20research%20team&sign=61f62c59b59baeed3b1f686ebfdd311d" 
                      alt="研究团队" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Scientific%20conference&sign=27581ef295e8c0670549c3848cb735a3" 
                      alt="学术会议" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Laboratory%20equipment&sign=4faca10bf6c73a75a55dee542009ddb0" 
                      alt="实验设备" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
                    <img 
                      src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Research%20discussion&sign=823bd81074961c0812dc82271be7f2fb" 
                      alt="研究讨论" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Research Highlights Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">研究方向</h2>
               <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                我们聚焦国际科技前沿，面向国家重大需求，开展原创性、前瞻性研究
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
               <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i class="fa-solid fa-brain text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-{3} text-gray-800">人工智能</h3>
                <p className="text-gray-600 mb-4">
                  研究深度学习、计算机视觉、自然语言处理等人工智能核心技术，开发面向医疗、教育、金融等领域的智能应用系统。
                </p>
                <Link 
                   to="/journals" 
                   className="text-green-600 font-medium hover:text-green-800 inline-flex items-center"
                 >
                   查看相关论文 <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
               <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center mb-6">
                  <i class="fa-solid fa-dna text-2xl text-green-700"></i>
                </div>
                <h3 className="text-xl font-semibold mb-{3} text-gray-800">生物医学工程</h3>
                <p className="text-gray-600 mb-4">
                  探索生物医学信号处理、医学影像分析、生物材料等技术，开发新型医疗设备和诊断方法，推动精准医疗发展。
                </p>
                <Link 
                   to="/journals" 
                   className="text-green-600 font-medium hover:text-green-800 inline-flex items-center"
                 >
                   查看相关论文 <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
               <div className="w-14 h-14 bg-green-300 rounded-full flex items-center justify-center mb-6">
                  <i class="fa-solid fa-atom text-2xl text-green-800"></i>
                </div>
                <h3 className="text-xl font-semibold mb-{3} text-gray-800">量子计算</h3>
                <p className="text-gray-600 mb-4">
                  研究量子算法、量子通信和量子信息处理技术，开发量子计算应用系统，探索量子技术在密码学、材料科学等领域的应用。
                </p>
                <Link 
                   to="/journals" 
                   className="text-green-600 font-medium hover:text-green-800 inline-flex items-center"
                 >
                   查看相关论文 <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* News & Publications Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Latest News */}
              <div>
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">最新动态</h2>
                     <div className="w-12 h-1 bg-green-600"></div>
                  </div>
                  <Link 
                    to="/news" 
                    className="text-green-600 font-medium hover:text-green-800 hidden md:block"
                  >
                    查看全部
                  </Link>
                </div>
                
                <div className="space-y-6">
                  {latestNews.map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Research%20news%20${item.title}`} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                       <h3 className="font-medium text-gray-800 mb-1 group-hover:text-green-800 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center md:hidden">
  <Link 
    to="/news" 
    className="inline-block text-green-600 font-medium hover:text-green-800"
  >
    查看全部动态
                  </Link>
                </div>
              </div>
              
              {/* Latest Publications */}
              <div>
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">最新论文</h2>
                 <div className="w-12 h-1 bg-green-600"></div>
                  </div>
                  <Link 
                    to="/journals" 
                     className="text-green-600 font-medium hover:text-green-800 hidden md:block"
                  >
                    查看全部
                  </Link>
                </div>
                
                <div className="space-y-6">
                  {latestPublications.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center mb-2">
                         <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded mr-3">
 {item.year}
</span>
                         <h3 className="font-medium text-gray-800 group-hover:text-green-800 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{item.authors}</p>
                      <p className="text-gray-500 text-sm italic">
                        <span className="mr-1">{item.journal}</span>
                        {item.volume && `, Vol. ${item.volume}`}
                        {item.pages && `, pp. ${item.pages}`}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center md:hidden">
                  <Link 
                    to="/journals" 
                     className="inline-block text-green-600 font-medium hover:text-green-800"
                  >
                    查看全部论文
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Research Facilities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">研究设施</h2>
               <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                我们拥有先进的实验设备和完善的科研平台，为高质量研究提供有力支撑
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (<div key={i} className="aspect-square rounded-lg overflow-hidden group relative">
                  <img 
                    src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Laboratory%20equipment%20${i}`} 
                    alt={`研究设备 ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-medium">先进科研设备 {i}</h3>
                      <p className="text-sm text-gray-200">专业研究平台</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
               <Link 
                 to="/facility" 
                 className="inline-block bg-white border border-green-700 text-green-700 px-6 py-2 rounded-md hover:bg-green-50 transition-colors"
              >
                查看全部设施
              </Link>
            </div>
          </div>
        </section>
        
        {/* Join Us Section */}
         <section className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">加入我们</h2>
            <p className="max-w-2xl mx-auto mb-8 text-green-100">
              我们欢迎对科研充满热情、富有创新精神的优秀人才加入团队，共同探索科学前沿
            </p>
            <Link 
               to="/join" 
                className="inline-block bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-colors"
              >
                查看招聘信息
              </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}