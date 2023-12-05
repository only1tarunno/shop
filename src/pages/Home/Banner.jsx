import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slide2.webp";
import slider3 from "../../assets/slide3.webp";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";

const Banner = () => {
  const itemsData = [
    {
      name: "Looking for the best price",
      bgimg: slider1,
      description: "Elessi store",
    },
    {
      name: `Autum & Winter 2023`,
      bgimg: slider2,
      description: "Pure cotton",
    },
    {
      name: "Spring summer Collection",
      bgimg: slider3,
      description: "New fashion",
    },
  ];

  const { name, image, description, bgimg } = itemsData[0];
  const bannerInfo = { name, image, description, bgimg };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [curentinfo, setCurrentinfo] = useState(bannerInfo);
  const [my_swiper, set_my_swiper] = useState({});

  const handleNextClick = () => {
    const current = (currentIndex + 1) % itemsData.length;
    setCurrentIndex(current);
    my_swiper.slideNext();
    const singleSlider = itemsData.find(
      (singleSlider, index) => index === current
    );
    const { name, description, bgimg } = singleSlider;
    setCurrentinfo({ name, description, bgimg });
  };

  const handlePrevClick = () => {
    let current = currentIndex - 1;
    if (current < 0) {
      current = itemsData.length - 1;
    }
    my_swiper.slidePrev();
    setCurrentIndex(current);
    const singleSlider = itemsData.find(
      (singleSlider, index) => index === current
    );
    const { name, description, bgimg } = singleSlider;
    setCurrentinfo({ name, description, bgimg });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${curentinfo.bgimg})`,
      }}
      className="home-banner bg-center bg-no-repeat bg-cover relative -z-10"
    >
      <div className="2xl:px-56 xl:px-48 md:px-10 sm:px-2 px-5 mx-auto min-h-[600px] relative z-50 flex justify-center py-8 lg:py-0 lg:justify-between items-center flex-col lg:flex-row">
        <div className="w-full lg:w-[600px] px-5 xl:px-0 text-center lg:text-start">
          <p className="text-base lg:text-lg text-[#333] uppercase font-semibold tracking-widest">
            {curentinfo.description}
          </p>
          <h2 className="font-bold text-4xl lg:text-7xl w-full lg:w-[520px] text-[#333] py-4 lg:py-8">
            {curentinfo.name}
          </h2>

          <div>
            <Link to="/shop">
              <Button text={"Shop Now"}></Button>
            </Link>
          </div>
          <div className="absolute top-1/2 z-50 left-0  lg:left-4 -translate-y-1/2">
            <button
              className="text-[#f76b6a] text-3xl"
              onClick={handlePrevClick}
            >
              <FaAngleLeft />
            </button>
          </div>
          <div className="absolute top-1/2 z-50 right-0  lg:right-4 -translate-y-1/2">
            <button
              className="text-[#f76b6a]  text-3xl"
              onClick={handleNextClick}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Swiper
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          ></Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
