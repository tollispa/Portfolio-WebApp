import { Swiper, SwiperSlide } from "swiper/react";

import img2 from "../ImageOfProjects/2.png";
import img8 from "../ImageOfProjects/8.png";
import img19 from "../ImageOfProjects/19.png";

import img14 from "../ImageOfProjects/14.png";

import "swiper/css";

const MySwiperComponent = () => {
  return (
    <div className="h-auto m-10 bg-white">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={img2} alt="/"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="/"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img19} alt="/"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img14} alt="/"></img>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
};

export default MySwiperComponent;
