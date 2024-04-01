import React from "react";
import Heading from "../MainHeading/Heading";
import { beautyForBetterdata } from "../../Utils/Api";
import beauty from "../../assets/img/BeautyForBetter/beautyImg.png";
import star from "../../assets/icons/star.svg";

const BeautyForABetterSection = () => {
  return (
    <div>
      <section>
        <div className="beauty-for-a-better-section">
          <div className="container">
            <Heading title="BEAUTY FOR A BETTER" />
            <Heading title="FUTURE" />
            <div className="start-icon">
                  <img src={star} alt="" className="star-icon-img"/>
                </div>
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">

                {beautyForBetterdata.map((item) => (
                  <div
                    className="experience"
                    style={{ background: item.background, border: item.border }}
                  >
                    <h2 className="display-3">15+</h2>
                    <h2 className="display-3">Years of Experience</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      utui Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit utui adipiscing elit utui Lorem ipsum dolo
                    </p>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="beauty-image ">
                    <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit utui Lorem ipsum dolor sit amet, consectetur adipiscing elit utui adipiscing elit utui Lorem ipsum dolo consectetur adipiscing elit utui adipiscing elit utui Lorem ipsum dolo</p>
                    <div className="text-end star-img pb-4">
                        <img src={star} alt=""/>
                    </div>
                    <div className="good-vibe-img">
                        <img src={beauty} alt=""className="img-fluid good-vibe-img" objectFit="cover"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeautyForABetterSection;
