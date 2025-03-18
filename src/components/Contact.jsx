import React from "react";
 
const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">聯絡我</h2>
          <p className="text-gray-600 max-w-lg mx-auto">有任何專案需求或技術問題，歡迎直接與我聯繫。</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="您的姓名" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">電子郵件</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="您的電子郵件" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">訊息</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="您的訊息"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600 transition shadow-md">發送訊息</button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">聯絡資訊</h3>
              <p className="text-gray-600">如果您有任何疑問，歡迎透過以下方式與我聯繫。</p>
            </div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-gray-600">高雄市鼓山區</span>
            </div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-gray-600">starboxs8917@gmail.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-gray-600">0989-576-xxx</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;