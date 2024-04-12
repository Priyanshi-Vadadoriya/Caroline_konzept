import React from "react";
import BuyNowBtn from "../BuyNowButton/BuyNowBtn";
import carticon from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

const AddToCartWishlist = ({item}) => {
  const textmethod = (id) => {
    <Link to="/productDetail" ><img src={carticon} alt="" /></Link>
  }
  return (
    <div>
      <div className="d-flex gap-3 ps-4">
        <BuyNowBtn item={item} />

        <div className="cart" onClick={() => textmethod(item?.id)}>
        {/* {textmethod(item.id)} */}
          <Link to="/productDetail" state={item?.id}  ><img src={carticon} alt="" /></Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCartWishlist;
