import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../MainHeading/Heading'


const CustomerFavorites = () => {
  return (
    <div>
      <section>
        <div className='customer-favorites-section'>
          <div className='container'>
            <Heading title='CUSTOMER FAVORITES'/>
            <div className='row mt-4'>
              <div className='col-sm-12 col-md-12 col-lg-6'>
                <div className='makeup-collection'>
                  <h3 className='display-4'>Makeup <br/> collection</h3>
                  <p>DAILY ESSENTIALS</p>
                  <Link>Explore more</Link>
                </div>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-6'>
                <div className='makeup-collection lipstick-collection'>
                <h3 className='display-4'>Lipstick <br/> Collection</h3>
                  <p>DAILY ESSENTIALS</p>
                  <Link>Explore more</Link> 
                </div>
              </div>
              <div className='col-12'>
                <div className='eyeliner-collection'>
                  <div className='eyeliner-info'>
                  <h3 className='display-4'>Eyelinear Collection</h3>
                    <p>DAILY ESSENTIALS</p>
                  <Link>Explore more</Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerFavorites
