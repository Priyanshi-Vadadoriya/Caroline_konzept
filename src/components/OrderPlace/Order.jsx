import React from "react";
import Banner from "../Banner/Banner";
import orderid from "../../assets/icons/order-icon1.svg";
import Product1 from "../../assets/img/popularProduct/product1.png";
import orderplaced from "../../assets/icons/order-icon2.svg";
import orderplaced3 from "../../assets/icons/order-icon3.svg";

const Order = () => {
  return (
    <div className="order-section">
      <Banner subtitle="Home" subtitle2="Order" title="Order" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="order d-flex align-items-center mt-5">
              <div className="order-img">
                <img src={orderid} alt="" />
              </div>
              <div className="order-id">
                <h3 className="display-7">Order ID: 3354654654526</h3>
                <p>2 Items . On Delivery</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="d-flex justify-content-around text-center order-text">
                <div>
                  <p className="mb-0">Order Placed</p>
                </div>
                <div>
                  <p className="mb-0">Order Confirmed</p>
                </div>
                <div>
                  <p className="mb-0">Order On Delivery</p>
                </div>
                <div>
                  <p className="mb-0 order-delivered">Order Delivered</p>
                </div>
              </div>
            
              <div className="d-flex justify-content-around  order-detail text-center">
                  <div className="order-line"  >
                    <img src={orderplaced} alt="" />
                    <div className="order-placed-img"></div>
                  </div>
                  <div className="order-line"  >
                    <img src={orderplaced} alt="" />
                    <div className="order-placed-img"></div>
                  </div>
                  <div className="order-line"  >
                    <img src={orderplaced} alt="" />
                    <div className="order-placed-img"></div>
                  </div>
                  <div className="order-line"  >
                    <img src={orderplaced3} alt="" />
                  </div>
              </div>

              <div className=" d-flex justify-content-around text-center order-text-light">
                <div>
                  <p>Wed, 1 lth Jan</p>
                </div>
                <div>
                  <p>Wed, 1 lth Jan</p>
                </div>
                <div>
                  <p>Wed, 1 lth Jan</p>
                </div>
                <div>
                  <p className="order-delivered">Expected by, Mon <br/> 16th </p>
                </div>
              </div>
            </div>



            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="product-card">
                  <div className="product-box">
                    <div className="text-center">
                      <img src={Product1} alt="" className="img-fluid" />
                    </div>
                    <div>
                      <span>
                        <h3 className="display-4">$46.00</h3>
                      </span>
                      <div className="my-3 star-icon ps-4">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <small className="product-review ps-4">166 reviews</small>
                      <h5 className="fw-bold ps-4">Organics Shampoo</h5>
                      <p className="mt-3 ps-4">in stock</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="product-card">
                  <div className="product-box">
                    <div className="text-center">
                      <img src={Product1} alt="" className="img-fluid" />
                    </div>
                    <div>
                      <span>
                        <h3 className="display-4">$46.00</h3>
                      </span>
                      <div className="my-3 star-icon ps-4">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <small className="product-review ps-4">166 reviews</small>
                      <h5 className="fw-bold ps-4">Organics Shampoo</h5>
                      <p className="mt-3 ps-4 stock-text">in stock</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="your-order">
              <h6 className="mb-4">
                <span>Your</span> Order
              </h6>
              <form>
                <div className="border-bottom pb-2 d-flex justify-content-between">
                  <div>Product</div>
                  <div>Total</div>
                </div>

                <div className="border-bottom pb-2">
                  <div className="d-flex justify-content-between py-2">
                    <div>Satin gown × 1</div>
                    <div>$14</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>Organics Shampoo × 1</div>
                    <div>$48</div>
                  </div>
                </div>

                <div className="border-bottom pb-2 d-flex justify-content-between py-2">
                  <div>Subtotal</div>
                  <div>$62</div>
                </div>

                <div className="border-bottom pb-2 d-flex justify-content-between py-2">
                  <div>Shipping</div>
                  <div>Flat rate: $2.00</div>
                </div>

                <div className="border-bottom pb-2 d-flex justify-content-between py-2">
                  <div>Total</div>
                  <div>$64</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
