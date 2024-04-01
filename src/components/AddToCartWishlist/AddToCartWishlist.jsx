import React from "react";
import BuyNowBtn from "../BuyNowButton/BuyNowBtn";
import carticon from "../../assets/icons/cart.svg";

const AddToCartWishlist = () => {
  return (
    <div>
      <div className="d-flex gap-3">
        <BuyNowBtn />
        <div className="cart">
          <img src={carticon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddToCartWishlist;
