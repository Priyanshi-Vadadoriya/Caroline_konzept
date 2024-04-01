import React from "react";
import naturalcream from "../../assets/img/NaturalCreamSale/naturalCream.png";
import BuyNowBtn from "../BuyNowButton/BuyNowBtn";

const NaturalcreamSaleSection = () => {
  return (
    <div>
      <section>
        <div className="natural-cream-sale-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="natural-cream-image">
                    <img src={naturalcream} alt="" className="img-fluid" object-fit="contain"/>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="natural-cream-content">
                    <h6 className="display-7">SALE</h6>
                    <h2 className="display-4">Natural Cream Sale</h2>
                    <p>Harelip sucker, weasel shark sea lamprey guitarfish boxfish<br/> dojo loach round herring scabbardfish vimba.</p>
                    <div className="time d-flex">
                        <div className="time-box">
                            <span>
                                <p>22</p>
                            </span>
                            <p className="mt-3 hour">HOURS</p>
                        </div>
                        <div>
                            <span className="colon">
                                <p>:</p>
                            </span>
                        </div>
                        <div className="time-box">
                            <span>
                                <p>52</p>
                            </span>
                            <p className="mt-3 hour">MINUTES</p>
                        </div>
                        <div className="time-box second-cox">
                            <span>
                                <p>22</p>
                            </span>
                            <p className="mt-3 hour">SECONDS</p>
                        </div>
                    </div>
                    <BuyNowBtn/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaturalcreamSaleSection;
