import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Productdata } from "../../Utils/Api";
import { Link } from "react-router-dom";
import producticon from "../../assets/icons/producticon.svg";
import producticon2 from "../../assets/icons/producticon2.svg";
const Product = () => {
  return (
    <div className="productPage">
      <Banner subtitle="Home" subtitle2="Products" title="ALL PRODUCTS"/>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3">
            <div className="filters d-flex justify-content-between">
              <h2>Filters</h2>
              <p>
                <Link>Clear all</Link>
              </p>
            </div>
            <div className="sortby">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Sort By
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    <div className="sortby-item">
                      <p><Link><img src={producticon} alt=""/>Popularity</Link></p>
                      <p><Link className="rating"><img src={producticon2} alt=""/>Rating: Low To High</Link></p>
                      <p><Link><img src={producticon} alt=""/>Cost: High to Low</Link></p>
                      <p><Link><img src={producticon} alt=""/>Cost: Low To High</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="brands">
              <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Brands
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne2" className="accordion-collapse collapse show">
                  <div c  lass="accordion-body">
                    <div className="brand">
                      <p><input type="checkbox"/> L'Oréal Paris</p>
                      <p><input type="checkbox"/> Maybelline New York</p>
                      <p><input type="checkbox"/> Estée Lauder</p>
                      <p><input type="checkbox"/> Clinique</p>
                      <p><input type="checkbox"/> Lakmé</p>
                      <p><input type="checkbox"/> Revlon</p>
                      <p><input type="checkbox"/> Biotique</p>
                      <p><input type="checkbox"/> VLCC</p>
                      <p><input type="checkbox"/> Lotus Herbals</p>
                      <p><input type="checkbox"/> Nykaa Cosmetics</p>
                      <p><input type="checkbox"/> Patanjali Ayurved</p>
                      <p className="more-item"><Link>+425 More</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="categories">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne3" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Categories
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne3" className="accordion-collapse collapse show">
                    <div c  lass="accordion-body">
                      <div className="category">
                        <p><input type="checkbox"/> Makeup</p>
                        <p><input type="checkbox"/> Lipstick</p>
                        <p><input type="checkbox"/> Eyelinear</p>
                        <p><input type="checkbox"/> Haircare</p>
                        <p><input type="checkbox"/> Fragrance</p>
                        <p><input type="checkbox"/> Body Care</p>
                        <p><input type="checkbox"/> Men's Grooming</p>
                        <p><input type="checkbox"/> Tools & Accessories</p>
                        <p><input type="checkbox"/> Blush</p>
                        <p><input type="checkbox"/> Concealer</p>
                        <p><input type="checkbox"/> Personal Care</p>
                        <p className="more-item"><Link>+226 More</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rating">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne4" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Rating
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne4" className="accordion-collapse collapse show">
                    <div c  lass="accordion-body">
                      <div className="category">
                        <p><input type="checkbox"/><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                        <p><input type="checkbox"/> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star dark-star"></i></p>
                        <p><input type="checkbox"/> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star dark-star"></i><i className="fa-solid fa-star dark-star"></i></p>
                        <p><input type="checkbox"/> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star dark-star"></i><i className="fa-solid fa-star dark-star"></i><i className="fa-solid fa-star dark-star"></i></p>
                        <p><input type="checkbox"/> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star dark-star"></i><i className="fa-solid fa-star dark-star"></i><i className="fa-solid fa-star dark-star"></i><i className="fa-solid fa-star dark-star"></i></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-12 col-lg-9">
            <div className="row">
              {Productdata.map((item) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                    <ProductCard item={item}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
