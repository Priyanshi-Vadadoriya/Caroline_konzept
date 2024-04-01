import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { sliderHomedata } from "../../Utils/Api";
import BuyNowBtn from "../BuyNowButton/BuyNowBtn";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const CleanFreshSection = () => {
  return (
    <div>
      <section>
        <div className="clean-fresh-section" >
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            pagination={{
              type: "fraction",
            }}
            className="mySwiper"
          >
            {sliderHomedata.map((item) => (
              <SwiperSlide>
                <div
                  className="clean-fresh"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="clean-fresh-info">
                    <h1 className="display-5">{item.title}</h1>
                    <h3 className="display-7">{item.subtitle}</h3>
                    <p>{item.data}</p>
                    <BuyNowBtn />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="social-icon fs-5 mb-2">
            <Link><i class="fa-brands fa-pinterest-p"></i></Link>
            <Link><i class="fa-brands fa-twitter"></i></Link>
            <Link><i class="fa-brands fa-facebook-f"></i></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleanFreshSection;
