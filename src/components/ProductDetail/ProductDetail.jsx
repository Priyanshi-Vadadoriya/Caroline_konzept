import React, { useState } from "react";
import Banner from "../Banner/Banner";
import { Link, useLocation, useParams } from "react-router-dom";
import { Productdata, reviewdata } from "../../Utils/Api";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import rightArrow from "../../assets/icons/rightArrow.svg";
import cart1 from "../../assets/img/shopping-cart-img/shoppingcart-img1.png";
import cart2 from "../../assets/img/shopping-cart-img/shoppingcart-img2.png";

const ProductDetail = () => {
  const location = useLocation();
  console.log(location.state);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const handledecrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  const handleincrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderCustomButton = () => (
    <div
      onClick={() => {
        setShow(!show);
      }}
    >
      <img src={rightArrow} alt="" />
    </div>
  );

  return (
    <div className="product-detail">
      <Banner
        subtitle="Home"
        subtitle2="Product Detail"
        title="PRODUCT DETAIL"
      />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-sm-12 col-md-6 col-lg-6">
            {Productdata.filter((item) => item.id == id).map((item) => {
              return (
                <div className="product-img">
                  <img src={item.image} alt="" className="img-fluid" />
                </div>
              );
            })}
          </div>

          {/* <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="product-img">
              <img src={location.state} alt="" className="img-fluid" />
            </div>
          </div> */}

          <div className="col-sm-12 col-md-6 col-lg-6">
            {Productdata.filter((item) => item.id == id).map((item) => {
              return (
                <div className="Premioum-collection">
                  <h6>Premioum collection</h6>
                  <h2 className="display-5">{item.title}</h2>
                  <p>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span>166 reviews</span>
                  </p>
                  <div className="ml-bottle">
                    <div className="mb-4">
                      <input type="radio" name="bottle" id="bottle-1" />
                      <label for="bottle-1">
                        15 ML Bottle <b>$250.00</b>
                      </label>
                    </div>
                    <div>
                      <input type="radio" name="bottle" id="bottle-2" />
                      <label for="bottle-1">
                        15 ML Bottle <b>$250.00</b>
                      </label>
                      <p>extra 25%</p>
                    </div>
                  </div>
                  <div className="counting">
                    <div className="count d-flex justify-content-between align-items-center">
                      <button onClick={handledecrement} className="decrement">
                        -
                      </button>
                      <p>{count}</p>
                      <button onClick={handleincrement} className="increment">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="shipping">
                    <input
                      type="radio"
                      name="shipping"
                      id="bottle-1"
                      className="me-4"
                    />
                    <label for="shipping" className="pt-4 pb-4">
                      Shipping from USA, shipping fees $4.22
                    </label>
                    <div className="d-flex align-items-center">
                      <h2>{item.price}</h2>
                      <div>
                        <Button variant="primary" onClick={handleShow} className="me-2 add-to-cart">
                          ADD TO CART
                        </Button>
                        <Offcanvas
                          placement="end"
                          show={show}
                          onHide={handleClose}
                        >
                          <Offcanvas.Header>
                            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                            {renderCustomButton()}
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            <div className="shopping-cart-sec">
                              <div className="shopping-cart mb-3">
                                <div className="row">
                                  <div className="col-sm-12 col-md-6 col-lg-2">
                                    <img src={cart1} alt="" />
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-10">
                                    <div className="ps-4">
                                      <div className="d-flex justify-content-between">
                                        <h5>Body oil Easy spray</h5>
                                        <h6>
                                          <i class="fa-solid fa-xmark"></i>
                                        </h6>
                                      </div>
                                      <p>1 x $25.36</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="shopping-cart">
                                <div className="row">
                                  <div className="col-sm-12 col-md-6 col-lg-2">
                                    <img src={cart2} alt="" />
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-10">
                                    <div className="ps-4">
                                      <div className="d-flex justify-content-between">
                                        <h5>Body oil Creme z</h5>
                                        <h6>
                                          <i class="fa-solid fa-xmark"></i>
                                        </h6>
                                      </div>
                                      <p>1 x $25.36</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between shopping-total my-4">
                                <h5>Subtotal:</h5>
                                <h5>$25.36</h5>
                              </div>

                              <div className="mb-3">
                                <button className="submit-btn">SUBMIT</button>
                              </div>

                              <div>
                                <button className="submit-btn checkout-btn">
                                  <Link to="/checkout">CHECKOUT</Link>
                                </button>
                              </div>
                            </div>
                          </Offcanvas.Body>
                        </Offcanvas>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="review-section">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Specification
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Review
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0"
                >
                  <div className="specification">
                    <div className="row pt-4 pb-4">
                      <div className="col-3">
                        <div className="sepcification-title">
                          <p>weight</p>
                          <p>Dimensions</p>
                          <p>Materials</p>
                          <p>Other Info</p>
                        </div>
                      </div>
                      <div className="col-9">
                        <div>
                          <p>250 g</p>
                          <p>10 x 10 x 15 cm</p>
                          <p>60% cotton, 40% polyester</p>
                          <p>
                            American heirloom jean shorts pug seitan letterpress
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius velit corporis quo voluptate culpa soluta, esse
                        accusamus, sunt quia omnis amet temporibus sapiente
                        harum quam itaque libero tempore. Ipsum, ducimus. lorem
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex="0"
                >
                  {reviewdata.map((item) => (
                    <div
                      className="reiview-card"
                      style={{ margin: item.margin }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="person-img">
                            <img src={item.image} alt="person" />
                          </div>
                          <div className="person-name ps-3 fw-900">
                            {item.name}
                          </div>
                        </div>
                        <div className="rating-star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </div>
                      </div>
                      <p>{item.data}</p>
                    </div>
                  ))}
                  <div className="viewAll">
                    <Link to="/ratingReview">View all</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="leaveAReply">
                <h3>
                  <span>Leave a reply</span>
                </h3>
                <div>
                  <form>
                    <label>Enter Your feedback</label>
                    <div className="feedback">
                      <input type="text"></input>
                    </div>
                    <label>Full name</label>
                    <div>
                      <input type="text"></input>
                    </div>
                    <label>Email Address</label>
                    <div>
                      <input type="text"></input>
                    </div>
                    <div className="rating">
                      <label className="me-5">Provide your rating</label>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <input type="submit" className="submit-btn"></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
