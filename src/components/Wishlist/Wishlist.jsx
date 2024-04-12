import React from "react";
import Banner from "../Banner/Banner";
import { Productdata, idList } from "../../Utils/Api";
import { useParams } from "react-router-dom";
import WishlistCard from "../WishlistCard/WishlistCard";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";

const Wishlist = () => {
  const { wishlistid } = useParams();
  idList.push(wishlistid);
  var un = new Set(idList);
  let wishListIdList = [...un];

  const renderWishlist = () => {
    return wishListIdList.length == 0 ? (
      <h1>Wishlist is Empty</h1>
    ) : (
      wishListIdList.map((id) => {
        return Productdata.filter((item) => item.id == id).map((item) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-3">
              <WishlistCard item={item} />
            </div>
          );
        });
      }) 
    );
  };

  return (
    <div>
      <Banner subtitle="Home" subtitle2="Wishlist" title="Wishlist" />
      <div className="container">
        <div className="row">{renderWishlist()}</div>
      </div>
    </div>
  );
};

export default Wishlist;
