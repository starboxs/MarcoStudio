import React from "react";
import avatar from "../assets/avatar.jpg";

const About = () => {
  // Calculate years of experience since June 2008
  const calculateExperience = () => {
    const startDate = new Date(2014, 3, 1); // June 1, 2008 (months are 0-indexed)
    const currentDate = new Date();
    const diffInYears = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(diffInYears);
  };

  const yearsOfExperience = calculateExperience();

  return (
    <section id="about" className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <img src={avatar} className="rounded-lg shadow-xl w-full md:w-[500px] h-auto md:h-[600px] object-cover mx-auto" alt="大頭照" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">關於劉釗誠</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">我是一位具有{yearsOfExperience}年以上經驗的全端工程師，畢業於國立中山大學資訊管理碩士及國立臺南大學資訊工程學士學位。擅長全端開發，從資料庫設計、後端API開發到前端UI實現，提供完整的技術解決。</p>
          <p className="text-gray-600 mb-6 leading-relaxed">我熱衷於解決複雜的技術挑戰，並致力於持續學習新技術。我的專業能力包括Golang、React、React Native、Node.js、TailwindCSS以及雲端部署等，能獨立完成從構思到上線的完整開發流程。</p>
          <div className="flex flex-row space-x-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">{yearsOfExperience}+</div>
              <div className="text-gray-600">年經驗</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">多元</div>
              <div className="text-gray-600">技術</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">全方位</div>
              <div className="text-gray-600">學習能力</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;