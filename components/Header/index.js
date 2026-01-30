import React from "react";

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll }) => {
  return (
    // SỬA: Dùng bg-transparent (trong suốt) và z-50 để luôn nổi lên trên
    <div className="mt-5 flex flex-row items-center justify-between sticky top-0 z-50 bg-transparent w-full p-5 transition-all">
      
      {/* Logo: Ép màu trắng (text-white) */}
      <h1 className="text-2xl font-bold cursor-pointer hover:scale-105 transition-all text-white">
        HoangKhang Dev.
      </h1>

      <div className="hidden md:flex flex-row items-center gap-10">
        {/* Nút Dự án */}
        <button
          onClick={handleWorkScroll}
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Dự án
        </button>
        
        {/* Nút Giới thiệu */}
        <button
          onClick={handleAboutScroll}
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Giới thiệu
        </button>

        {/* Nút CV */}
        <a 
          href="https://www.topcv.vn/xem-cv/BAJWUgRTAFZXBAQBCQJXUAAGAVYMAVYKAQBTBQ20d5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          CV của tôi
        </a>

        {/* Nút Liên hệ */}
        <button
          onClick={handleContactScroll}
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Liên hệ
        </button>
      </div>
    </div>
  );
};

export default Header;
