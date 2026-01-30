import React from "react";

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll }) => {
  return (
    <div className="mt-5 flex flex-row items-center justify-between sticky top-0 z-50 bg-transparent w-full p-5 transition-all">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer hover:scale-105 transition-all text-white">
        HoangKhang Dev.
      </h1>

      {/* SỬA LỖI: Đã xóa chữ "hidden" để menu LUÔN LUÔN HIỆN */}
      <div className="flex flex-row items-center gap-4 md:gap-10">
        
        <button
          onClick={handleWorkScroll}
          className="text-sm md:text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Dự án
        </button>
        
        <button
          onClick={handleAboutScroll}
          className="text-sm md:text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Giới thiệu
        </button>

        <a 
          href="https://www.topcv.vn/xem-cv/BAJWUgRTAFZXBAQBCQJXUAAGAVYMAVYKAQBTBQ20d5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm md:text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          CV của tôi
        </a>

        <button
          onClick={handleContactScroll}
          className="text-sm md:text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Liên hệ
        </button>
      </div>
    </div>
  );
};

export default Header;
