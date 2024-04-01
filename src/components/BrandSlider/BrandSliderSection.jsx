import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { brandSliderdata } from "../../Utils/Api";
// import required modules
import { Autoplay } from "swiper/modules";

const BrandSliderSection = () => {
  return (
    <div>
      <section>
        <div className="brand-slider-section">
          <div className="container">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {brandSliderdata.map((item) => (
                <SwiperSlide>
                  <div className="brand-image">
                    <img src={item.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandSliderSection;
