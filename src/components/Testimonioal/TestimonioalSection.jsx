import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { testimonioaldata } from "../../Utils/Api";
import { Autoplay } from "swiper/modules";

const TestimonioalSection = () => {
  return (
    <div>
      <section>
        <div className="testimonioal-section">
          <div className="container">
            <Swiper
              pagination={{
                type: "fraction",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination,Autoplay]}
              className="mySwiper"
            >
              {testimonioaldata.map((item) => (
                <SwiperSlide>
                  <div className="testimonioal">
                    <div className="row align-items-center">
                      <div className="col-md-6 col-lg-4">
                        <div>
                          <img
                            src={item.image}
                            alt="testimonioal"
                            className="img-fluid"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-8">
                        <div className="testimonioal-info">
                          <h5 className="display-7">{item.subtitle}</h5>
                          <h2 className="display-4">{item.title}</h2>
                          <p>{item.data}</p>
                          <h6>{item.name}</h6>
                          <small>{item.client}</small>
                        </div>
                      </div>
                    </div>
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

export default TestimonioalSection;
