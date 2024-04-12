import React from "react";
import { reviewdata } from "../../Utils/Api";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import ProgressBar from "react-bootstrap/ProgressBar";

const RatingReviews = () => {
  return (
    <div className="rating-reviews-section">
      <Banner subtitle="Home" subtitle2="Reviews" title="RATING & REVIEWS" />

      <div className="container">
        <div className="progressBar-section">
  
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3">
            <div className="rating-star rating-star-border text-center">
                <h3>
                  <i class="fa-solid fa-star star me-2"></i>4.5
                </h3>
                <p>
                  1627 Verified <br />
                  Buyers
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-9">

            <div className="progressbar">
               
               <div className="flex-row mb-2">
                 <i class="fa-solid fa-star me-1"></i> <span className="me-3 ">5</span>
                 <div className="w-100">
                   <ProgressBar now={100} />
                 </div>
               </div>

               <div className="flex-row mb-2">
                 <i class="fa-solid fa-star me-1"></i> <span className="me-3">4</span>
                 <div className="w-100">
                   <ProgressBar now={80} />
                 </div>
               </div>

               <div className="flex-row mb-2">
                 <i class="fa-solid fa-star me-1"></i> <span className="me-3">3</span>
                 <div className="w-100">
                   <ProgressBar now={60} />
                 </div>
               </div>

               <div className="flex-row mb-2">
                 <i class="fa-solid fa-star me-1"></i> <span className="me-3">2</span>
                 <div className="w-100">
                   <ProgressBar now={40} />
                 </div>
               </div>

               <div className="flex-row mb-2">
                 <i class="fa-solid fa-star me-1"></i> <span className="me-3">1</span>
                 <div className="w-100">
                   <ProgressBar now={20} />
                 </div>
               </div>

               
             </div>
            </div>
          </div>

        </div>

        <div className="review-section">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
                    Customer Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
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

export default RatingReviews;
