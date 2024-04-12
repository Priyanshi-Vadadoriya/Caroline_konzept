import React from 'react'
import { Link } from 'react-router-dom'

const BuyNowBtn = ({item}) => {
  return (
    <div>
      <Link to={`/productDetail/${item?.id}`} state={item?.id}><button className='buynow-btn'>BUY NOW</button></Link>
    </div>
  )
}

export default BuyNowBtn;
