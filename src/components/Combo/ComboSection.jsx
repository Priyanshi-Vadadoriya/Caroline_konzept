import React from "react";
import Heading from "../MainHeading/Heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import AddToCartWishlist from "../AddToCartWishlist/AddToCartWishlist";
import { combodata } from "../../Utils/Api";
import { Autoplay } from "swiper/modules";

const ComboSection = () => {
  return (
    <div>
      <section>
        <div className="combo-section">
          <div className="container">
            <div className="subheading">JUST FOR YOU</div>
            <Heading title="COMBO" />
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                  type: 'fraction',
                }}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination,Autoplay]}
              className="mySwiper"
            >
            {
                combodata.map((item)=>(
                    <SwiperSlide>
                <div className="combo-box">
                <div className="combo-card">
                    <div className="combo-image text-center">
                        <img src={item.image} alt="" className="img-fluid" object-fit="cover"/>
                    </div>
                    <div className="combo-info">
                        <h2>{item.price}</h2>
                        <h3>{item.title}</h3>
                        <p className="sub-title">{item.subtitle}</p>
                        <p className="mb-4">{item.data}</p>
                        <AddToCartWishlist/>
                    </div>
                </div>
                </div>
              </SwiperSlide>
                ))
            }
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComboSection;
