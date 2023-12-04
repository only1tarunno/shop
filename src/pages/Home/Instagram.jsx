import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/5.jpg";
import img5 from "../../assets/6.jpg";
import img6 from "../../assets/7.jpg";
import img7 from "../../assets/8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const Instagram = () => {
  return (
    <div className="">
      <div className="pt-5 pb-10">
        <h3 className="text-sm font-bold text-[#999999] text-center">
          STAY UP-TO-DATE
        </h3>
        <h2 className="text-4xl font-bold text-[#333] text-center">
          Follow Us On Instagram
        </h2>
      </div>
      <div className="px-5">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} className="w-80 h-80 object-cover mx-auto" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} className="w-80 h-80 object-cover mx-auto" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} className="w-80 h-80 object-cover mx-auto" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} className="w-80 h-80 object-cover mx-auto" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} className="w-80 h-80 object-cover mx-auto" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} className="w-80 h-80 object-cover mx-auto" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} className="w-80 h-80 object-cover mx-auto" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Instagram;
