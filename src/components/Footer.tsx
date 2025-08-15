import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
        <div className="flex items-center mb-4">
          <img 
            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/251204584706/attachment/LOGO_Green_20250814161226.png" 
            alt="CREST Lab Logo" 
            className="w-10 h-10 rounded-lg mr-3 object-contain"
          />
           <span className="text-xl font-bold">集成电路可靠性与热管理实验室</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              专注于前沿科学研究，致力于推动科技创新与发展。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-github text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-google text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/facility" className="text-gray-400 hover:text-white transition-colors">研究设施</Link></li>
              <li><Link to="/journals" className="text-gray-400 hover:text-white transition-colors">科研论文</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">新闻资讯</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">更多</h3>
            <ul className="space-y-2">
              <li><Link to="/members" className="text-gray-400 hover:text-white transition-colors">团队成员</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">生活掠影</Link></li>
              <li><Link to="/join" className="text-gray-400 hover:text-white transition-colors">加入我们</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3 text-gray-400">
               <li className="flex items-start">
                <i class="fa-solid fa-map-marker-alt mt-1 mr-3 text-gray-500"></i>
                <span>广东省珠海市中山大学珠海校区瀚林1号楼C412</span>
              </li>
              <li className="flex items-center">
                <i class="fa-solid fa-phone mr-3 text-gray-500"></i>
                <span>0756-3668562</span>
              </li>
              <li className="flex items-center">
                <i class="fa-solid fa-envelope mr-3 text-gray-500"></i>
                <span>sysu_crest@163.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
           <p className="text-gray-500 text-sm">© {new Date().getFullYear()} 集成电路可靠性与热管理实验室. 保留所有权利.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">使用条款</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}