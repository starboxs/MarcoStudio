import React from "react";

const Services = () => {
  return (
    <section id="services" className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">相關技術</h2>
          <p className="text-gray-600 max-w-lg mx-auto">提供全方位的軟體開發服務，從前端到後端，從架構設計到產品部署。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-blue-500 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">前端開發</h3>
            <p className="text-gray-600">專精於React、React Native和TailwindCSS，打造直覺且美觀的用戶界面，提供絕佳的使用者體驗。</p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-blue-500 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">後端開發</h3>
            <p className="text-gray-600">使用Golang、Node.js開發高效能的後端服務，專精於RESTful API和gRPC，確保數據安全與系統穩定。</p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-blue-500 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">雲端架構</h3>
            <p className="text-gray-600">熟悉GCP平台服務，包括VM、Ubuntu、Docker、GCS等技術的應用與部署，打造穩定高效的雲端環境。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;