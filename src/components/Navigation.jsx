import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Marco工作室</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-blue-500 transition">首頁</a>
          <a href="#services" className="text-gray-800 hover:text-blue-500 transition">技術</a>
          <a href="#portfolio" className="text-gray-800 hover:text-blue-500 transition">作品集</a>
          <a href="#about" className="text-gray-800 hover:text-blue-500 transition">關於我</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500 transition">聯絡方式</a>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-4 shadow-inner">
          <a href="#home" className="block py-2 text-gray-800 hover:text-blue-500 transition">首頁</a>
          <a href="#services" className="block py-2 text-gray-800 hover:text-blue-500 transition">技術</a>
          <a href="#portfolio" className="block py-2 text-gray-800 hover:text-blue-500 transition">作品集</a>
          <a href="#about" className="block py-2 text-gray-800 hover:text-blue-500 transition">關於我</a>
          <a href="#contact" className="block py-2 text-gray-800 hover:text-blue-500 transition">聯絡方式</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;