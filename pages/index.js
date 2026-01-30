import { useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // 1. Tạo các "cái neo" (Ref) để cuộn tới
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef(); // <-- Đã thêm cái neo cho phần Liên hệ
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // 2. Các hàm xử lý cuộn trang
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // <-- Hàm cuộn xuống Liên hệ (Footer)
  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        {/* Truyền các hàm cuộn xuống cho Header */}
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll} 
        />

        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            {/* Chữ Xin chào đã chỉnh nhỏ gọn */}
            <h1
              ref={textOne}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        
        {/* Phần DỰ ÁN (Work) */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Dự án.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* Phần DỊCH VỤ / KỸ NĂNG */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Kỹ năng.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Phần GIỚI THIỆU (About) */}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Giới thiệu.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>

        {/* Phần LIÊN HỆ (Contact) - Đã gắn Ref vào đây */}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={contactRef}>
          <Footer />
        </div>

      </div>
    </div>
  );
}

// Import Header ở cuối để tránh lỗi Reference
import Header from "../components/Header";
