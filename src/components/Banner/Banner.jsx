import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <div>
      <div className="banner-section">
        <div>
          <Link>{props.subtitle}</Link>
          /<Link>{props.subtitle2}</Link>
        </div>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Banner;
