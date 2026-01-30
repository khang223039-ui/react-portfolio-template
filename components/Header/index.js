import React from "react";

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll }) => {
  // Hàm quay về đầu trang (Trang chủ)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-5 flex flex-row items-center justify-between sticky top-0 z-50 bg-transparent w-full p-5 transition-all">
      
      {/* Logo: Bấm vào cũng về Trang chủ */}
      <h1 
        onClick={scrollToTop}
        className="text-2xl font-bold cursor-pointer hover:scale-105 transition-all text-white"
      >
        HoangKhang Dev.
      </h1>

      <div className="flex flex-row items-center gap-4 md:gap-8">
        
        {/* 1. TRANG CHỦ */}
        <button
          onClick={scrollToTop}
          className="text-sm md:text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Trang chủ
        </button>
        
        {/* 2. GIỚI THIỆU */}
        <button
          onClick={handleAboutScroll}
          className="text-sm md:text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Giới thiệu
        </button>

        {/* 3. DỰ ÁN */}
        <button
          onClick={handleWorkScroll}
          className="text-sm md:text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Dự án
        </button>

        {/* 4. LIÊN HỆ */}
        <button
          onClick={handleContactScroll}
          className="text-sm md:text-lg font-medium hover:text-purple-500 cursor-pointer transition-all text-white"
        >
          Liên hệ
        </button>

        {/* Nút CV (Giữ lại để nhà tuyển dụng bấm) - Có thể làm nổi bật hơn */}
        <a 
          href="https://www.topcv.vn/xem-cv/BAJWUgRTAFZXBAQBCQJXUAAGAVYMAVYKAQBTBQ20d5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm md:text-lg font-bold bg-white text-black px-4 py-1 rounded-full hover:bg-purple-500 hover:text-white transition-all ml-2"
        >
          CV của tôi
        </a>

      </div>
    </div>
  );
};

export default Header;
