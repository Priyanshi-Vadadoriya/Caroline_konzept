import React from "react";
import Heading from "../MainHeading/Heading";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { bestProductdata } from "../../Utils/Api";
import { Autoplay } from "swiper/modules";

const BestProductSection = () => {
  return (
    <div>
      <section>
        <div className="best-product-section">
          <div className="container">
            <Heading title="BEST PRODUCTS" />
            <div className="row">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
                pagination={{
                  type: 'fraction',
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
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
              >
                  {
                  bestProductdata.map((item) => (
                    <SwiperSlide key={item.id}>
                    <div className='best-product-card d-flex justify-content-center align-items-center'>
                          <div className='col-6'>    
                            <div className='best-product-info'>
                              <h2 className='display-6 fw-400'>{item.price}</h2>
                              <h3 className='display-6 fw-600 mb-3'>{item.name}</h3>
                              <p>{item.data}</p>
                              <p>{item.detail}</p>
                              <div className="mt-4">
                                <Link>BUY NOW</Link>
                              </div>
                            </div>
                          </div>
                          <div className='col-6'>    
                            <div className='best-product-img'>
                              <img src={item.image} alt='' className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                  </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestProductSection;
