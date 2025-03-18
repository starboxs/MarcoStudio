import React from "react";

const Hero = () => {
  return (
    <section id="home" className="w-full pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
               <div className="md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-800 max-w-2xl">全端碼農，超強打雜小弟</h1>
          <p className="mb-8 text-lg text-gray-600 leading-relaxed max-w-xl">我是劉釗誠，全端工程師，目前專注於 React、React Native 與 Golang 的開發工作，近期學習 AI 應用與 Prompt Engineering 的實作與探索。</p>
          <a href="#portfolio">
            <button className="bg-blue-500 text-white font-bold rounded-full px-8 py-3 transition hover:bg-blue-600 shadow-lg">查看作品</button>
          </a>
        </div>
        <div className="md:w-1/2">
          <img className="object-cover rounded-lg shadow-xl max-w-full h-auto" src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&w=600&h=400" alt="全端開發" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
