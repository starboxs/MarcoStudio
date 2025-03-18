import React, { useState } from "react";
import liveStreamImage from "../assets/IMG_1124.jpg";
import chhoetaigiImage from "../assets/chhoetaigi.png";
import nafpeImage from "../assets/nafpe.png";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="portfolio" className="w-full py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">工作經歷</h2>
          <p className="text-gray-600 max-w-lg mx-auto">我參與的工作，使用的技術能力。</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Portfolio Items */}
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&h=300" className="w-full h-56 object-cover" alt="醫療AI平台" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">醫療AI服務平台</h3>
              <p className="text-gray-600">結合醫療與AI技術的全端開發專案，使用Golang、React Native和MySQL。</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?auto=format&fit=crop&w=500&h=300" className="w-full h-56 object-cover" alt="裝潢交易平台" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">裝潢交易平台</h3>
              <p className="text-gray-600">透明公平的裝潢交易環境，使用Vue和React Native開發的跨平台應用。</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=500&h=300" className="w-full h-56 object-cover" alt="物聯網控制系統" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">物聯網控制系統</h3>
              <p className="text-gray-600">結合硬體與軟體的IoT控制系統，用於光電技術設備的即時控制與監測。</p>
            </div>
          </div>
        </div>

        {/* 展開收合按鈕 */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition px-6 py-2 rounded-full font-medium shadow-md"
          >
            {showMore ? "收起驕傲" : "查看更多"}
          </button>
        </div>

        {/* 斜槓經驗區塊 */}
        {showMore && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* 經驗 1 - 直播技術協助 */}
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition bg-white">
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={liveStreamImage}
                  className="w-full h-full object-cover"
                  alt="直播技術協助"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">直播技術</h3>
                <p className="text-gray-600">
                提供超過百場低成本直播技術支援，打造高效串流解決方案。
                自建 RTMP Server，運用 OBS 串流軟體搭配手機端應用，協助客戶實現 Facebook、YouTube、17直播等多平台同步直播，有效分流流量。以最低成本達成高品質直播目標，滿足多元客戶需求，並在 AI 尚未推出時。
                </p>
              </div>
            </div>

            {/* 經驗 2 - 找台語網站維護 */}
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition bg-white">
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={chhoetaigiImage}
                  className="w-full h-full object-cover"
                  alt="找台語網站維護"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  <a href="https://chhoe.taigi.info/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    「找台語」網站維護
                  </a>
                </h3>
                <p className="text-gray-600">
                  協助維護<a href="https://chhoe.taigi.info/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">找台語</a>網站，負責網站日常與技術問題排解，進行伺服器效能優化與系統穩定性提升，確保網站持續穩定運作並提升用戶體驗。
                </p>
              </div>
            </div>

            {/* 經驗 3 - 消防設備公會官網開發 */}
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition bg-white">
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={nafpeImage}
                  className="w-full h-full object-cover"
                  alt="消防設備公會官網"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  <a href="https://nafpe.ddns.net/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    消防設備公會官網開發
                  </a>
                </h3>
                <p className="text-gray-600">
                獨立開發前後端設計與部署<a href="https://nafpe.ddns.net/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">消防設備公會官網</a>，。
                  使用 Next.js 搭配 Golang 並採用 gRPC 協定進行前後端通訊，部署於（GCP），並整合（GCS）作為儲存解決方案。優化 SEO 成效，提升搜尋引擎可見度與流量。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
