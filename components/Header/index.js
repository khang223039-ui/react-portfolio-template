import React from "react";

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll }) => {
  return (
    <div className="mt-10 flex flex-row items-center justify-between sticky top-0 z-10 bg-white dark:bg-black w-full p-5 transition-all">
      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer hover:scale-105 transition-all dark:text-white text-black">
        HoangKhang Dev.
      </h1>

      {/* Menu */}
      <div className="hidden md:flex flex-row items-center gap-10">
        <button
          onClick={handleWorkScroll}
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all dark:text-white text-black"
        >
          Dự án
        </button>
        
        <button
          onClick={handleAboutScroll}
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all dark:text-white text-black"
        >
          Giới thiệu
        </button>

        <a 
          href="https://www.topcv.vn/xem-cv/BAJWUgRTAFZXBAQBCQJXUAAGAVYMAVYKAQBTBQ20d5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all dark:text-white text-black"
        >
          CV của tôi
        </a>

        <button
          onClick={handleContactScroll}
          className="text-lg font-medium hover:text-purple-500 cursor-pointer transition-all dark:text-white text-black"
        >
          Liên hệ
        </button>
      </div>
    </div>
  );
};

export default Header;
