import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const FeaturedSlide = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/J7dgSkG/Preview-logo-03.png"
            alt=""
            className="w-[250px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/gPKppWF/Preview-logo-02.png"
            alt=""
            className="w-[250px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/p03sjRc/Preview-logo-06.png"
            alt=""
            className="w-[250px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NrxqdBy/Preview-logo-01.png"
            alt=""
            className="w-[250px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/VTF524h/Preview-logo-04.png"
            alt=""
            className="w-[250px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/gPKppWF/Preview-logo-02.png"
            alt=""
            className="w-[250px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/VTF524h/Preview-logo-04.png"
            alt=""
            className="w-[250px] text-gray-400"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedSlide;
