import React from "react";
import Heading from "../MainHeading/Heading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { popularProductdata } from "../../Utils/Api";
import AddToCartWishlist from "../AddToCartWishlist/AddToCartWishlist";
import { Autoplay } from "swiper/modules";

const PopularProductSection = () => {
  return (
    <div>
      <section>
        <div className="popular-product-section">
          <div className="container">
            <Heading title="POPULAR PRODUCTS" />
            <div className="row">
              <Swiper
                spaceBetween={10}
                pagination={{
                  type: "fraction",
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
              >
                {popularProductdata.map((item) => (
                  <SwiperSlide>
                    <div className="product-card">
                      <div className="product-box">
                        <div className="text-center">
                          <img src={item.image} alt="" className="img-fluid" />
                        </div>
                        <div>
                          <span>
                            <h3 className="display-4">{item.price}</h3>
                          </span>
                          <div className="my-3 star-icon">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <h5 className="fw-bold">{item.title}</h5>
                          <p className="mt-3">{item.data}</p>
                          <AddToCartWishlist />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularProductSection;
