import React from 'react'
import { Link } from 'react-router-dom'

const WishlistCard = ({item}) => {
  return (
    <div>
            <div className="product-card ">
            <div className="product-box">
              <div className="text-center product-images">
              <Link className="wishlist" to={`/wishlist/${item.id}`}>
                <i class="fa-regular fa-heart"></i>
              </Link>
              <Link
               to={`/productDetail/${item.id}`} 
              //  state={item.image} 
               >
                <img src={item.image} alt="" className="img-fluid" />
              </Link>
              </div>
              <div>
                <span>
                  <h3 className="display-4">{item.price}</h3>
                </span>
                <div className="my-3 star-icon ps-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h5 className="fw-bold ps-4">{item.title}</h5>
                <p className="mt-3 ps-4">
                  {item.data}
                </p>
                <div className='mt-4 move-btn ps-4'>
                    <Link>MOVE TO CART</Link>
                </div>

              </div>
            </div>
          </div>
    </div>
  )
}

export default WishlistCard
