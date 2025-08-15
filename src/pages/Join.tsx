import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { joinData } from '@/data/join';

export default function Join() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">加入我们</h1>
         <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            我们欢迎对我们研究方向感兴趣的优秀学生和研究人员加入团队，共同探索科学前沿，创造创新成果。
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">开放职位</h2>
              
              {joinData.openPositions.length > 0 ? (
                <div className="space-y-6">
                  {joinData.openPositions.map((position, index) => (
                    <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-800">{position.title}</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded">
                          招募中
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{position.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">任职要求:</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                          {position.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">岗位职责:</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                          {position.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                       <a 
                        href={`mailto:${joinData.contact.email}?subject=申请${position.title}职位`}
                        className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors"
                      >
                        申请该职位
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded">
                  <p className="text-gray-500">目前没有开放职位</p>
                </div>
              )}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">申请流程</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8 relative">
                  {joinData.applicationProcess.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center z-10 relative">
 {index + 1}
</div>
                      </div>
                      <div className="ml-4 pb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4 text-gray-800">联系方式</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                   <i class="fa-solid fa-envelope text-green-600 mt-1 mr-3 text-lg"></i>
                  <div>
                    <p className="text-sm text-gray-500">电子邮箱</p>
                    <a href={`mailto:${joinData.contact.email}`} className="text-gray-800 hover:text-blue-600 transition-colors">
                      {joinData.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                   <i class="fa-solid fa-phone text-green-600 mt-1 mr-3 text-lg"></i>
                  <div>
                    <p className="text-sm text-gray-500">联系电话</p>
                    <p className="text-gray-800">{joinData.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                 <i class="fa-solid fa-map-marker-alt text-green-600 mt-1 mr-3 text-lg"></i>
                  <div>
                    <p className="text-sm text-gray-500">实验室地址</p>
                    <p className="text-gray-800">{joinData.contact.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">申请材料</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <i class="fa-regular fa-file-pdf text-red-500 mr-2"></i>
                    个人简历 (PDF格式)
                  </li>
                  <li className="flex items-center">
                    <i class="fa-regular fa-file-word text-blue-500 mr-2"></i>
                    研究计划书
                  </li>
                  <li className="flex items-center">
                    <i class="fa-regular fa-file-image text-green-500 mr-2"></i>
                    成绩单
                  </li>
                  <li className="flex items-center">
                    <i class="fa-regular fa-file-alt text-purple-500 mr-2"></i>
                    其他证明材料
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}