import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: '首页', path: '/' },
  { label: '团队成员', path: '/members' },
  { label: '科研论文', path: '/journals' },
  { label: '新闻资讯', path: '/news' },
  { label: '研究设施', path: '/facility' },
  { label: '生活掠影', path: '/gallery' },
  { label: '加入我们', path: '/join' }
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
      : 'bg-white py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          <Link to="/" className="flex items-center">
  <img 
    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/251204584706/attachment/LOGO_Green_Ver2.0_20250814172137.png" 
    alt="CREST Lab Logo" 
   className="w-100 h-20 rounded-lg object-contain"
  />
</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
               className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                       ? 'bg-green-700 text-white'
                       : 'text-gray-700 hover:bg-green-100 hover:text-green-900'
                 }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">打开主菜单</span>
              {mobileMenuOpen ? (
                <i class="fa-solid fa-times text-xl"></i>
              ) : (
                <i class="fa-solid fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                   location.pathname === item.path
                      ? 'bg-green-700 text-white'
                       : 'text-gray-700 hover:bg-green-100 hover:text-green-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}