import React from "react";

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll }) => {
  return (
    <div className="mt-10 flex flex-row items-center justify-between sticky top-0 z-10 bg-white dark:bg-black w-full p-5 transition-all">
      {/* 1. Phần Tên Logo bên trái */}
      <h1 className="text-2xl font-bold cursor-pointer hover:scale-105 transition-all">
        HoangKhang Dev.
      </h1>

      {/* 2. Phần Menu bên phải */}
      <div className="hidden md:flex flex-row items-center gap-10">
        <button
          onClick={handleWorkScroll}
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all"
        >
          Dự án
        </button>
        
        <button
          onClick={handleAboutScroll}
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all"
        >
          Giới thiệu
        </button>

        {/* Nút bấm chuyển sang TopCV */}
        <a 
          href="https://www.topcv.vn/xem-cv/BAJWUgRTAFZXBAQBCQJXUAAGAVYMAVYKAQBTBQ20d5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all"
        >
          CV của tôi
        </a>

        <button
          onClick={handleContactScroll}
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all"
        >
          Liên hệ
        </button>
      </div>
    </div>
  );
};

export default Header;
